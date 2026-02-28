"use client";

import { motion } from "framer-motion";
import type React from "react";
import { AnimateFadeIn } from ".";
import { default as Hl } from "./highlight";

const ParagraphWrapper: React.FC = () => {
	return (
		<div className="flex flex-col items-start gap-4 w-full lg:w-3/4">
			<Paragraph delay={0}>
				Finding out that websites use <Hl>HTML</Hl> and <Hl>CSS</Hl> sparked my
				interest in web development and programming. Now, at <Hl>21</Hl>, I’m
				chasing my dreams.
			</Paragraph>
			<Paragraph delay={0.15}>
				I see myself as a <Hl>frontend developer</Hl> but want to be flexible
				and work well with others.{" "}
				{/* I’m planning to learn <Hl>Laravel</Hl> soon so I can build <Hl>full-stack apps</Hl>. */}
				I&apos;m expanding my knowledge in <Hl>Next.js</Hl> through building
				apps in full-stack development.
			</Paragraph>
		</div>
	);
};

export default ParagraphWrapper;

const Paragraph: React.FC<{ children: React.ReactNode; delay: number }> = ({
	children,
	delay,
}) => {
	return (
		<motion.p
			{...AnimateFadeIn(delay)}
			className="text-foreground text-base font-normal leading-relaxed"
		>
			{children}
		</motion.p>
	);
};
Paragraph.displayName = "Paragraph";
