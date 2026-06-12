import type { Metadata } from 'next';
import { Noto_Sans, Fraunces, Playfair } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.scss';

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
		<html lang="ja">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}