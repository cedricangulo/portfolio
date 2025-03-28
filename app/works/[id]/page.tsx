import { notFound } from "next/navigation"

import { worksMeta } from "../data/worksdetails"
import { ImageWrapper, Paragraph, ProjectDetails, ProjectTitle } from "@/components/works"

export function generateStaticParams() {
	return worksMeta.map((work) => ({ id: work.id.toString() }))
}

async function worksDetails({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const work = worksMeta.find((work) => work.id.toString() === id)

	if (!work) notFound()

	return (
		<div className="my-0 mx-auto min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 justify-center">
			<div className="mx-auto">
				<ProjectTitle>{work?.title}</ProjectTitle>
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
			<ImageWrapper work={work} />
		</div>
	)
}

export default worksDetails
