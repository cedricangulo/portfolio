"use client"

import { useState } from "react"
import { playfair } from "@/lib/fonts"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Info } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"

interface WorkDetails {
  id: number
  title: string
  paragraphs: string[]
  fontFamily: { fonts: { className: string }; text: string }[]
  colorScheme: { content: string; color: string; textColor: number }[]
  langs?: {
    langName: string
    langColor: { bg: string; fill: string }
    langWidth: number
  }[]
  images: { src: string; alt: string }[]
}

const ImageWrapper = ({ work }: { work?: WorkDetails }) => {
  const [showAllImages, setShowAllImages] = useState(false)

  if (!work || !work.images) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      viewport={{ amount: 0.5, once: false }}
      transition={{
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="image-wrapper h-full"
    >
      {(showAllImages ? work.images : work.images.slice(0, 2)).map((image, index) => (
        <figure
          key={index}
          className="my-4 text-center"
        >
          <ImageZoom
            src={image.src}
            alt={image.alt}
            className="w-auto h-auto shadow-md"
            width={570}
            height={325}
          />
          <figcaption className={`${playfair.className} fig-caption text-muted-foreground`}>
            {image.alt}
          </figcaption>
        </figure>
      ))}
      {!showAllImages && work.images.length > 2 && (
        <Button
          variant="ghost"
          onClick={() => setShowAllImages(true)}
          className="view-more-button"
        >
          View More
        </Button>
      )}
      {work.id === 8 && (
        <span className="note">
          <Info
            strokeWidth={1.5}
            className="w-6 h-6 text-yellow-600 dark:text-yellow-200"
          />
          The data listed above are merely sample data from the internet.
        </span>
      )}
    </motion.div>
  )
}

export default ImageWrapper
