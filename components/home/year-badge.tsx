"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { caveat } from "@/lib/fonts"

export const YearBadge = () => {
	return (
		<span
			className={cn(
				"absolute -right-12 sm:-right-20 -rotate-12 -top-5 text-primary font-normal tracking-wider text-2xl md:text-3xl",
				caveat.className
			)}
		>
			2nd year{" "}
			<motion.span
				animate={{ rotate: [0, -10, 10, 0, -10, 10, 0], transformOrigin: "left center" }}
				transition={{
					repeat: Infinity,
					duration: 1,
					repeatDelay: 1,
				}}
				style={{ display: "inline-block" }}
			>
				🤙
			</motion.span>
		</span>
	)
}
