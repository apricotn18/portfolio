import OpenAI, { APIError } from "openai";
import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rateLimit";

const client = new OpenAI({ apiKey: process.env.GROQ_TOKEN, baseURL: 'https://api.groq.com/openai/v1' });
const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT;

const RATE_LIMIT = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_MESSAGE_LENGTH = 1000;

function toUserMessage(e: unknown): { message: string; status: number } {
	if (e instanceof APIError) {
		if (e.status === 429) {
			return { message: 'APIの利用制限に達しました。しばらくしてからお試しください', status: 429 };
		}
		if (e.status === 503) {
			return { message: 'AIが混み合っています。しばらくしてからお試しください', status: 503 };
		}
		if (e.status === 401 || e.status === 403) {
			return { message: 'APIキーが無効です', status: 403 };
		}
		if (e.status === 404) {
			return { message: 'AIモデルが見つかりません', status: 404 };
		}
	}
	return { message: 'エラーが発生しました。もう一度お試しください', status: 500 };
}

export async function POST(req: NextRequest) {
	try {
		const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
		if (isRateLimited(ip, RATE_LIMIT, RATE_LIMIT_WINDOW_MS)) {
			return NextResponse.json({ error: 'リクエストが多すぎます。しばらくしてからお試しください' }, { status: 429 });
		}

		const { message } = await req.json() as { message: unknown };

		if (typeof message !== 'string' || !message.trim()) {
			return NextResponse.json({ error: 'メッセージを入力してください' }, { status: 400 });
		}
		if (message.length > MAX_MESSAGE_LENGTH) {
			return NextResponse.json({ error: `メッセージは${MAX_MESSAGE_LENGTH}文字以内で入力してください` }, { status: 400 });
		}

		if (process.env.GENAI_MOCK === 'true') {
			return NextResponse.json({ reply: `（モック）「${message}」へのAI返答です。` });
		}

		const response = await client.chat.completions.create({
			model: "openai/gpt-oss-120b",
			messages: [
				...(SYSTEM_PROMPT ? [{ role: 'system' as const, content: SYSTEM_PROMPT }] : []),
				{ role: 'user' as const, content: message },
			],
		});
		return NextResponse.json({ reply: response.choices[0]?.message.content ?? '' });
	} catch (e) {
		console.error(e);
		const { message, status } = toUserMessage(e);
		return NextResponse.json({ error: message }, { status });
	}
}
