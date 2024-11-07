"use client"
import { useScroll } from "framer-motion"
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { WorkList } from "./data/workslist"
import { TList } from "@/components/shared/interface/card"
import Card from "@/components/shared/card"

export default function WorksPage() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	})

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	return (
		<div
			ref={container}
			className="animate-fadeIn [--fadeIn-delay:700ms] opacity-0 min-h-screen w-full"
		>
			{WorkList.map((l: TList, index: number) => {
				const targetScale = 1 - (WorkList.length - index) * 0.05
				return (
					<Card
						key={index}
						i={index}
						l={l}
						progress={scrollYProgress}
						range={[index * 0.25, 1]}
						targetScale={targetScale}
					/>
				)
			})}
		</div>
	)
}
