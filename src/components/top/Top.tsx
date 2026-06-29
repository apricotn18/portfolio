"use client"

import styles from './styles.module.scss';

export default function Top() {
	return (
		<section className={styles.container}>
			<div className={styles.inner}>
				<h1 className={styles.name}>
					K.KASAHARA
				</h1>
				<div className={styles.subtitle}>
					Frontend Developer with Design
				</div>
				<p className={styles.description}>
					カンプ通りの美しい実装と、APIで広げる可能性<br />
					確かな技術力で、Webサイトに新しい機能をプラス
				</p>
			</div>
		</section>
	);
}
