"use client"

import React from "react"
import { motion } from "framer-motion"
import { default as Hl } from "./highlight"

// Main component
const ParagraphWrapper: React.FC = () => {
	return (
		<div className="paragraph-wrapper">
			<Paragraph delay={0}>
				Finding out that websites are made with <Hl>HTML</Hl> and <Hl>CSS</Hl> got me excited about{" "}
				<Hl>web development</Hl>. That made me really interested in{" "}
				<Hl>computers and programming</Hl>. Now here I am, <Hl>20 years old</Hl> and pursuing my
				dreams as a second year BSIT student.
			</Paragraph>
			<Paragraph delay={0.5}>
				Currently at <Hl>NEUST</Hl>, I‘m diving deep into <Hl>web development</Hl>, <Hl>Java</Hl>,
				and <Hl>C++</Hl>. I see myself mainly as a <Hl>frontend developer</Hl>, but I want to be{" "}
				<Hl>versatile</Hl> and <Hl>work well in a team</Hl>. Soon, I plan to learn <Hl>Laravel</Hl>{" "}
				to build <Hl>full-stack applications</Hl> on my own. The thought of all the new knowledge I
				will gain in the future excites me greatly.
			</Paragraph>
			<Paragraph delay={1}>
				When working on my <Hl>personal projects</Hl>, I love using <Hl>Next.js</Hl> and{" "}
				<Hl>Tailwind CSS</Hl> with <Hl>shadcn/ui</Hl>. These tools make me super productive! Though
				I‘m comfortable with this <Hl>stack</Hl>, many developers suggest learning to love{" "}
				<Hl>PHP</Hl> and I should not stay at my comfort zone. That‘s exactly why I‘m planning to
				explore its most popular framework, <Hl>Laravel</Hl>.
			</Paragraph>
		</div>
	)
}

export default ParagraphWrapper

// Paragraph component
const Paragraph: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
	return (
		<motion.p
			initial={{ opacity: 0, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: delay,
				duration: 1,
				ease: "easeInOut",
			}}
			className="paragraph"
		>
			{children}
		</motion.p>
	)
}
Paragraph.displayName = "Paragraph"
