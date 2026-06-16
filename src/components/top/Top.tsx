"use client"

import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import styles from './styles.module.scss';
import { useElementDimensions } from '@/lib/useElementDimensions';


export default function Top() {
	const ref = useRef<HTMLDivElement>(null);
	const [{ width, height, top, left }, measure] = useElementDimensions(ref);
	const gradientX = useMotionValue(0.5);
	const gradientY = useMotionValue(0.5);
	const background = useTransform(
		() =>
			`conic-gradient(from 0deg at calc(${
				gradientX.get() * 100
			}% - ${left}px) calc(${
				gradientY.get() * 100
			}% - ${top}px), var(--hue-5), var(--hue-1), var(--yellow), var(--hue-5))`
	);

	useEffect(() => {
		measure();
	}, [measure]);

	return (
		<section
			className={styles.top}
			onPointerMove={(e) => {
				if (width > 0 && height > 0) {
					gradientX.set(e.clientX / width)
					gradientY.set(e.clientY / height)
				}
			}}
		>
			<motion.div
				ref={ref}
				style={{
					background,
					width: '100vw',
					height: '100vh',
					cursor: 'none',
					opacity: 0.5,
				}}
			/>
			<div className={styles.inner}>
				<h1>
					<span className={styles.firstName}>Kyoko</span>
					<span className={styles.lastName}>Kasahara</span>
				</h1>
				<div className={styles.subtitle}>
					Frontend Developer<br />
					TypeScript / React / Next.js
				</div>
			</div>
		</section>
	);
}
