import Link from 'next/link';
import { slide } from './anim';
import { motion } from 'framer-motion';
import { INavLink } from './interface/nav';
import styles from './styles/style.module.scss';

export default function NavLink({ i, href, className, setSidebarOpen, children }: INavLink) {
	return (
		<motion.div
			exit='exit'
			custom={i}
			animate='enter'
			variants={slide}
			initial='initial'
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
	);
}
