import { notFound } from "next/navigation"

import { worksMeta } from "../data/worksdetails"
import { ImageWrapper, Paragraph, ProjectDetails, ProjectTitle } from "@/components/works"

export function generateStaticParams() {
	return worksMeta.map((work) => ({ id: work.id.toString() }))
}

async function worksDetails({ params }: { params: { id: string } }) {
	const { id } = params
	const work = worksMeta.find((work) => work.id.toString() === id)

	if (!work) notFound()

	return (
		<div className="details-container">
			<div className="mx-auto w-full xl:w-2/4">
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
