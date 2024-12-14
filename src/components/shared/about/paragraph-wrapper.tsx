"use client"

import React from "react"
import { motion } from "framer-motion"
import { default as Hl } from "./highlight"

// Main component
const ParagraphWrapper: React.FC = () => {
	return (
		<div className="paragraph-wrapper">
			<Paragraph delay={0}>
				I’m 20 years old and a second year <Hl>BSIT student</Hl>. Finding out that websites are made
				with <Hl>HTML</Hl> and <Hl>CSS</Hl> got me excited about web development. That made me
				really interested in computers and programming.
			</Paragraph>
			<Paragraph delay={0.5}>
				Right now, I’m learning <Hl>ReactJS</Hl> and getting better at front-end skills with{" "}
				<Hl>TailwindCSS</Hl> and <Hl>NextJS</Hl>. As a second-year student, I’m putting in more
				effort to learn about <Hl>DSA</Hl> and <Hl>OOP</Hl> while applying my current web
				development knowledge in my <Hl>Web Systems Technology</Hl> subject. Even though I mostly
				focus on front-end development, I also want to try back-end development someday.
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
