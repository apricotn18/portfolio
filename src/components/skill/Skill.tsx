import { Chart } from "./Chart";
import { Bubble } from "./Bubble";
import { SKILLS } from "./data";

import styles from './styles.module.scss';

export default function Skill() {
	return (
		<section id="skill" className={styles.skill}>
			<h2 className={styles.title}>
				SKILL
			</h2>
			<div className={styles.inner}>
				{SKILLS.map((skill, index: number) => (
					<div key={index} className={styles.item}>
						<div className={styles.chart}>
							<Chart number={skill.level} />
							<p>{skill.level}</p>
						</div>
						<div className={styles.text}>
							<h3 className={styles.name}>{skill.name}</h3>
							<p className={styles.description}>{skill.description}</p>
						</div>
					</div>
				))}
			</div>
			<Bubble />
		</section>
	);
}
