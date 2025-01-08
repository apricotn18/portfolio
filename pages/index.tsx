import { useState, useEffect } from 'react';
import Loading from './component/loading/loading';
import Top from './component/top/top';
import Profile from './component/profile/profile';
import Skill from './component/skill/skill';
import Portfolio from './component/portfolio/portfolio';
import Footer from './component/footer/footer';

export default function Home() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('load', () => setIsLoading(true));
		setTimeout(() => setIsLoading(true), 3000);
	}, []);

	return (
		<>
			<Loading isLoading={isLoading} />
			<main>
				<Top isLoading={isLoading} />
				<Profile />
				<Skill />
				<Portfolio />
			</main>
			<Footer />
		</>
	);
}
