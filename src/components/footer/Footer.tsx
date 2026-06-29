import styles from './styles.module.scss';

const year = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className={styles.footer}>
			© {year} K.KASAHARA
		</footer>
	);
}
