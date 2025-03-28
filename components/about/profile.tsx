"use client"

import { motion } from "motion/react"
import TiltedCard from "./tilted-card"

const Profile = () => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(4px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.5,
				duration: 0.3,
				ease: "easeIn",
			}}
			className="lg:w-1/4 flex justify-center items-center xl:mb-0"
		>
			<TiltedCard
				imageSrc="/me.png"
				altText="ME"
				captionText=""
				containerHeight="300px"
				containerWidth="300px"
				imageHeight="300px"
				imageWidth="300px"
				rotateAmplitude={12}
				scaleOnHover={1.2}
				showMobileWarning={false}
				showTooltip={false}
				displayOverlayContent={true}
			/>
		</motion.div>
	)
}

export default Profile
