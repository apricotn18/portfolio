import Image from 'next/image';
import { WORKS } from "./data";
import styles from './styles.module.scss';

export default function Work() {
	return (
		<section id="work" className={styles.work}>
			<h2>WORK</h2>
			<ul className={styles.list}>
				{WORKS.map((work, index: number) => (
					<li key={index} className={styles.item}>
						<Image
							className={styles.image}
							src={work.image}
							alt={work.name}
						/>
						<h3 className={styles.name}>
							<a
								href={work.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{work.name}
								<svg
									viewBox="0 0 16 16"
									width="16"
									height="16"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M6.22 3.5a.75.75 0 0 1 .75-.75h5.03a.75.75 0 0 1 .75.75v5.03a.75.75 0 0 1-1.5 0V5.31L4.53 12.03a.75.75 0 0 1-1.06-1.06L10.19 4.25H6.97a.75.75 0 0 1-.75-.75Z" />
									<path d="M3.5 4.75A.75.75 0 0 1 4.25 4H7a.75.75 0 0 1 0 1.5H5v5.75h5.75v-2a.75.75 0 0 1 1.5 0v2.75a.75.75 0 0 1-.75.75h-7.25a.75.75 0 0 1-.75-.75Z" />
								</svg>
							</a>
						</h3>
						<p className={styles.description}>
							{work.description}
						</p>
						<div className={styles.skill}>
							{work.skill.map((skill) => (
								<span
									key={skill}
									className={styles.skillItem}
								>
									{skill}
								</span>
							))}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
