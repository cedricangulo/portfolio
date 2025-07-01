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
import { AnimateFadeIn } from "."

const TimelineContainer: React.FC = () => {
	return (
		<div className="flex flex-col gap-4 max-w-xl w-full mx-auto mt-16">
			<motion.h2
				{...AnimateFadeIn()}
				className={`${lexend.className} text-center text-3xl font-medium text-foreground`}
			>
				Education
			</motion.h2>
			<motion.div {...AnimateFadeIn(0.15)}>
				<Timeline defaultValue={6}>
					{timeline.map((item, idx) => (
						<TimelineItem
							key={idx}
							step={idx + 1}
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
