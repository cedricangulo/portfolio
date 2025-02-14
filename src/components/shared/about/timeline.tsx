"use client"

import React from "react"
import { lexend } from "@/lib/fonts"
import { timeline } from "../interface/about-meta"
import { motion } from "motion/react"

const AnimatefadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

const Timeline: React.FC<{}> = () => {
	return (
		<div className="timeline-wrapper">
			<motion.h2
				{...AnimatefadeIn()}
				className={`${lexend.className} timeline-header text-foreground`}
			>
				Education
			</motion.h2>
			<ol className="relative border-s border-gray-200 dark:border-gray-700">
				{timeline.map((list, index) => (
					<li
						key={index}
						className="mb-6 ms-4"
					>
						<motion.div
							{...AnimatefadeIn(0.15 * index)}
							className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"
						></motion.div>
						<motion.time
							{...AnimatefadeIn(0.2 * index)}
							className={`${lexend.className} mb-1 text-sm font-normal leading-none text-muted-foreground`}
						>
							{list.time}
						</motion.time>
						<motion.h3
							{...AnimatefadeIn(0.25 * index)}
							className={`${lexend.className} text-lg font-semibold text-foreground`}
						>
							{list.title}
						</motion.h3>
						<motion.p
							{...AnimatefadeIn(0.3 * index)}
							className="text-base font-normal text-foreground"
						>
							{list.text}
						</motion.p>
					</li>
				))}
			</ol>
		</div>
	)
}
Timeline.displayName = "Timeline"

export default Timeline
