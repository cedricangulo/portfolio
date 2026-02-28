import { easeIn } from "motion";
import Highlight from "./highlight";
import OldPortfolioSection from "./old-portfolio-section";
import ParagraphWrapper from "./paragraph-wrapper";
import PhotographySection from "./photography-section";
import Profile from "./profile";
import TechStack from "./tech-stack";
import TimelineContainer from "./timeline";

const AnimateFadeIn = (delay: number = 0) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	whileInView: { opacity: 1, filter: "blur(0)" },
	viewport: { amount: 0.5, once: false },
	transition: { delay, duration: 0.3, ease: easeIn },
});

export {
	AnimateFadeIn,
	ParagraphWrapper,
	Profile,
	PhotographySection,
	Highlight,
	TechStack,
	TimelineContainer,
	OldPortfolioSection,
};
