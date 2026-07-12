import dammy from './dammy.png';

export const WORKS = [
	{
		name: 'week-dinner',
		description: '楽天レシピAPIから1週間分の献立を自動提案するアプリ。気分に合わない日はAIに1品だけ相談できる機能も搭載。自動化とAI提案を組み合わせています',
		image: dammy,
		githubUrl: 'https://github.com/apricotn18/week-dinner',
		skill: [
			'React',
			'TypeScript',
			'楽天レシピAPI',
			'OpenAI API'
		],
	},
	{
		name: 'ai-chat',
		description: 'Gemini APIを使った星共占いテーマの対話型チャットアプリ。会話の流れを重視したUI設計で、最新のNext.js・Reactを採用しています',
		image: dammy,
		githubUrl: 'https://github.com/apricotn18/ai-chat',
		skill: [
			'React',
			'Next.js',
			'TypeScript',
			'Gemini API'
		],
	},
	{
		name: 'weather-app',
		description: '現在地や選択した都道府県の天気を表示するアプリ。位置情報が使えない場合は東京の座標に自動フォールバックする設計です',
		image: dammy,
		githubUrl: 'https://github.com/apricotn18/weather-app',
		skill: [
			'React',
			'TypeScript',
			'OpenWeatherMap API'
		],
	},
	{
		name: 'gas-food-expenses',
		description: 'LINEに送るだけで食費をスプレッドシートとZaimに自動記録するbot。日々の入力を減らす業務自動化の実例です',
		image: dammy,
		githubUrl: 'https://github.com/apricotn18/gas-food-expenses',
		skill: [
			'GAS',
			'LINE Messaging API',
			'Zaim API'
		],
	},
] as const;
