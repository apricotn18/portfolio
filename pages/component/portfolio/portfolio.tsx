import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import styles from './portfolio.module.scss';
import imgWeekDinner from './week-dinner.png';
import imgWeatherApp from './weather-app.png';
import imgFoodExpensesApp from './gas-food-expenses.png';

type Work = {
	title: string;
	description: string[];
	image: StaticImageData;
	environment: string[];
	url: string;
};

const works = [
	{
		title: '献立アプリ',
		description: [
			'楽天レシピからAPIを取得して、1週間の献立を登録できるアプリを制作しました。リストはローカルストレージに保存され、日にちが変わると更新されます。',
			'また、買い物リストやランキングからレシピ登録できる機能もあります。'
		],
		image: imgWeekDinner,
		environment: [
			'Next.js',
			'TypeScript',
			'楽天レシピAPI',
		],
		url: 'https://github.com/apricotn18/week-dinner',
	},
	{
		title: '天気予報アプリ',
		description: [
			'JavaScriptのリファレンス本を参考にして、現在地の3時間ごとの天気予報を取得できるAPIアプリを制作しました。',
			'オリジナルで、都道府県別の天気を取得できる機能を追加しました。'
		],
		environment: [
			'React',
			'Open Weather Map API',
		],
		image: imgWeatherApp,
		url: 'https://github.com/apricotn18/weather-app/',
	},
	{
		title: '食費入力bot',
		description: [
			'オリジナルのLINE botから金額を送信すると、GASでスプレッドシートの最終行へ書き込みます。',
			'また、Zaimアプリにも書き込めるようにしました。'
		],
		environment: [
			'Google Apps Script',
			'LINE Developers',
			'Zaim API',
		],
		image: imgFoodExpensesApp,
		url: 'https://github.com/apricotn18/gas-food-expenses/',
	}
] as Work[];

const fadeInSetting = {
	initial: {
		opacity: 0,
		transform: 'translateY(50px)',
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
		<div id="portfolio" className={styles.wrapper}>
			<motion.div className={styles.inner} {...fadeInSetting}>
				<h2 className={styles.title}>
					portfolio
				</h2>
				<ul>
					{works.map((item, index) => (
						<motion.li key={index} className={styles.item} {...fadeInSetting}>
							<div className={styles.imageWrapper}>
								<Image
									className={styles.image}
									src={item.image}
									width={320}
									height={224}
									alt={item.title}
								/>
							</div>
							<div className={styles.textWrapper}>
								<h3 className={styles.itemTitle}>
									{item.title}
								</h3>
								<p>
									{item.description.map((line, i) => (
										<Fragment key={i}>
											{line}<br />
										</Fragment>
									))}
								</p>
								<div className={styles.environment}>
									{item.environment.join(' / ')}
								</div>
								<a href={item.url} className={styles.link} target="_blank">
									githubを開く
								</a>
							</div>
						</motion.li>
					))}
				</ul>
			</motion.div>
		</div>
	);
}
