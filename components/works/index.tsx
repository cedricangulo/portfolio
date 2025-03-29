import ProjectTitle from "./project-title"
import BackButton from "./back-button"
import Paragraph from "./paragraph"
import ProjectDetails from "./project-details"
import ImageWrapper from "./image-wrapper"

const getMotionProps = (delay: number = 0) => ({
	initial: { opacity: 0, filter: "blur(4px)" },
	animate: { opacity: 1, filter: "blur(0)" },
	viewport: { once: true, amount: 0.5 },
	transition: { delay: delay, duration: 0.3, ease: "easeIn" },
})

export { ProjectTitle, BackButton, getMotionProps, Paragraph, ProjectDetails, ImageWrapper }
