"use client"

import { useState } from 'react';
import { motion } from 'motion/react';
import { Chart } from "./Chart";
import { fadeUp, fadeUpViewport } from '@/lib/motion';
import styles from './styles.module.scss';
import type { SKILLS } from './data';

type Props = {
	skill: (typeof SKILLS)[number];
	delay: number;
};

export function SkillItem({ skill, delay }: Props) {
	const [isChartReady, setIsChartReady] = useState(false);

	return (
		<motion.div
			className={styles.item}
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={fadeUpViewport}
			transition={{ duration: 0.8, ease: 'easeOut', delay }}
			onAnimationComplete={() => setIsChartReady(true)}
		>
			<div className={styles.chart}>
				{isChartReady && <Chart number={skill.level} />}
				<p>{skill.level}</p>
			</div>
			<div className={styles.text}>
				<h3 className={styles.name}>{skill.name}</h3>
				<p className={styles.description}>{skill.description}</p>
				{skill.note && <p className={styles.note}>{skill.note}</p>}
			</div>
		</motion.div>
	);
}
