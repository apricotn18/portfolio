import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_TOKEN });

const SYSTEM_PROMPT = `あなたはフロントエンドエンジニア Kyoko Kasahara のポートフォリオサイトのアシスタントです。
訪問者からKyokoについての質問に日本語または英語で簡潔に答えてください。
以下はKyokoに関する情報です。
- 職種: フロントエンドエンジニア
- スキル: TypeScript, React, Next.js, SCSS
- このポートフォリオサイト自体もNext.js + TypeScriptで構築されています。
ポートフォリオに関係のない質問には「ポートフォリオに関する質問にお答えしています」と返してください。`;

type GeminiErrorBody = {
	error?: { code?: number; status?: string };
};

function toUserMessage(e: unknown): { message: string; status: number } {
	const body = (e instanceof Error ? JSON.parse(e.message.match(/\{[\s\S]*/)?.[0] ?? '{}') : {}) as GeminiErrorBody;
	const code = body?.error?.code;
	const geminiStatus = body?.error?.status;

	if (code === 429 || geminiStatus === 'RESOURCE_EXHAUSTED') {
		return { message: 'APIの利用制限に達しました。しばらくしてからお試しください。', status: 429 };
	}
	if (code === 401 || code === 403) {
		return { message: 'APIキーが無効です。', status: 403 };
	}
	if (code === 404) {
		return { message: 'AIモデルが見つかりません。', status: 404 };
	}
	console.error('[ask-ai]', e);
	return { message: 'エラーが発生しました。もう一度お試しください。', status: 500 };
}

export async function POST(req: NextRequest) {
	try {
		const { message } = await req.json() as { message: string };
		const response = await ai.models.generateContent({
			model: "gemini-2.0-flash",
			contents: message,
			config: { systemInstruction: SYSTEM_PROMPT },
		});
		return NextResponse.json({ reply: response.text });
	} catch (e) {
		const { message, status } = toUserMessage(e);
		return NextResponse.json({ error: message }, { status });
	}
}
