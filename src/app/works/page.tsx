"use client"

import React from "react"
import { motion } from "motion/react"
import { WorkList } from "./data/workslist"
import { TList } from "@/components/shared/interface/card"
import { Card } from "@/components/shared/works/card"

export default function WorksPage() {
	return (
		<motion.div
			className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8"
		>
			{WorkList.map((l: TList, index: number) => {
				return (
					<Card
						key={index}
						index={index}
						src={l.src}
						title={l.title}
						text={l.text}
						github={l.github}
						href={l.href}
					/>
				)
			})}
		</motion.div>
	)
}
