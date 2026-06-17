"use client"

import { useEffect } from "react";
import useTypewriter from './useTypewriter';

type Props = {
	name: string;
	delay: number;
	className: string;
	setIsCompleteTyping?: (isComplete: boolean) => void;
}

export default function Title({ name, delay, className, setIsCompleteTyping }: Props) {
	const { displayText, isComplete } = useTypewriter({
		text: name,
		speed: 80,
		delay: delay,
	});

	useEffect(() => {
		if (setIsCompleteTyping) {
			setIsCompleteTyping(isComplete);
		}
	}, [isComplete, setIsCompleteTyping]);

	return (
		<span className={className}>
			{displayText}
		</span>
	);
}
