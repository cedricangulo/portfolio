import { Info } from "lucide-react"
import { lexend, playfair } from "@/lib/fonts"
import { notFound } from "next/navigation"

import { worksMeta } from "../data/worksdetails"

import LangList from "@/components/shared/lang-list"
import ColorScheme from "@/components/shared/color-scheme"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import BranchTab from "@/components/shared/branch-tab"
import { Paragraph, Title } from "@/components/shared/works/works-bundle"
import ProjectDetails from "@/components/shared/works/project-details"

export function generateStaticParams() {
  return worksMeta.map((work) => ({ id: work.id.toString() }))
}

async function worksDetails({ params }: { params: any }) {
  const { id } = await params
  const work = worksMeta.find((work) => work.id.toString() === id)

  !work && notFound()

  return (
    <div className="details-container">
      <div className="mx-auto w-full xl:w-2/4">
        <Title delay={0}>{work?.title}</Title>
        {work?.paragraphs.map((paragraph, index) => (
          <Paragraph
            key={index}
            delay={(index + 1) * 0.25}
          >
            {paragraph}
          </Paragraph>
        ))}
				<ProjectDetails work={work} />
      </div>
      <div className="image-wrapper">
        {work?.images.map((image, index) => (
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
        {work?.id === 7 && (
          <span className="note">
            <Info
              strokeWidth={1.5}
              className="w-6 h-6 text-yellow-600 dark:text-yellow-200"
            />
            The data listed above are merely sample data from internet.
          </span>
        )}
      </div>
    </div>
  )
}

export default worksDetails
