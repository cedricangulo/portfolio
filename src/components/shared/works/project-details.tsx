"use client"

import { motion } from "motion/react"
import BranchTab from "./branch-tab"
import LangList from "./lang-list"
import ColorScheme from "../color-scheme"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Badge } from "@/components/ui/badge"

interface WorkDetails {
	id: number
	title: string
	contributors?: { name: string; link: string; avatar: string }[]
	paragraphs: string[]
	fontFamily: { fonts: { className: string }; text: string }[]
	colorScheme: { content: string; color: string; textColor: number }[]
	langs?: {
		langName: string
		langColor: { bg: string; fill: string }
		langWidth: number
	}[]
	images: { src: string; alt: string }[]
}

const ProjectDetails = ({
	work,
	delay = 1,
	duration = 1,
}: {
	work?: WorkDetails
	delay?: number
	duration?: number
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(4px)" }}
			animate={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: delay,
				duration: duration,
				ease: "easeInOut",
			}}
			className="details-wrapper"
		>
			<div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
				<div className="w-2/4">
					{work?.fontFamily.map((f, index) => (
						<p
							key={index}
							className={`${f.fonts.className} text-2xl text-foreground`}
						>
							{f.text}
						</p>
					))}
				</div>
				<div className="colorscheme-wrapper">
					{work?.colorScheme.map((color, index) => (
						<ColorScheme
							key={index}
							content={color.content}
							color={color.color}
							textColor={color.textColor}
						/>
					))}
				</div>
			</div>
			{work?.contributors && (
				<div className="mt-8">
					<h4 className="scroll-m-20 text-xl mb-2 font-semibold tracking-tight">Contributors</h4>
					<div className="grid grid-cols-2 gap-2">
						{work.contributors.map((contributor, index) => (
							<React.Fragment key={index}>
								<Link
									href={contributor.link}
									target="_blank"
									rel="noopener noreferrer"
									className="w-full"
								>
									<Badge
										variant="secondary"
										className="p-2 rounded-2xl text-foreground inline-flex gap-2 w-full"
									>
										<Image
											src={contributor.avatar}
											alt={contributor.name}
											width={20}
											height={20}
											quality={100}
											className="rounded-full h-5 w-5"
										/>
										{contributor.name}
									</Badge>
								</Link>
							</React.Fragment>
						))}
					</div>
				</div>
			)}
			<div className="lang-wrapper">
				{work?.id === 1 || work?.id === 5 ? (
					<BranchTab workId={work.id} />
				) : (
					<LangList lang={work?.langs} />
				)}
			</div>
		</motion.div>
	)
}

export default ProjectDetails
