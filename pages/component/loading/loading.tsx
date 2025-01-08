import { useRef, useEffect } from "react";
import styles from "./loading.module.scss";

type Props = {
	isLoading: boolean;
}

export default function Page({ isLoading }: Props) {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isLoading) {
			if (wrapperRef.current) {
				wrapperRef.current.style.opacity = '0';
			}
			setTimeout(() => {
				if (wrapperRef.current) {
					wrapperRef.current.remove();
				}
			}, 2000);
		}
	}, [isLoading]);

	return (
		<div className={styles.wrapper} ref={wrapperRef}>
			<div>
				<div className={styles.skFoldingCube}>
					<div className={styles.skCube1} />
					<div className={styles.skCube2} />
					<div className={styles.skCube4} />
					<div className={styles.skCube3} />
				</div>
				<div className={styles.text}>loading ..</div>
			</div>
		</div>
	);
}
