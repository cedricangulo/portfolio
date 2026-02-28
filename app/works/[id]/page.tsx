import { notFound } from "next/navigation";
import {
	ImageWrapper,
	Paragraph,
	ProjectDetails,
	ProjectTitle,
} from "@/components/works";
import { worksMeta } from "../data/worksdetails";

export function generateStaticParams() {
	return worksMeta.map((work) => ({ id: work.id.toString() }));
}

async function worksDetails({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const work = worksMeta.find((work) => work.id.toString() === id);

	if (!work) notFound();

	return (
		<div className="my-0 mx-auto min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-12 justify-center">
			<div className="mx-auto">
				<ProjectTitle>{work?.title}</ProjectTitle>
				{work?.paragraphs.map((paragraph, index) => (
					<Paragraph key={`paragraph-${index + 1}`} delay={(index + 2) * 0.15}>
						{paragraph}
					</Paragraph>
				))}
				<ProjectDetails work={work} />
			</div>
			<ImageWrapper work={work} />
		</div>
	);
}

export default worksDetails;
