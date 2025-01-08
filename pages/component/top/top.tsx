import { useEffect } from "react";
import { motion, useAnimationControls } from 'framer-motion';
import styles from './top.module.scss';

type Props = {
	isLoading: boolean;
}

const fadeInSetting = {
	initial: {
		opacity: 0,
	},
	whileInView: {
		opacity: 1,
		transform: 'translateY(0)',
	},
};

export default function Page({ isLoading }: Props) {
	const controls = useAnimationControls();

	useEffect(() => {
		if (isLoading) {
			controls.start((i) => ({
				opacity: [0, 1, 1],
				transition: {
					ease: "linear",
					duration: .7,
					delay: i * .5,
				},
			}));
		}
	}, [isLoading, controls]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.titleWrapper}>
					<motion.h1
						className={styles.title}
						custom={2}
						animate={controls}
						{...fadeInSetting}
					>
						portfolio
					</motion.h1>
					<motion.div
						className={styles.name}
						custom={3}
						animate={controls}
						{...fadeInSetting}
					>
						KYOKO NOZAKI
					</motion.div>
				</div>
				<motion.div
					className={styles.scrollWrapper}
					custom={5}
					animate={controls}
					{...fadeInSetting}
				>
					<span className={styles.scroll}>scroll</span>
				</motion.div>
			</div>
		</div>
	);
}
