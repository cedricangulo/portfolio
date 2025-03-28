"use client"

import { motion } from "motion/react"
import BranchTab from "./branch-tab"
import LangList from "./lang-list"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ColorScheme from "./color-scheme"
import {
	ArrowUpRightIcon,
	GithubIcon,
	GitMergeIcon,
	LinkIcon,
	PaintBoardIcon,
	SourceCodeIcon,
} from "@/public/icons"
import { getMotionProps } from "."

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
	github: string
	href: string
}

const ProjectDetails = ({ work }: { work?: WorkDetails }) => {
	return (
		<motion.div
			{...getMotionProps(0.3, 0.8)}
			className="rounded-lg mt-16 p-4 bg-card shadow-black/10 shadow-md border-2 border-border transition-all"
		>
			<h4 className="inline-flex gap-1 items-center scroll-m-20 font-medium text-muted-foreground mb-2 tracking-tight">
				<PaintBoardIcon className="size-4 text-primary" /> Colors & Fonts
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
						<GitMergeIcon className="size-5 text-primary" /> Contributors
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
				<SourceCodeIcon className="size-5 text-primary" /> Language Used
			</h4>
			<div className="lang-wrapper">
				{work?.id === 1 || work?.id === 5 ? (
					<BranchTab workId={work.id} />
				) : (
					<LangList lang={work?.langs} />
				)}
			</div>
			<Separator className="bg-border my-8" />
			<h4 className="inline-flex gap-1 items-center scroll-m-20 font-medium text-muted-foreground mb-2 tracking-tight">
				<LinkIcon className="size-4 text-primary" />{" "}
				{work?.href ? <span>Links</span> : <span>Link</span>}
			</h4>
			<div className="flex gap-2">
				<Link
					href={work?.github || ""}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Badge
						variant="secondary"
						className="p-1 pr-2 rounded-2xl font-normal inline-flex gap-1 text-foreground"
					>
						<GithubIcon className="text-foreground" />
						GitHub
					</Badge>
				</Link>
				{work?.href ? (
					<Link
						href={work?.href || ""}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Badge
							variant="secondary"
							className="p-1 pr-2 rounded-2xl font-normal inline-flex gap-1 text-foreground"
						>
							<ArrowUpRightIcon className="text-foreground" />
							Visit Site
						</Badge>
					</Link>
				) : null}
			</div>
		</motion.div>
	)
}

export default ProjectDetails
