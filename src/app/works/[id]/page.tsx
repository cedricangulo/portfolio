import { notFound } from "next/navigation"

import { worksMeta } from "../data/worksdetails"
import {
	ImageWrapper,
	Paragraph,
	ProjectDetails,
	Title,
} from "@/components/shared/works/works-bundle"

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
			<ImageWrapper work={work} />
		</div>
	)
}

export default worksDetails
