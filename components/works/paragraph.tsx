"use client";

import { motion } from "motion/react";
import { getMotionProps } from ".";

const Paragraph = ({
	children,
	delay,
}: {
	children: React.ReactNode;
	delay?: number;
}) => {
	return (
		<motion.p {...getMotionProps(delay)} className="mt-4 text-muted-foreground">
			{children}
		</motion.p>
	);
};

export default Paragraph;
