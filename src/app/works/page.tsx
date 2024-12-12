"use client"

import { useScroll } from "framer-motion"
import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import { WorkList } from "./data/workslist"
import { TList } from "@/components/shared/interface/card"
import Card from "@/components/shared/card"
import { motion } from "framer-motion"

export default function WorksPage() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
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
        duration: 0.7,
        ease: "easeInOut",
        repeat: 0,
        repeatType: "loop",
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
