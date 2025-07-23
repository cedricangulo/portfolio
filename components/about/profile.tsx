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
				imageSrc="https://sow4xmup6y.ufs.sh/f/XLJnqTgGVh2y8ZikX72HPbiBv6EgI17KOo5AxDFleTXQ9wRz"
				altText="ME"
				captionText=""
				containerHeight="300px"
				containerWidth="300px"
				imageHeight="300px"
				imageWidth="300px"
				rotateAmplitude={20}
				scaleOnHover={1.1}
				showMobileWarning={false}
				showTooltip={false}
				displayOverlayContent={true}
			/>
		</motion.div>
	)
}

export default Profile
