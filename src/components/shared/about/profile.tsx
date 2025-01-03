"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

const Profile = () => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.25,
				duration: 1,
				ease: "easeInOut",
			}}
			className="lg:w-1/4 flex justify-center items-center xl:mb-0"
		>
			<Image
				src="/me.png"
				alt="me"
				width={250}
				height={250}
				className={cn(
					"rounded-lg",
					// "brightness-125 grayscale",
					"drop-shadow-[0_0_.75rem_#6b21a850] dark:drop-shadow-[0_0_1rem_#6b21a880]",
					"hover:scale-105 transition-transform duration-500",
					"border-8 border-solid border-white/50 backdrop-blur-lg"
				)}
				priority={true}
			/>
		</motion.div>
	)
}

export default Profile
