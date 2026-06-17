"use client";

		<div style={{ height: "100vh" }}>
			<div
				style={{
					position: "sticky",
					top: 0,
					height: "100%",
					overflow: "hidden",
				}}
			>
				<motion.div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage: "url('/background.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						scale: bgScale,
						filter: bgBlur,
					}}
				/>
				<motion.div
					style={{
						position: "absolute",
						inset: 0,
						backgroundColor: "#785857",
						opacity: bgOpacity,
					}}
				/>
				<motion.div
					style={{
						position: "absolute",
						inset: 0,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						padding: "0 3rem",
						y: textY,
						opacity: textOpacity,
					}}
				>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						// style={{
						// 	fontSize: "clamp(4rem, 12vw, 10rem)",
						// 	fontWeight: 700,
						// 	color: "white",
						// 	lineHeight: 0.9,
						// 	margin: 0,
						// }}
					>
						Kyoko Kasahara
					</motion.h1>

					{/* サブタイトル：名前の後に登場 */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
						style={{
							fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
							color: "rgba(255,255,255,0.85)",
							margin: "1rem 0 0",
							letterSpacing: "0.05em",
						}}
					>
						Frontend Developer — TypeScript / React / Next.js
					</motion.p>
				</motion.div>

				{/* スクロール促進の矢印 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
					style={{
						position: "absolute",
						bottom: "2rem",
						left: "50%",
						transform: "translateX(-50%)",
						color: "rgba(255,255,255,0.6)",
						fontSize: "1.5rem",
					}}
				>
					↓
				</motion.div>
			</div>
		</div>
	);
}
