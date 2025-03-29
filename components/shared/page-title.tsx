"use client"

import React from "react"
import { motion } from "motion/react"
import { lexend } from "@/lib/fonts"

interface PageTitleProps {
	title: string
	subheader: string
	delay?: number
	duration?: number
}

const PageTitle = ({ title, subheader, delay = 0, duration = 0.3 }: PageTitleProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(8px)" }}
			animate={{ opacity: 1, filter: "blur(0)" }}
			transition={{
				delay: delay,
				duration: duration,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
			className="lg:min-w-[62.5rem] w-full h-[7.5rem] pt-8"
		>
			<h1
				className={`${lexend.className} text-foreground text-center lg:text-left m-auto text-5xl font-extrabold tracking-tight leading-none uppercase`}
			>
				{title}
			</h1>
			<p className="text-foreground text-center lg:text-left text-xl font-normal">
				{subheader}
			</p>
		</motion.div>
	)
}

export default PageTitle
