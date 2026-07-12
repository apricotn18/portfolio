import Image from 'next/image';
import { WORKS } from "./data";
import styles from './styles.module.scss';

export default function Work() {
	return (
		<section id="work" className={styles.work}>
			<div className={styles.wave} />
			<h2>WORK</h2>
			{/* <p>
				不動産業界大手のWebアプリでJavaScript実務5年（現在も継続中）<br />
				前職ではWebデザイナーとして3年携わり、デザイン意図を汲んだ丁寧な実装を得意としています
			</p> */}
			<ul className={styles.list}>
				{WORKS.map((work, index: number) => (
					<li key={index} className={styles.item}>
						<Image
							className={styles.image}
							src={work.image}
							alt={work.name}
						/>
						<div className={styles.text}>
							<h3 className={styles.name}>
								{work.name}
							</h3>
							<p className={styles.description}>
								{work.description}
							</p>
							<div className={styles.skill}>
								{work.skill.join(' / ')}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
