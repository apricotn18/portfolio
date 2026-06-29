import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.scss';

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-roboto',
	display: 'swap',
	weight: '400',
});

export const metadata: Metadata = {
	title: 'KYOKO KASAHARA Portfolio',
	description: 'Portfolio website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={`${roboto.variable}`}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}