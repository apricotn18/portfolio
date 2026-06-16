import type { Metadata } from 'next';
import { Noto_Sans, Fraunces, Playfair } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.scss';

const notoSans = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-noto-sans',
	display: 'swap',
});

const fraunces = Fraunces({
	subsets: ['latin'],
	variable: '--font-fraunces',
	display: 'swap',
});

const playfair = Playfair({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'KYOKO NOZAKI Portfolio',
	description: 'Portfolio website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={`${notoSans.variable} ${fraunces.variable} ${playfair.variable}`}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}