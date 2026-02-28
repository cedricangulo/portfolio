"use client";

import { motion } from "motion/react";
import { lexend } from "@/lib/fonts";
import { getMotionProps } from ".";

const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.h2
			{...getMotionProps(0.15)}
			className={`${lexend.className} text-left text-3xl mb-8 font-medium text-foreground`}
		>
			{children}
		</motion.h2>
	);
};

export default ProjectTitle;
