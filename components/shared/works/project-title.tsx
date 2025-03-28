"use client"

import { lexend } from "@/lib/fonts"
import { motion } from "motion/react"

interface TitleProps {
  children: React.ReactNode
  delay?: number
  duration?: number
}

const Title = ({ children, delay = 1, duration = 0.3 }: TitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      viewport={{ amount: 0.5, once: false }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      }}
      className={`${lexend.className} text-left text-3xl mb-8 font-medium text-foreground`}
    >
      {children}
    </motion.h2>
  )
}

export default Title
