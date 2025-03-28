"use client"

import { motion } from "motion/react"
import { ArrowLeftIcon } from "@/public/icons"
import Link from "next/link"
import { getMotionProps } from "."

const BackButton = () => {
	return (
		<motion.nav
			{...getMotionProps(0.3, 0)}
			className="group my-8 w-fit mx-auto md:mx-0"
		>
			<Link
				href="/works"
				className="text-foreground inline-flex gap-1 group-hover:text-primary hover:gap-0 text-lg items-center italic transition-all"
				aria-label="Back to works"
			>
				<ArrowLeftIcon
					strokeWidth={1.5}
					className="text-foreground size-6 align-middle group-hover:text-primary"
				/>
				Back
			</Link>
		</motion.nav>
	)
}

export default BackButton
