"use client"

import { motion } from 'motion/react';
import { Bubble } from "./Bubble";
import { SkillItem } from "./SkillItem";
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
					<SkillItem key={index} skill={skill} delay={index * 0.1} />
				))}
			</div>
		</section>
	);
}
