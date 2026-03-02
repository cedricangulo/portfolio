"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";
import { Button } from "../ui/button";
import { AnimateFadeIn } from ".";
import { default as Hl } from "./highlight";

const ParagraphWrapper: React.FC = () => {
	return (
		<div className="flex flex-col items-start gap-4 w-full">
			<Paragraph delay={0}>
				Hi, I’m Cedric, currently a 3rd year student at{" "}
				<Button asChild className="p-0 h-fit rounded-none" variant="link">
					<Link
						aria-label="NEUST - Nueva Ecija University of Science and Technology"
						href="https://neust.edu.ph"
						rel="noopener noreferrer"
						target="_blank"
					>
						NEUST
					</Link>
				</Button>
				. I'm pursuing a degree in <Hl>Information Technology</Hl>, major in{" "}
				<Hl>Web Systems Technology</Hl>.
			</Paragraph>
			<Paragraph delay={0.15}>
				Finding out that websites use <Hl>HTML</Hl> and <Hl>CSS</Hl> sparked my
				interest in web development and programming. Now, at <Hl>21</Hl>, I’m
				chasing my dreams.
			</Paragraph>
			<Paragraph delay={0.3}>
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
