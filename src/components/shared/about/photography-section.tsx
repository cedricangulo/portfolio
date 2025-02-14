"use client"

import { lexend } from "@/lib/fonts"
import Link from "next/link"
import React from "react"
import Carousell from "./carousel-img"
import { motion } from "motion/react"

const AnimatefadeIn = (delay: number) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: "easeInOut" },
})

const PhotographySection: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row gap-16 w-full mx-auto py-20 my-36">
			<div className="w-full md:w-1/2">
				<motion.h2
					{...AnimatefadeIn(0.5)}
					className={`${lexend.className} photo-header text-foreground mb-4`}
				>
					My Photography Journey
				</motion.h2>
				<motion.p
					{...AnimatefadeIn(0.75)}
					className="paragraph"
				>
					I tried photography using just my phone in year 2022. At that time, I was living in
					Zambales, but I couldn’t continue it because I didn’t have enough equipment for that hobby
					and I also lacked confidence back then, so my close friends and my relatives were the only
					subjects in my pictures. I even have a Facebook page{" "}
					<Link
						href="https://www.facebook.com/capicturessS?mibextid=ZbWKwL"
						target="_blank"
						className="text-primary font-semibold hover:text-primary/80 underline underline-offset-2 decoration-1 transition-all"
					>
						CA Pictures
					</Link>
					, but it has been inactive for a long time.
				</motion.p>
			</div>
			<motion.div
				{...AnimatefadeIn(1)}
				className="max-w-xl mx-auto mt-16 w-full md:w-1/2"
			>
				<Carousell />
			</motion.div>
		</div>
	)
}
PhotographySection.displayName = "Photography section"

export default PhotographySection
