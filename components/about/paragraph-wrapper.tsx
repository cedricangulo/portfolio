"use client"

import React from "react"
import { motion } from "framer-motion"
import { default as Hl } from "./highlight"

const ParagraphWrapper: React.FC = () => {
	return (
		<div className="flex flex-col gap-4 w-full lg:w-3/4">
			<Paragraph delay={0}>
				Finding out that websites are made with <Hl>HTML</Hl> and <Hl>CSS</Hl> got me excited about{" "}
				web development. That made me really interested in computers and programming. Now here I am,{" "}
				<Hl>20</Hl> years old and pursuing my dreams as a second year BSIT student.
			</Paragraph>
			<Paragraph delay={0.2}>
				Currently at <Hl>NEUST</Hl>, I’m diving deep into web development, Java, and UI/UX Design. I
				see myself mainly as a <Hl>frontend developer</Hl>, but I want to be versatile and work well
				in a team. Soon, I plan to learn Laravel to build <Hl>full-stack applications</Hl> on my
				own. The thought of all the new knowledge I will gain in the future excites me greatly.
			</Paragraph>
			<Paragraph delay={0.3}>
				When working on my personal projects, I love using <Hl>Next.js</Hl> and{" "}
				<Hl>Tailwind CSS</Hl> with <Hl>shadcn/ui</Hl>. These tools make me super productive! Though
				I’m comfortable with this stack, many developers suggest learning to love <Hl>PHP</Hl> and I
				should not stay at my comfort zone. That’s exactly why I’m planning to explore its most
				popular framework, Laravel.
			</Paragraph>
		</div>
	)
}

export default ParagraphWrapper

const Paragraph: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
	return (
		<motion.p
			initial={{ opacity: 0, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: delay,
				duration: 0.3,
				ease: "easeInOut",
			}}
			className="text-foreground text-base font-normal leading-relaxed"
		>
			{children}
		</motion.p>
	)
}
Paragraph.displayName = "Paragraph"
