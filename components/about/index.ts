import Highlight from "./highlight"
import TechStack from "./tech-stack"
import TimelineContainer from "./timeline"
import ParagraphWrapper from "./paragraph-wrapper"
import Profile from "./profile"
import PhotographySection from "./photography-section"
import OldPortfolioSection from "./old-portfolio-section"

const AnimateFadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: "easeIn" },
})

export {
	AnimateFadeIn,
	ParagraphWrapper,
	Profile,
	PhotographySection,
	Highlight,
	TechStack,
	TimelineContainer,
	OldPortfolioSection,
}
