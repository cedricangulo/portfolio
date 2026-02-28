"use client";

import { cubicBezier, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

export default function Curve() {
	const [curve, setCurve] = useState<Variants | null>(null);

	useEffect(() => {
		const h = window.innerHeight;
		const initialPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q-100 ${h / 2} 100 0`;
		const targetPath = `M100 0 L200 0 L200 ${h} L100 ${h} Q100 ${h / 2} 100 0`;

		setCurve({
			initial: {
				d: initialPath,
			},
			enter: {
				d: targetPath,
				transition: { duration: 1, ease: cubicBezier(0.76, 0, 0.24, 1) },
			},
			exit: {
				d: initialPath,
				transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1) },
			},
		});
	}, []);

	if (!curve) return null;

	return (
		<svg className="fill-purple-500 transition-[fill] absolute top-0 left-[-99px] w-[100px] h-full stroke-none">
			<motion.path
				exit="exit"
				animate="enter"
				initial="initial"
				variants={curve}
			></motion.path>
		</svg>
	);
}
