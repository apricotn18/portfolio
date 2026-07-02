'use client';

import styles from './styles.module.scss';

const BUBBLES = [
	{ size: 10, left: 4,  delay: 0,   duration: 14 },
	{ size: 13, left: 11, delay: 1.5, duration: 17 },
	{ size: 8,  left: 19, delay: 3,   duration: 12 },
	{ size: 11, left: 27, delay: 0.5, duration: 15 },
	{ size: 12, left: 34, delay: 4,   duration: 15 },
	{ size: 7,  left: 42, delay: 2,   duration: 11 },
	{ size: 14, left: 50, delay: 5,   duration: 17 },
	{ size: 9,  left: 57, delay: 1,   duration: 12 },
	{ size: 14, left: 64, delay: 3.5, duration: 15 },
	{ size: 10, left: 72, delay: 0,   duration: 14 },
	{ size: 11, left: 79, delay: 4.5, duration: 12 },
	{ size: 13, left: 87, delay: 2.5, duration: 17 },
	{ size: 8,  left: 93, delay: 1,   duration: 11 },
	{ size: 12, left: 23, delay: 6,   duration: 19 },
	{ size: 6,  left: 48, delay: 7,   duration: 11 },
	{ size: 13, left: 68, delay: 8,   duration: 15 },
	{ size: 11, left: 83, delay: 3,   duration: 14 },
	{ size: 9,  left: 37, delay: 9,   duration: 12 },
];

export const Bubble = () => {
	return (
		<>
			{BUBBLES.map((b, i) => (
				<span
					key={i}
					className={styles.bubble}
					style={{
						width: b.size,
						height: b.size,
						left: `${b.left}%`,
						animationDelay: `${b.delay}s`,
						animationDuration: `${b.duration}s`,
					}}
					aria-hidden="true"
				/>
			))}
		</>
	);
};
