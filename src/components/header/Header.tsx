'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import styles from './styles.module.scss';

export default function Header() {
	const [isWhite, setIsWhite] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setIsWhite(latest >= 70);
	});

	return (
		<motion.header
			className={styles.header}
			animate={{ backgroundColor: isWhite ? 'rgb(255, 255, 255, .7)' : 'rgba(255, 255, 255, 0)' }}
			transition={{ duration: 0.3 }}
		>
			<a href="#">
				<h1 className={styles.name}>K.KASAHARA</h1>
			</a>
			<div className={styles.buttonWrapper}>
				<a href="#work">WORK</a>
				<a href="#skill">SKILL</a>
				<a href="#ask-ai">Ask AI</a>
			</div>
		</motion.header>
	);
}
