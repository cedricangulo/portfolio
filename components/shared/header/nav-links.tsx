import { motion } from "motion/react";
import Link from "next/link";
import type { INavLink } from "../interface/nav";
import { slide } from "./anim";

export default function NavLink({
	i,
	href,
	className,
	setSidebarOpen,
	children,
	...props
}: INavLink) {
	return (
		<motion.div
			exit="exit"
			custom={i}
			animate="enter"
			variants={slide}
			initial="initial"
			className="relative flex items-center"
			onClick={() => setSidebarOpen(false)}
			{...props}
		>
			<Link href={href} className={className}>
				{children}
			</Link>
		</motion.div>
	);
}
