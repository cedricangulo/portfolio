"use client"

import { lexend } from "@/lib/fonts"
import React from "react"
import AnnButton from "../shared/announcement-btn"
import Image from "next/image"
import { easeInOut } from "motion"
import { motion } from "motion/react"

const buttonData = [
	{
		href: "https://cedangulo.vercel.app/",
		iconSrc: "/weblogoD.png",
		alt: "icon",
		from: "#af4edc",
		via: "#00bfff",
		to: "#af4edc",
	},
	{
		href: "https://bryangulo.vercel.app/",
		iconSrc: "/weblogo.png",
		alt: "icon",
		from: "#ff6224",
		via: "#f09819",
		to: "#ff6224",
	},
	{
		href: "https://cedbry.vercel.app/",
		iconSrc: "/me-icon.png",
		alt: "icon",
		from: "#1a627e",
		via: "#eff6e0",
		to: "#1a627e",
	},
]

const AnimatefadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: easeInOut },
})

const OldPortfolioSection: React.FC = () => {
	return (
		<div className="max-w-xl w-full mx-auto mt-16">
			<motion.h2
				{...AnimatefadeIn()}
				className={`${lexend.className} oldport-header text-foreground`}
			>
				My Old Portfolios
			</motion.h2>
			<div className="flex items-center flex-col md:flex-row gap-0 md:gap-4 my-8">
				{buttonData.map((b, index) => (
					<motion.div
						{...AnimatefadeIn(0.25 * index)}
						key={index}
					>
						<AnnButton
							className="my-4 md:my-0"
							href={b.href}
							icon={
								<Image
									src={b.iconSrc}
									alt={b.alt}
									width={20}
									height={20}
								/>
							}
							text="@cdrcangulo"
							from={b.from}
							via={b.via}
							to={b.to}
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}
OldPortfolioSection.displayName = "Old portfolio section"

export default OldPortfolioSection
