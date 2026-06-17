'use client';

import Top from '@/components/top/Top';
import AboutMe from '@/components/aboutMe/AboutMe';
import Portfolio from '@/components/portfolio/Portfolio';
import AskAI from '@/components/askAI/AskAI';

export default function Home() {
	return (
		<>
			<main>
				<Top />
				<AboutMe />
				<Portfolio />
				<AskAI />
			</main>
		</>
	);
}