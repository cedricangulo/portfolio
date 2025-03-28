"use client"

import { lexend } from "@/lib/fonts"
import { timeline } from "../shared/interface/about-meta"
import { motion } from "motion/react"

import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle,
} from "@/components/ui/timeline"

const AnimatefadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

const TimelineContainer: React.FC = () => {
	return (
		<div className="flex flex-col gap-4 max-w-xl w-full mx-auto mt-16">
			<motion.h2
				{...AnimatefadeIn()}
				className={`${lexend.className} text-center text-3xl font-medium text-foreground`}
			>
				Education
			</motion.h2>
			<motion.div {...AnimatefadeIn(0.25)}>
				<Timeline defaultValue={5}>
					{timeline.map((item) => (
						<TimelineItem
							key={item.id}
							step={item.id}
						>
							<TimelineHeader>
								<TimelineSeparator />
								<TimelineDate>{item.date}</TimelineDate>
								<TimelineTitle>{item.title}</TimelineTitle>
								<TimelineIndicator />
							</TimelineHeader>
							<TimelineContent>{item.description}</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</motion.div>
		</div>
	)
}
TimelineContainer.displayName = "Timeline"

export default TimelineContainer
