"use client"

import React from "react"
import { motion } from "motion/react"

interface ParagraphProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

const Paragraph = ({ children, delay = 1, duration = 0.5 }: ParagraphProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      viewport={{ amount: 0.5, once: false }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      }}
      className="paragraph my-4 text-foreground"
    >
      {children}
    </motion.p>
  )
}

export default Paragraph
