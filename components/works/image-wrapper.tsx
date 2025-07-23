"use client"

import { useState } from "react"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { getMotionProps } from "."
import { InformationCircleIcon } from "@/public/icons"

interface WorkDetails {
	id: number
	title: string
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

const ImageWrapper = ({ work }: { work?: WorkDetails }) => {
	const [showAllImages, setShowAllImages] = useState(false)

	if (!work || !work.images) {
		return null
	}

	return (
		<motion.div
			{...getMotionProps(0.6)}
			className="w-full"
		>
			{(showAllImages ? work.images : work.images.slice(0, 2)).map((image, index) => (
				<figure
					key={index}
					className="mb-8 text-center"
				>
					<ImageZoom
						src={`https://sow4xmup6y.ufs.sh/f/${image.src}`}
						alt={image.alt}
						className="w-auto h-auto shadow-md"
						width={570}
						height={325}
					/>
					<figcaption className="mt-4 text-sm italic text-muted-foreground">{image.alt}</figcaption>
				</figure>
			))}
			<div className="grid place-items-center mt-4">
				{work.images.length > 2 && (
					<Button
						variant="ghost"
						onClick={() => setShowAllImages(!showAllImages)}
					>
						{showAllImages ? "View Less" : "View More"}
					</Button>
				)}
			</div>
			{work.id === 8 && (
				<span className="mt-12 inline-flex items-center gap-4 text-xs p-4 rounded-lg text-yellow-800 dark:text-yellow-50 border border-yellow-500 dark:border-yellow-600 bg-yellow-200/50 dark:bg-yellow-950">
					<InformationCircleIcon className="size-6 text-yellow-600 dark:text-yellow-200" />
					The data listed above are merely sample data from the internet.
				</span>
			)}
		</motion.div>
	)
}

export default ImageWrapper
