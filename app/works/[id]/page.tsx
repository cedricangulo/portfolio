import { notFound, permanentRedirect } from "next/navigation";
import {
	ImageWrapper,
	Paragraph,
	ProjectDetails,
	ProjectTitle,
} from "@/components/works";
import { worksMeta } from "../data/worksdetails";

export function generateStaticParams() {
	return worksMeta.map((work) => ({ id: work.slug }));
}

async function worksDetails({ params }: { params: Promise<{ id: string }> }) {
	const { id: routeParam } = await params;
	const isLegacyId = /^\d+$/.test(routeParam);

	if (isLegacyId) {
		const legacyWork = worksMeta.find(
			(work) => work.id.toString() === routeParam
		);

		if (!legacyWork) {
			notFound();
		}

		permanentRedirect(`/works/${legacyWork.slug}`);
	}

	const work = worksMeta.find((entry) => entry.slug === routeParam);

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
