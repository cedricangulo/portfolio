import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { INavMenu } from "../interface/nav";
import { menuSlide } from "./anim";
import Curve from "./curve";
import { ModeToggle } from "./mode-toggle";
import NavLink from "./nav-links";

export const navLinks = [
	{ title: "Home", href: "/#home", section: "home" as const },
	{ title: "Works", href: "/#works", section: "works" as const },
	{ title: "About", href: "/#about", section: "about" as const },
	{ title: "Contact", href: "/#contact", section: "contact" as const },
];

export default function HeaderMenu({
	sidebarOpen,
	setSidebarOpen,
	activeSection,
	isWorksDetail,
}: INavMenu) {
	function currentPath(isActive: boolean): string {
		let style = "text-purple-900 hover:text-purple-800";

		if (isActive) {
			style = "text-cyan-100 hover:text-purple-50";
		}

		return style;
	}

	return (
		<motion.div
			exit="exit"
			animate="enter"
			initial="initial"
			variants={menuSlide}
			className="md:hidden block h-screen w-full fixed right-0 top-0 bg-purple-500"
		>
			<div className="flex gap-4 justify-center flex-col items-center w-full h-full px-4">
				{navLinks.map((data, index) => {
					const isActive = isWorksDetail
						? data.section === "works"
						: data.section === activeSection;

					return (
						<NavLink
							key={`nav-link-${index + 1}`}
							i={index}
							href={data.href}
							className={cn(
								currentPath(isActive),
								sidebarOpen ? "block" : "hidden",
								"uppercase text-7xl md:text-sm font-bold rounded-lg transition-all"
							)}
							setSidebarOpen={setSidebarOpen}
						>
							{data.title}
						</NavLink>
					);
				})}
				<div className="w-full flex justify-center items-center mt-8 px-3 md:px-0">
					<ModeToggle />
				</div>
			</div>
			<Curve />
		</motion.div>
	);
}
