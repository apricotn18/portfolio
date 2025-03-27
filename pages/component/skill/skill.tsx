import { useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import openChart from './chart.js';
import styles from './skill.module.scss';

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
	const chart = useRef<HTMLCanvasElement>(null!);

	const handleScroll = useCallback(() => {
		if (chart.current.getBoundingClientRect().top + 200 < window.innerHeight) {
			openChart(chart.current);
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<div id="skill" className={styles.wrapper}>
			<motion.div className={styles.inner} {...fadeInSetting}>
				<h2 className={styles.title}>
					skill
				</h2>
				<div className={styles.column}>
					<div className={styles.chartWrapper}>
						<canvas className={styles.chart} ref={chart}></canvas>
					</div>
					<div>
						<p>
							HTML / CSSは疑似要素やアニメーション、セマンティックなマークアップ（SEO）が可能です。デザインツールも実務レベルで使用できます。<br />
							JavaScriptは、jQueryを用いてインタラクションの実装、Ajax通信によるデータの取得・操作など実務レベルで使用できます。<br />
							現在はReact.js関連のフレームワークを勉強中。今後はNode.jsやテストの勉強もしていきたいと考えます。
						</p>
						<ol className={styles.level}>
							<li>3.  実務レベル</li>
							<li>2.  実務で軽く使用あり、習熟が必要</li>
							<li>1.  勉強中</li>
						</ol>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
