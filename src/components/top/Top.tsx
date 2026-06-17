"use client"

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import Title from '../title/Title';
import styles from './styles.module.scss';

export default function Top() {
	// typing
	const [isCompleteTyping, setIsCompleteTyping] = useState(false);
	// scroll
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
	const bgBlur = useTransform(
		scrollYProgress,
		[0, 1],
		["blur(0px)", "blur(12px)"]
	);
	const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.5]);
	const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]);
	const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

	return (
		<section className={styles.container} ref={containerRef}>
			<motion.div
				className={styles.background}
				style={{
					scale: bgScale,
					filter: bgBlur,
				}}
			></motion.div>
			<motion.div
				className={styles.overlay}
				style={{
					opacity: bgOpacity,
				}}
			/>
			<div className={styles.inner}>
				<motion.div
					style={{
						y: textY,
						opacity: textOpacity,
					}}
				>
					<motion.h1
						className={styles.titleWrapper}
					>
						<Title name="Kyoko" className={styles.firstName} />
						<Title name="Kasahara." delay={800} className={styles.lastName} setIsCompleteTyping={setIsCompleteTyping} />
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className={styles.subtitle}
					>
						Frontend Developer<br />
						TypeScript / React / Next.js
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className={styles.buttonWrapper}
					>
						<a href="#about-me" className={styles.button}>About Me</a>
						<a href="#portfolio" className={styles.button}>Portfolio</a>
						<a href="#ask-ai" className={styles.button}>Ask AI</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
