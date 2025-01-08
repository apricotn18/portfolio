import styles from './footer.module.scss';

const links = ['profile', 'skill', 'portfolio'];

export default function Page() {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.inner}>
				<ul className={styles.list}>
					{links.map((item) => (
						<li key={item}>
							<a href={'#' + item} className={styles.link}>
								{item}
							</a>
						</li>
					))}
				</ul>
				<div className={styles.copyWrapper}>
					<small className={styles.copy}>&#169; {new Date().getFullYear()}  KYOKO NOZAKI</small>
				</div>
			</div>
		</footer>
	);
}
