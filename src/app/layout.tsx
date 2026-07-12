import type { Metadata } from 'next';
import { Roboto, Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.scss';

const roboto = Roboto({
	subsets: ['latin'],
	variable: '--font-roboto',
	display: 'swap',
	weight: ['400', '500', '700'],
});

const notoSans = Noto_Sans_JP({
	subsets: ['latin'],
	variable: '--font-noto-sans',
	display: 'swap',
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'K.KASAHARA Portfolio',
	description: 'Portfolio website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={`${roboto.variable} ${notoSans.variable}`}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}