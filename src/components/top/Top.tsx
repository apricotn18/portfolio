import styles from './styles.module.scss';

export default function Top() {
	return (
		<section className={styles.top}>
			<div className={styles.inner}>
				<div className={styles.duties}>
					<span>FRONTEND ENGINEER</span>
				</div>
				<h1 className={styles.title}>
					<span className={styles.firstName}>Kyoko</span>
					<span className={styles.lastName}>Kasahara</span>
				</h1>
				<p className={styles.description}>
					かわいくて使いやすい UI を、丁寧に作ります<br />
					React / TypeScript / Next.js
				</p>
			</div>
		</section>
	);
}
