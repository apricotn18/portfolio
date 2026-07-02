"use client"

import styles from './styles.module.scss';

export default function Top() {
	return (
		<section className={styles.container}>
			<div className={styles.inner}>
				<h1 id="hero-name" className={styles.name}>
					K.KASAHARA
				</h1>
				<div className={styles.subtitle}>
					Frontend Developer with Design
				</div>
				<p className={styles.description}>
					カンプ通りの美しい実装と、APIで広げる可能性<br />
					確かな技術力でWebサイトに新しい機能をプラスします
				</p>
			</div>
		</section>
	);
}
