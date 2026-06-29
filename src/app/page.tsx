import Top from '@/components/top/Top';
import Skill from '@/components/skill/Skill';
import Work from '@/components/work/Work';
import AskAI from '@/components/askAI/AskAI';

export default function Home() {
	return (
		<>
			<main>
				<Top />
				<Work />
				<Skill />
				<AskAI />
			</main>
		</>
	);
}