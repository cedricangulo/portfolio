"use client"

import { motion } from "framer-motion"
import BranchTab from "../branch-tab"
import LangList from "../lang-list"
import ColorScheme from "../color-scheme"

interface WorkDetails {
  id: number
  title: string
  paragraphs: string[]
  fontFamily: { fonts: { className: string }; text: string }[]
  colorScheme: { content: string; color: string; textColor: number }[]
  langs: {
    langName: string
    langColor: { bg: string; fill: string }
    langWidth: number
  }[]
  images: { src: string; alt: string }[]
}

const ProjectDetails = ({
  work,
  delay = 1,
  duration = 1,
}: {
  work?: WorkDetails
  delay?: number
  duration?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, filter: "blur(0)" }}
      viewport={{ amount: 0.5, once: false }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeInOut",
        repeat: 0,
        repeatType: "loop",
      }}
      className="details-wrapper"
    >
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
        <div className="w-2/4">
          {work?.fontFamily.map((f, index) => (
            <p
              key={index}
              className={`${f.fonts.className} text-2xl text-foreground`}
            >
              {f.text}
            </p>
          ))}
        </div>
        <div className="colorscheme-wrapper">
          {work?.colorScheme.map((color, index) => (
            <ColorScheme
              key={index}
              content={color.content}
              color={color.color}
              textColor={color.textColor}
            />
          ))}
        </div>
      </div>
      <div className="lang-wrapper">
        {work?.id === 4 ? <BranchTab /> : <LangList lang={work?.langs} />}
      </div>
    </motion.div>
  )
}

export default ProjectDetails
