"use client"

import { Badge } from "@/components/ui/badge"
import { Skills } from "../shared/interface/about-meta"
import { cn } from "@/lib/utils"

import { motion } from "motion/react"
import { lexend } from "@/lib/fonts"

const AnimatefadeIn = (delay: number) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

const TechStack: React.FC = () => {
	return (
		<section
			aria-labelledby="tech-stack-heading"
			className="flex flex-col items-center gap-4 max-w-6xl w-full mx-auto text-center py-20 my-20"
		>
			<motion.h2
				id="tech-stack-heading"
				{...AnimatefadeIn(0)}
				className={`${lexend.className} text-3xl font-medium text-foreground`}
			>
				Tech Stack
			</motion.h2>
			<ul className="flex max-w-3xl gap-4 flex-wrap items-center justify-center list-none p-0">
				{Skills.map((s, index: number) => {
					return (
						<motion.li
							key={index}
							{...AnimatefadeIn(0.1 * index)}
						>
							<Badge
								variant="secondary"
								className="flex gap-2 px-3 py-2 text-base font-normal border border-border"
							>
								<svg
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className={cn("size-4", s.fill)}
									aria-label={`${s.text} icon`}
									aria-hidden="false"
								>
									<title>{s.text}</title>
									<path d={`${s.icon}`} />
								</svg>
								<span>{s.text}</span>
							</Badge>
						</motion.li>
					)
				})}
			</ul>
		</section>
	)
}
TechStack.displayName = "TechStack"

export default TechStack
