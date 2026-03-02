"use client";

import { easeInOut } from "motion";
import { motion } from "motion/react";
import Link from "next/link";
import ImageRender from "@/components/shared/image-render";

const textVariants = {
	initial: { opacity: 0, y: 20, filter: "blur(4px)" },
	animate: { opacity: 0, y: 20, filter: "blur(4px)" },
	whileHover: { opacity: 1, y: 0, filter: "blur(0)" },
	transition: { duration: 1, ease: easeInOut },
};

export const Card: React.FC<{
	src: string;
	title: string;
	text: string;
	slug?: string;
	index: number;
}> = ({ src, title, text, slug, index }) => {
	const cardContent = (
		<motion.article
			className="border border-border hover:border-primary rounded-xl p-1 shadow-sm transition-colors duration-300"
			aria-disabled={!slug}
			whileHover="whileHover"
			initial="animate"
			animate="animate"
		>
			<div className="relative rounded-lg overflow-hidden group">
				<ImageRender
					src={`https://sow4xmup6y.ufs.sh/f/${src}`}
					alt={title}
					width={475}
					height={355}
					className="w-full rounded-lg z-0"
				/>
				<div className="absolute bottom-0 left-0 bg-linear-to-b from-transparent to-black h-1/2 w-full z-10 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100" />
				<div className="absolute bottom-0 left-0 p-4 z-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
					<motion.h4
						className="text-[#f7f4fe] text-xl font-medium mb-1.5"
						variants={textVariants}
						transition={{ duration: 0.3, ease: easeInOut, delay: 0.05 }}
					>
						{title}
					</motion.h4>
					<motion.p
						className="text-[#f7f4fe] text-sm"
						variants={textVariants}
						transition={{ duration: 0.3, ease: easeInOut, delay: 0.15 }}
					>
						{text}
					</motion.p>
				</div>
			</div>
		</motion.article>
	);

	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.1 * index,
				duration: 0.3,
				ease: easeInOut,
			}}
		>
			{slug ? (
				<Link href={`/works/${slug}`} scroll>
					{cardContent}
				</Link>
			) : (
				cardContent
			)}
		</motion.div>
	);
};

Card.displayName = "Card";
