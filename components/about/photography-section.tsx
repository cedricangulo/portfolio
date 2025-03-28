"use client"

import { lexend } from "@/lib/fonts"
import Link from "next/link"
import React from "react"
import Carousell from "./carousel-img"
import { motion, useReducedMotion } from "motion/react"

const AnimateFadeIn = (delay: number, prefersReducedMotion: boolean | null) => ({
	initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: true },
	transition: prefersReducedMotion ? { duration: 0 } : { delay, duration: 0.3, ease: "easeIn" },
})

const PhotographySection: React.FC = () => {
	const prefersReducedMotion = useReducedMotion()

	return (
		<section
			className="flex flex-col md:flex-row gap-16 w-full mx-auto py-20 my-36"
			aria-labelledby="photography-heading"
		>
			<div className="w-full md:w-1/2">
				<motion.h2
					id="photography-heading"
					{...AnimateFadeIn(0.5, prefersReducedMotion)}
					className={`${lexend.className} text-3xl font-medium text-center md:text-left text-foreground mb-4`}
				>
					My Photography Journey
				</motion.h2>
				<motion.p
					{...AnimateFadeIn(0.75, prefersReducedMotion)}
					className="text-foreground text-base font-normal leading-relaxed"
				>
					I tried photography using just my phone in year 2022. At that time, I was living in
					Zambales, but I couldn&apos;t continue it because I didn&apos;t have enough equipment for
					that hobby and I also lacked confidence back then, so my close friends and my relatives
					were the only subjects in my pictures. I even have a Facebook page{" "}
					<Link
						href="https://www.facebook.com/capicturessS?mibextid=ZbWKwL"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="CA Pictures Facebook page (opens in new tab)"
						className="text-primary font-semibold hover:text-primary/80 underline underline-offset-2 decoration-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					>
						CA Pictures
					</Link>
					, but it has been inactive for a long time.
				</motion.p>
			</div>
			<motion.div
				{...AnimateFadeIn(1, prefersReducedMotion)}
				className="max-w-xl mx-auto mt-16 w-full md:w-1/2"
				aria-label="Photography portfolio carousel"
			>
				<Carousell />
			</motion.div>
		</section>
	)
}
PhotographySection.displayName = "Photography section"

export default PhotographySection
