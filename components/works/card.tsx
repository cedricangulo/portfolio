"use client"

import { motion } from "motion/react"
import ImageRender from "@/components/shared/image-render"
import Link from "next/link"

export const Card: React.FC<{
	src: string
	title: string
	text: string
	index: number
}> = ({ src, title, text, index }) => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.1 * index,
				duration: 0.3,
				ease: "easeInOut",
			}}
		>
			<Link href={`/works/${index + 1}`}>
				<article className="mt-8 border border-border hover:border-primary rounded-xl p-1 shadow-sm transition-colors duration-300">
					<div className="relative rounded-lg overflow-hidden group">
						<ImageRender
							width={475}
							height={355}
							src={src}
							alt={title}
							className="w-full rounded-lg z-0"
						/>
						<div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black h-1/2 w-full z-10 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100" />
						<div className="absolute bottom-0 left-0 p-4 z-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
							<h4 className="text-white text-xl font-medium mb-1.5 md:group-hover:delay-300">
								{title}
							</h4>
							<p className="text-white text-sm md:group-hover:delay-1000">{text}</p>
						</div>
					</div>
				</article>
			</Link>
		</motion.div>
	)
}

Card.displayName = "Card"
