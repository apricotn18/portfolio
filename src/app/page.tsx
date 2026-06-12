'use client';

import Top from '@/components/top/Top';
import Profile from '@/components/profile/Profile';
import Skill from '@/components/skill/Skill';
import Portfolio from '@/components/portfolio/Portfolio';

export default function Home() {
	return (
		<>
			<main>
				<Top />
				<Profile />
				<Skill />
				<Portfolio />
			</main>
		</>
	);
}