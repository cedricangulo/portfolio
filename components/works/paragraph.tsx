"use client"

import { motion } from "motion/react"
import { getMotionProps } from "."

const Paragraph = ({ children, delay }: { children: React.ReactNode; delay?: number }) => {
	return <motion.p {...getMotionProps(delay)}>{children}</motion.p>
}

export default Paragraph
