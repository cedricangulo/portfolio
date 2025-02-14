"use client"

import { Badge } from "@/components/ui/badge"
import { Skills } from "../interface/about-meta"
import { cn } from "@/lib/utils"

import { motion } from "motion/react"
import { lexend } from "@/lib/fonts"

const AnimatefadeIn = (delay: number) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

const TechStack: React.FC<{}> = () => {
	return (
		<div className="tech-wrapper py-20 my-20">
			<motion.h2
				{...AnimatefadeIn(0)}
				className={`${lexend.className} tech-header text-foreground`}
			>
				Tech Stack
			</motion.h2>
			<div className="flex max-w-3xl gap-4 flex-wrap items-center justify-center">
				{Skills.map((s, index: number) => {
					return (
						<motion.div
							key={index}
							// animate the badge with a delay of 0.15s per index
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
								>
									<path d={`${s.icon}`} />
								</svg>
								{s.text}
							</Badge>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}
TechStack.displayName = "TechStack"

export default TechStack
