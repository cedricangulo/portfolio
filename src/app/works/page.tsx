"use client"

import { useScroll, motion } from "motion/react"
import { useRef } from "react"
import { WorkList } from "./data/workslist"
import { TList } from "@/components/shared/interface/card"
import Card from "@/components/shared/works/card"

export default function WorksPage() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	})

	return (
		<motion.div
			ref={container}
			className="min-h-screen w-full"
			initial={{ opacity: 0, filter: "blur(8px)" }}
			animate={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.5,
				duration: 0.4,
				ease: "easeInOut",
			}}
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
		</motion.div>
	)
}
