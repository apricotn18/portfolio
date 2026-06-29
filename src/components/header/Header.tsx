import styles from './styles.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1 className={styles.name}>K.KASAHARA</h1>
			<div className={styles.buttonWrapper}>
				<a href="#work">WORK</a>
				<a href="#skill">SKILL</a>
				<a href="#ask-ai">Ask AI</a>
			</div>
		</header>
	);
}
