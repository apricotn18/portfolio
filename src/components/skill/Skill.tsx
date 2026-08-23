"use client"

import { motion } from 'motion/react';
import { Chart } from "./Chart";
import { Bubble } from "./Bubble";
import { SKILLS } from "./data";
import { fadeUp, fadeUpViewport } from '@/lib/motion';
import styles from './styles.module.scss';

export default function Skill() {
	return (
		<section id="skill" className={styles.skill}>
			<Bubble />
			<motion.h2
				className={styles.title}
				variants={fadeUp}
				initial="hidden"
				whileInView="visible"
				viewport={fadeUpViewport}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				SKILL
			</motion.h2>
			<div className={styles.inner}>
				{SKILLS.map((skill, index: number) => (
					<motion.div
						key={index}
						className={styles.item}
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={fadeUpViewport}
						transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
					>
						<div className={styles.chart}>
							<Chart number={skill.level} />
							<p>{skill.level}</p>
						</div>
						<div className={styles.text}>
							<h3 className={styles.name}>{skill.name}</h3>
							<p className={styles.description}>{skill.description}</p>
							{skill.note && <p className={styles.note}>{skill.note}</p>}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
