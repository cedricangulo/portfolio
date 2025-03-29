"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState, useRef } from "react"
import Logo from "./logo"
import { Button } from "../../ui/button"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import HeaderMenu, { navLinks } from "./header-menu"
import { AnimatePresence } from "motion/react"

export default function Header() {
	const pathname = usePathname()
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const menuButtonRef = useRef<HTMLButtonElement>(null)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	useEffect(() => {
		const d = document

		d.body.style.overflow = sidebarOpen ? "hidden" : ""

		// Handle ESC key to close the sidebar
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && sidebarOpen) {
				setSidebarOpen(false)
				menuButtonRef.current?.focus()
			}
		}

		window.addEventListener("keydown", handleKeyDown)

		return () => {
			d.body.style.overflow = ""
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [sidebarOpen])

	return (
		<header
			className={cn(
				"fixed top-0 py-0 z-40",
				"w-full min-h-16",
				"flex flex-col justify-around items-center",
				"backdrop-blur-lg supports-[backdrop-filter]:bg-background/50"
			)}
		>
			<nav
				aria-label="Main navigation"
				className="relative flex flex-wrap items-center justify-between max-w-[62.5rem] w-full px-4 py-4 lg:px-0 md:py-6"
			>
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-[1.05] active:scale-[.95] transition-all z-50"
					onClick={() => setSidebarOpen(false)}
					aria-label="Home page"
				>
					<Logo
						state={sidebarOpen}
						className="size-10"
					/>
				</Link>
				<Button
					ref={menuButtonRef}
					variant="link"
					onClick={toggleSidebar}
					aria-label={sidebarOpen ? "Close menu" : "Open menu"}
					aria-expanded={sidebarOpen}
					aria-controls="mobile-menu"
					className="md:hidden flex items-center justify-center m-0 p-0 border-none h-9 w-9 rounded-md cursor-pointer bg-transparent z-10"
				>
					<div
						className={cn(
							"flex gap-3 flex-col justify-center items-center w-full h-full pointer-events-none after:bg-foreground before:bg-foreground",
							"before:content-[''] before:block before:h-[1.5px] before:w-[24px] before:rotate-0 before:transition-all before:duration-[600ms] before:ease-[cubic-bezier(0.76,0,0.24,1)]",
							"after:content-[''] after:block after:h-[1.5px] after:w-[24px] after:rotate-0 after:transition-all after:duration-[600ms] after:ease-[cubic-bezier(0.76,0,0.24,1)]",
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

				<ul
					className="hidden md:flex items-center justify-around md:space-x-4 md:border-0 md:bg-transparent"
					aria-label="Desktop navigation"
				>
					{navLinks.map((data, index) => {
						const isActive =
							pathname === data.href || (data.href === "/works" && pathname.startsWith("/works"))
						const activeClass = isActive ? "text-highlight-foreground bg-highlight" : ""
						return (
							<li
								key={index}
								className="w-full md:w-auto"
							>
								<Button
									variant="ghost"
									asChild
								>
									<Link
										href={data.href}
										onClick={() => setSidebarOpen(false)}
										className={`md:inline uppercase text-6xl md:text-sm font-medium rounded-lg ${activeClass}`}
										aria-current={isActive ? "page" : undefined}
									>
										{data.title}
									</Link>
								</Button>
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
