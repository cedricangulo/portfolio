import Link from "next/link"

import { motion } from "motion/react"
import { slide } from "./anim"

import { INavLink } from "../interface/nav"

export default function NavLink({ i, href, className, setSidebarOpen, children, ...props }: INavLink) {
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
			<Link
				href={href}
				className={className}
			>
				{children}
			</Link>
		</motion.div>
	)
}
