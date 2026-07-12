import Top from '@/components/top/Top';
import Profile from '@/components/profile/Profile';
import Work from '@/components/work/Work';
import Skill from '@/components/skill/Skill';
import AskAI from '@/components/askAI/AskAI';

export default function Home() {
	return (
		<>
			<main>
				<Top />
				<Profile />
				<Work />
				<Skill />
				<AskAI />
			</main>
		</>
	);
}