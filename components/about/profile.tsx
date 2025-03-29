"use client"

import { motion } from "motion/react"
import TiltedCard from "./tilted-card"
import { AnimateFadeIn } from "."

const Profile = () => {
	return (
		<motion.div
			{...AnimateFadeIn(0.45)}
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
