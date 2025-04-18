"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"

import { getMotionProps } from "."
import {
	ArrowUpRightIcon,
	GithubIcon,
	GitMergeIcon,
	LinkIcon,
	PaintBoardIcon,
	SourceCodeIcon,
} from "@/public/icons"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { AvatarGroup, AvatarGroupTooltip } from "../animate-ui/avatar-group"
import BranchTab from "./branch-tab"
import ColorScheme from "./color-scheme"
import LangList from "./lang-list"

interface WorkDetails {
	id: number
	title: string
	contributors?: { name: string; link: string; avatar: string; fallback: string }[]
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
		<motion.section
			{...getMotionProps(0.6)}
			className="mt-24 transition-all"
			aria-labelledby="project-details-title"
		>
			<h3
				id="project-details-title"
				className="sr-only"
			>
				Project Details for {work?.title}
			</h3>
			<h4
				id="colors-fonts-heading"
				className="inline-flex gap-1 items-center scroll-m-20 font-medium text-foreground mb-2 tracking-tight"
			>
				<PaintBoardIcon
					className="size-4 text-primary"
					aria-hidden="true"
				/>
				<span>Colors & Typefaces</span>
			</h4>
			<div aria-labelledby="colors-fonts-heading">
				<div className="flex flex-nowrap w-full mb-4">
					{work?.colorScheme.map((color, index) => (
						<ColorScheme
							key={index}
							content={color.content}
							color={color.color}
							textColor={color.textColor}
						/>
					))}
				</div>
				<div>
					{work?.fontFamily.map((f, index) => (
						<p
							key={index}
							className={`${f.fonts.className} text-2xl text-foreground`}
						>
							{f.text}
						</p>
					))}
				</div>
			</div>
			{work?.contributors && (
				<>
					<h4
						id="contributors-heading"
						className="inline-flex gap-1 items-center scroll-m-20 font-medium text-foreground mb-2 tracking-tight mt-16"
					>
						<GitMergeIcon
							className="size-5 text-primary"
							aria-hidden="true"
						/>
						<span>Contributors</span>
					</h4>
					<AvatarGroup
						className="flex flex-wrap gap-2"
						aria-labelledby="contributors-heading"
					>
						{work.contributors.map((contributor, index) => (
							<React.Fragment key={index}>
								<Link
									href={contributor.link}
									target="_blank"
									rel="noopener noreferrer"
									className="w-fit focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
									aria-label={`${contributor.name}'s avatar`}
								>
									<Avatar
										key={index}
										className="size-12 border-3 border-background cursor-pointer"
									>
										<AvatarImage src={contributor.avatar} />
										<AvatarFallback>{contributor.fallback}</AvatarFallback>
										<AvatarGroupTooltip>
											<p>{contributor.name}</p>
										</AvatarGroupTooltip>
									</Avatar>
								</Link>
							</React.Fragment>
						))}
					</AvatarGroup>
				</>
			)}
			<h4
				id="languages-heading"
				className="inline-flex gap-1 items-center scroll-m-20 font-medium text-foreground mt-16 tracking-tight"
			>
				<SourceCodeIcon
					className="size-5 text-primary"
					aria-hidden="true"
				/>
				<span>Language Used</span>
			</h4>
			<div
				className="w-full sm:w-3/4"
				aria-labelledby="languages-heading"
			>
				{work?.id === 1 || work?.id === 5 ? (
					<BranchTab workId={work.id} />
				) : (
					<LangList lang={work?.langs} />
				)}
			</div>
			<h4
				id="links-heading"
				className="inline-flex gap-1 items-center scroll-m-20 font-medium text-foreground mb-2 mt-16 tracking-tight"
			>
				<LinkIcon
					className="size-4 text-primary"
					aria-hidden="true"
				/>{" "}
				{work?.href ? <span>Links</span> : <span>Link</span>}
			</h4>
			<div
				className="flex gap-2"
				aria-labelledby="links-heading"
			>
				<Button
					variant="secondary"
					asChild
				>
					<Link
						href={work?.github || ""}
						target="_blank"
						rel="noopener noreferrer"
						className="focus:outline-none"
						aria-label={`View ${work?.title} source code on GitHub`}
					>
						<GithubIcon aria-hidden="true" />
						GitHub
					</Link>
				</Button>
				{work?.href ? (
					<Button
						variant="secondary"
						asChild
					>
						<Link
							href={work?.href || ""}
							target="_blank"
							rel="noopener noreferrer"
							className="focus:outline-none"
							aria-label={`Visit ${work?.title} website`}
						>
							<ArrowUpRightIcon aria-hidden="true" />
							Visit Site
						</Link>
					</Button>
				) : null}
			</div>
		</motion.section>
	)
}

export default ProjectDetails
