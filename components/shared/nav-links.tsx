import Link from "next/link"

import { motion } from "motion/react"
import { slide } from "./anim"
import styles from "./styles/style.module.css"

import { INavLink } from "./interface/nav"

export default function NavLink({ i, href, className, setSidebarOpen, children }: INavLink) {
	return (
		<motion.div
			exit="exit"
			custom={i}
			animate="enter"
			variants={slide}
			initial="initial"
			className={styles.link}
			onClick={() => setSidebarOpen(false)}
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
