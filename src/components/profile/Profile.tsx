import styles from './styles.module.scss';

export default function Profile() {
	return (
		<section id="profile" className={styles.profile}>
			<div className={styles.wave} />
			<h2>PROFILE</h2>
			<p className={styles.text}>
				不動産業界大手のWebアプリでJavaScript実務5年（現在も継続中）<br />
				前職ではWebデザイナーとして3年携わり、デザイン意図を汲んだ丁寧な実装を得意としています
			</p>
			<div className={styles.line}></div>
		</section>
	);
}
