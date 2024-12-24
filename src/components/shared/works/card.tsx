import { useEffect, useMemo, useRef } from "react"
import { useTransform, motion } from "motion/react"

import { TCard } from "@/components/shared/interface/card"
import { lexend } from "@/lib/fonts"
import { Info } from "lucide-react"

import Buttons from "./card-buttons"
import ImageRender from "../image-render"
import { Badge } from "../../ui/badge"
import Link from "next/link"

function Card({ i, l, progress, range, targetScale }: TCard) {
	// Create a ref to the container element
	const container = useRef(null)

	// Adjust the range to avoid having the same start and end values
	const adjustedRange = useMemo(() => {
		return range[0] === range[1] ? [range[0] - 0.1, range[1] + 0] : range
	}, [range])

	// Create a scale transformation based on the progress and adjusted range
	const scale = useTransform(progress, adjustedRange, [1, targetScale])

	// Log the card index, scale, progress, and adjusted range whenever they change
	// * DONE TESTING SO I'LL COMMENT THIS OUT 😀
	// useEffect(() => {
	// 	console.log(`Card index: ${i}, scale: ${scale.get()}`)
	// 	console.log(`Progress: ${progress}, Range: ${adjustedRange}`)
	// }, [scale, i, progress, adjustedRange])

	return (
		<div
			ref={container}
			className={`max-w-[34rem] lg:max-w-full mx-auto sticky top-[10%] flex items-enter justify-center`}
		>
			<motion.div
				style={{ scale, top: `calc(5vh + ${i * 1}rem)` }}
				className="card"
			>
				<ImageRender
					width={500}
					height={280}
					src={l.src}
					alt={l?.title}
					className="w-full lg:w-2/4"
				/>
				<div className="z-10 p-4 grid gap-4 w-full lg:w-2/4">
					<div className="w-full gap-4 flex flex-col">
						<div className="flex items-start justify-between">
							<h4
								className={`${lexend.className} text-foreground font-medium text-3xl mb-2 leading-7`}
							>
								{l?.title}
							</h4>
							<Buttons
								l={l}
								i={i}
							/>
						</div>
						<p className="text-foreground text-base">{l.text}</p>
					</div>
					{/* <Link
						className="flex items-center gap-2 w-fit text-muted-foreground"
						href={`works/${i + 1}`}
						aria-label="Learn more"
					>
						Learn More
						<span className="sr-only">Learn more</span>
						<Info
							strokeWidth={1.5}
							className="size-[1rem]"
						/>
					</Link> */}
					<div className="flex gap-2 flex-wrap">
						{l.tags.map((tag: string, index: number) => {
							return (
								<Badge
									key={index}
									variant="secondary"
									className="text-muted-foreground border-border transition-none"
								>
									{tag}
								</Badge>
							)
						})}
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Card
