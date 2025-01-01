import {
	TechStack,
	ParagraphWrapper,
	PhotographySection,
	Profile,
	Timeline,
	OldPortfolioSection,
} from "@/components/shared/about/about-bunddle"

export default function AboutPage() {
	return (
		<>
			<div className="main-container">
				<ParagraphWrapper />
				<Profile />
			</div>
			<PhotographySection />
			<TechStack />
			<Timeline />
			<OldPortfolioSection />
		</>
	)
}
