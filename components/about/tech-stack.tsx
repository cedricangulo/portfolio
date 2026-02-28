"use client";

import { motion } from "motion/react";
import { lexend } from "@/lib/fonts";
// import { Badge } from "@/components/ui/badge"
// import { cn } from "@/lib/utils"
import { skills } from "../shared/interface/about-meta";
import { Button } from "../ui/button";
import { AnimateFadeIn } from ".";

const TechStack: React.FC = () => {
	return (
		<section
			aria-labelledby="tech-stack-heading"
			className="flex flex-col items-center gap-4 max-w-6xl w-full mx-auto text-center py-20 my-20"
		>
			<motion.h2
				id="tech-stack-heading"
				{...AnimateFadeIn()}
				className={`${lexend.className} text-3xl font-medium text-foreground`}
			>
				Tech Stack
			</motion.h2>
			<ul className="flex max-w-3xl gap-4 flex-wrap items-center justify-center list-none p-0">
				{skills.map((s, index: number) => {
					return (
						<motion.li key={index} {...AnimateFadeIn(0.05 * index)}>
							<Button variant="outline">
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className={s.fill}
									aria-label={`${s.text} icon`}
									aria-hidden="false"
								>
									<title>{s.text}</title>
									<path d={s.icon} />
								</svg>
								<span>{s.text}</span>
							</Button>
						</motion.li>
					);
				})}
			</ul>
		</section>
	);
};
TechStack.displayName = "TechStack";

export default TechStack;
