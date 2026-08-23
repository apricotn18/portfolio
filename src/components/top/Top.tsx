"use client"

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion';
import styles from './styles.module.scss';

export default function Top() {
	return (
		<section className={styles.container}>
			<div className={styles.inner}>
				<motion.h1
					id="hero-name"
					className={styles.name}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					K.KASAHARA
				</motion.h1>
				<motion.div
					className={styles.subtitle}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
				>
					Frontend Developer with Design
				</motion.div>
				<motion.p
					className={styles.description}
					variants={fadeUp}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
				>
					カンプ通りの美しい実装と、APIで広げる可能性<br />
					確かな技術力でWebサイトに新しい機能をプラスします
				</motion.p>
			</div>
		</section>
	);
}
