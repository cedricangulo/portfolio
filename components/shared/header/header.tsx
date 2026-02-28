"use client";

import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../../ui/button";
import HeaderMenu, { navLinks } from "./header-menu";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	const pathname = usePathname();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<
		"home" | "works" | "about"
	>("home");
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const isWorksDetail = pathname.startsWith("/works/");

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	useEffect(() => {
		const d = document;

		d.body.style.overflow = sidebarOpen ? "hidden" : "";

		// Handle ESC key to close the sidebar
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && sidebarOpen) {
				setSidebarOpen(false);
				menuButtonRef.current?.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			d.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [sidebarOpen]);

	useEffect(() => {
		if (isWorksDetail) {
			setActiveSection("works");
			return;
		}

		if (pathname !== "/") {
			setActiveSection("home");
			return;
		}

		const validSectionIds = ["home", "works", "about"] as const;

		const updateFromHash = () => {
			const hashSection = window.location.hash.replace("#", "");
			if (
				validSectionIds.includes(
					hashSection as (typeof validSectionIds)[number]
				)
			) {
				setActiveSection(hashSection as (typeof validSectionIds)[number]);
			}
		};

		const detectActiveSection = () => {
			const headerOffset = 120;
			const sectionElements = validSectionIds
				.map((sectionId) => ({
					id: sectionId,
					element: document.getElementById(sectionId),
				}))
				.filter((item) => item.element);

			if (!sectionElements.length) return;

			const inView = sectionElements.find((item) => {
				const rect = item.element!.getBoundingClientRect();
				return rect.top <= headerOffset && rect.bottom > headerOffset;
			});

			if (inView) {
				setActiveSection(inView.id);
				return;
			}

			const nearest = sectionElements
				.map((item) => ({
					id: item.id,
					distance: Math.abs(
						item.element!.getBoundingClientRect().top - headerOffset
					),
				}))
				.sort((a, b) => a.distance - b.distance)[0];

			if (nearest) {
				setActiveSection(nearest.id);
			}
		};

		let frameId = 0;
		const onScroll = () => {
			if (frameId) return;
			frameId = window.requestAnimationFrame(() => {
				detectActiveSection();
				frameId = 0;
			});
		};

		updateFromHash();
		detectActiveSection();

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		window.addEventListener("hashchange", updateFromHash);

		return () => {
			if (frameId) {
				window.cancelAnimationFrame(frameId);
			}
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			window.removeEventListener("hashchange", updateFromHash);
		};
	}, [pathname, isWorksDetail]);

	return (
		<header
			className={cn(
				"fixed top-0 py-0 z-40",
				"w-full min-h-16",
				"flex flex-col justify-around items-center"
			)}
		>
			<nav
				aria-label="Main navigation"
				className="relative flex flex-wrap items-center justify-between max-w-250 w-full px-4 py-4 lg:px-0 md:py-6"
			>
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-[1.05] active:scale-[.95] transition-all z-50"
					onClick={() => setSidebarOpen(false)}
					aria-label="Home page"
				>
					<Logo state={sidebarOpen} className="size-10" />
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
							activeSection={activeSection}
							isWorksDetail={isWorksDetail}
						/>
					)}
				</AnimatePresence>

				<ul
					className="hidden md:flex items-center justify-around md:space-x-4 md:border-0 md:bg-transparent"
					aria-label="Desktop navigation"
				>
					{navLinks.map((data, index) => {
						const isActive = isWorksDetail
							? data.section === "works"
							: data.section === activeSection;
						const activeClass = isActive
							? "text-highlight-foreground bg-highlight"
							: "";
						return (
							<li key={`nav-link-${index + 1}`} className="w-full md:w-auto">
								<Button variant="ghost" asChild>
									<Link
										href={data.href}
										onClick={() => setSidebarOpen(false)}
										className={`md:inline uppercase text-6xl md:text-sm font-medium rounded-lg ${activeClass}`}
										aria-current={isActive ? "location" : undefined}
									>
										{data.title}
									</Link>
								</Button>
							</li>
						);
					})}
					<li className="w-full hidden md:w-auto md:flex items-center px-3 md:px-0">
						<ModeToggle />
					</li>
				</ul>
			</nav>
		</header>
	);
}
