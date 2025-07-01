import {
	TechStack,
	ParagraphWrapper,
	PhotographySection,
	Profile,
	TimelineContainer,
	// OldPortfolioSection,
} from "@/components/about"

export default function AboutPage() {
	return (
		<>
			<div className="w-full mx-auto md:py-0 my-16 lg:my-4 flex items-center lg:items-start justify-center gap-16 flex-col-reverse lg:flex-row">
				<ParagraphWrapper />
				<Profile />
			</div>
			<PhotographySection />
			<TechStack />
			<TimelineContainer />
			{/* <OldPortfolioSection /> */}
		</>
	)
}
