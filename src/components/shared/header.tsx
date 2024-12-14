"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import Logo from "./logo"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import HeaderMenu, { navLinks } from "./header-menu"
import { AnimatePresence } from "motion/react"

export default function Header() {
	const pathname = usePathname()
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	useEffect(() => {
		const d = document

		sidebarOpen ? (d.body.style.overflow = "hidden") : (d.body.style.overflow = "")

		return () => {
			d.body.style.overflow = ""
		}
	}, [sidebarOpen])

	return (
		<header
			role="header"
			className="fixed top-0 py-0 w-full min-h-16 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-transparent flex flex-col justify-around items-center z-40"
		>
			<nav
				role="navigation"
				className="relative flex flex-wrap items-center justify-between max-w-[62.5rem] w-full px-4 py-4 lg:px-0 md:py-6"
			>
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-[1.05] active:scale-[.95] transition-all z-50"
					onClick={() => setSidebarOpen(false)}
				>
					<Logo
						state={sidebarOpen}
						className="size-10"
					/>
				</Link>
				<Button
					variant="link"
					onClick={toggleSidebar}
					aria-label="open menu"
					aria-expanded={sidebarOpen ? "true" : "false"}
					className="md:hidden flex items-center justify-center m-0 p-0 border-none h-9 w-9 rounded-md cursor-pointer bg-transparent z-10"
				>
					<div
						className={cn(
							"menu_toggle after:bg-foreground before:bg-foreground",
							sidebarOpen
								? "before:rotate-45 before:translate-y-[0.438rem] after:-rotate-45 after:translate-y-[-0.375rem]"
								: "before:rotate-0 after:rotate-0"
						)}
					/>
				</Button>

				<AnimatePresence mode="wait">
					{sidebarOpen && (
						<HeaderMenu
							sidebarOpen={sidebarOpen}
							setSidebarOpen={setSidebarOpen}
						/>
					)}
				</AnimatePresence>

				<ul className="hidden md:flex items-center justify-around md:space-x-8 md:border-0 md:bg-transparent">
					{navLinks.map((data, index) => {
						const isActive =
							pathname === data.href || (data.href === "/works" && pathname.startsWith("/works"))
						let style =
							"text-zinc-500 dark:text-zinc-300 hover:text-primary/80 dark:hover:text-primary/90"
						isActive && (style = "text-primary hover:text-primary/80")
						return (
							<li
								key={index}
								className="w-full md:w-auto"
							>
								<Link
									href={data.href}
									onClick={() => setSidebarOpen(false)}
									className={`md:inline uppercase text-6xl md:text-sm font-medium rounded-lg md:rounded-none py-2 px-3 md:p-0 transition-all
										${style}
									`}
								>
									{data.title}
								</Link>
							</li>
						)
					})}
					<li className="w-full hidden md:w-auto md:flex items-center px-3 md:px-0">
						<ModeToggle />
					</li>
				</ul>
			</nav>
		</header>
	)
}
