import Head from 'next/head';
import '../public/reset.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>KYOKO NOZAKI ポートフォリオ</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}