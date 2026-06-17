"use client"

import { useState } from "react";
import styles from './styles.module.scss';

type Message = {
	role: 'user' | 'assistant';
	text: string;
	isError?: boolean;
};

export default function AskAI() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);

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

	return (
		<section id="ask-ai" className={styles.askAI}>
			<h2 className={styles.heading}>Ask AI</h2>
			<p className={styles.description}>Kyokoについて何でも聞いてください。</p>
			<div className={styles.chatWindow}>
				{messages.length === 0 && (
					<p className={styles.placeholder}>質問を入力してください...</p>
				)}
				{messages.map((msg, i) => (
					<div key={i} className={`${styles.message} ${styles[msg.role]} ${msg.isError ? styles.error : ''}`}>
						{msg.text}
					</div>
				))}
				{isLoading && (
					<div className={`${styles.message} ${styles.assistant} ${styles.loading}`}>
						<span />
						<span />
						<span />
					</div>
				)}
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					className={styles.input}
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder="メッセージを入力..."
					disabled={isLoading}
				/>
				<button className={styles.button} type="submit" disabled={isLoading || !input.trim()}>
					送信
				</button>
			</form>
		</section>
	);
}
