"use client"

import { useEffect, useState } from "react";
import { ChatWindow } from './ChatWindow';
import { ChatForm } from './ChatForm';
import type { Message } from './types';
import styles from './styles.module.scss';

const initMessage: Message = {
	role: "assistant",
	text: `こんにちは！
プロフィールなど、ポートフォリオにかかわる質問を何でもしてください！`,
};

export default function AskAI() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const message = input.trim();
		if (!message || isLoading) return;

		setMessages(prev => [...prev, { role: 'user', text: message }]);
		setInput('');
		setIsLoading(true);

		try {
			const res = await fetch('/api/ask-ai', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message }),
			});
			const data = await res.json() as { reply?: string; error?: string };
			if (!res.ok || data.error) {
				setMessages(prev => [...prev, { role: 'assistant', text: data.error ?? 'エラーが発生しました。', isError: true }]);
			} else {
				setMessages(prev => [...prev, { role: 'assistant', text: data.reply ?? '' }]);
			}
		} catch {
			setMessages(prev => [...prev, { role: 'assistant', text: 'ネットワークエラーが発生しました。', isError: true }]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setMessages(prev => [...prev, initMessage]);
			setIsLoading(false);
		}, 500);
	}, [])

	return (
		<section id="ask-ai" className={styles.askAi}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Ask AI</h2>
				<div className={styles.inner}>
					<div className={styles.orange}></div>
					<ChatWindow
						messages={messages}
						isLoading={isLoading}
					/>
					<ChatForm
						input={input}
						isLoading={isLoading}
						onChange={setInput}
						onSubmit={handleSubmit}
					/>
				</div>
			</div>
		</section>
	);
}
