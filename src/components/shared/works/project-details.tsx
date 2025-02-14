"use client"

import { motion } from "motion/react"
import BranchTab from "./branch-tab"
import LangList from "./lang-list"
import ColorScheme from "../color-scheme"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Code, GitFork, Palette } from "lucide-react"

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
	delay = 0.8,
	duration = 0.3,
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
			<h4 className="inline-flex gap-1 items-center scroll-m-20 font-medium text-muted-foreground mb-2 tracking-tight">
				<Palette className="size-4 text-primary" /> Colors & Fonts
			</h4>
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
				<>
					<Separator className="bg-border my-8" />
					<h4 className="inline-flex gap-1 items-center scroll-m-20 font-medium text-muted-foreground mb-2 tracking-tight">
						<GitFork className="size-4 text-primary" /> Contributors
					</h4>
					<div className="flex flex-wrap gap-2">
						{work.contributors.map((contributor, index) => (
							<React.Fragment key={index}>
								<Link
									href={contributor.link}
									target="_blank"
									rel="noopener noreferrer"
									className="w-fit"
								>
									<Badge
										variant="secondary"
										className="p-1 pr-2 rounded-2xl font-normal text-foreground inline-flex gap-2 w-full"
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
				</>
			)}
			<Separator className="bg-border my-8" />
			<h4 className="inline-flex gap-1 items-center scroll-m-20 font-medium text-muted-foreground mb-2 tracking-tight">
				<Code className="size-4 text-primary" /> Language Used
			</h4>
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
