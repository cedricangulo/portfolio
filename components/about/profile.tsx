"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { AnimateFadeIn } from ".";
import TiltedCard from "./tilted-card";

const Profile = () => {
	const defaultImage =
		"https://sow4xmup6y.ufs.sh/f/XLJnqTgGVh2yYcAK8muDmLAVBbonEQp4dC6fltP1v0sNOTai";
	const hoverImage =
		"https://sow4xmup6y.ufs.sh/f/XLJnqTgGVh2yqU8QFGMLPtO9GS4Bjg8wDdcUrIqWkCY5emHM";
	const clickedImage =
		"https://sow4xmup6y.ufs.sh/f/XLJnqTgGVh2ySxE5pidkZ5UY7wNv401CqDaOyxGREVrfImtl";
	const [isHovered, setIsHovered] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	const displayImage = isClicked
		? clickedImage
		: isHovered
			? hoverImage
			: defaultImage;

	return (
		<motion.div
			{...AnimateFadeIn(0.45)}
			className="lg:w-1/4 flex justify-center items-center xl:mb-0 cursor-pointer"
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => {
				setIsHovered(false);
				setIsClicked(false);
			}}
			onClick={handleClick}
		>
			<TiltedCard
				imageSrc={displayImage}
				altText="Cedric Angulo"
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
	);
};

export default Profile;
