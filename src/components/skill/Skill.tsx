import { useEffect, useCallback, useRef } from 'react';
import openChart from './chart.js';
import styles from './styles.module.scss';

export default function Skill() {
	// const chart = useRef<HTMLCanvasElement>(null!);

	// const handleScroll = useCallback(() => {
	// 	if (chart.current.getBoundingClientRect().top + 200 < window.innerHeight) {
	// 		openChart(chart.current);
	// 		window.removeEventListener('scroll', handleScroll);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll);
	// }, [handleScroll]);

	return (
		<section id="skill" className={styles.skill}>
			<div className={styles.inner}>
				<h2 className={styles.title}>
					SKILL
				</h2>
				{/* <div className={styles.column}>
					<div className={styles.chartWrapper}>
						<canvas className={styles.chart} ref={chart}></canvas>
					</div>
					<div>
						<p>
							HTML / CSSは疑似要素やアニメーション、セマンティックなマークアップ（SEO）が可能です。デザインツールも実務レベルで使用できます。<br />
							JavaScriptはインタラクションの実装、APIの取得・操作、非同期処理など実務レベルで使用できます。<br />
							TypeScriptは単純な型指定が可能です。<br />
							React (Next.js) / Node.js / Justは公式チュートリアルやリファレンス本を読了し、ポートフォリオにある簡単なWebアプリを個人開発しました。
						</p>
						<ol className={styles.level}>
							<li>3.  実務レベル</li>
							<li>2.  実務で軽く使用あり、習熟が必要</li>
							<li>1.  勉強中、実務で使用経験なし</li>
						</ol>
					</div>
				</div> */}
			</div>
		</section>
	);
}
