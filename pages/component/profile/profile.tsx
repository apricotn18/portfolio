import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './profile.module.scss';
import imgCat from './cat.png';

const fadeInSetting = {
	initial: {
		opacity: 0,
		transform: 'translateY(80px)',
	},
	whileInView: {
		opacity: 1,
		transform: 'translateY(0)',
	},
	transition: {
		duration: .5,
	},
	viewport: {
		once: true,
		margin: '0px 0px -120px',
	}
};

export default function Page() {
	return (
		<div id="profile" className={styles.wrapper}>
			<motion.div className={styles.inner} {...fadeInSetting}>
				<h2 className={styles.title}>
					profile
				</h2>
				<Image
					src={imgCat}
					width={82}
					height={82}
					alt="プロフィール画像"
				/>
				<div className={styles.text}>
					<p>
						webアプリの個人開発を目指して勉強中です。
					</p>
					<p>
						新卒から4年間、webデザイナーとしてデザイン・コーディング・SEO・リスティング広告など幅広く企業のweb運用に携わりました。<br />
						2020年からフロントエンドエンジニアへ転向し、不動産広告を掲載するwebアプリのフロントエンド開発、チームマネジメント業務に携わっています。
					</p>
					<p>
						現在、プログラミングスキルを伸ばすため、TypeScriptやReactのフレームワークなど勉強中です。
					</p>
				</div>
				<a href="https://github.com/apricotn18" className={styles.link} target="_blank">
					<span>github</span>
				</a>
			</motion.div>
		</div>
	);
}
