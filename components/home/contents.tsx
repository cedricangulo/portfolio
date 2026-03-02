"use client";

import { motion } from "motion/react";
import Link from "next/link";
// import { YearBadge } from "@/components/home";
import { Button } from "@/components/ui/button";
import { lexend } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MailIcon } from "@/public/icons";

const getMotionProps = (delay: number = 0) => ({
	initial: { opacity: 0, y: -20, filter: "blur(2px)" },
	whileInView: { opacity: 1, y: 0, filter: "0" },
	viewport: { once: false, amount: 0.5 },
	transition: { type: "spring" as const, damping: 15, stiffness: 100, delay },
});

export const Contents = () => {
	return (
		<section className="min-h-dvh flex mx-0 sm:mx-auto" aria-label="Home">
			<div className="w-full flex sm:items-center justify-center flex-col gap-2">
				<motion.p
					{...getMotionProps(0)}
					className={cn(
						"font-lexend text-xl sm:text-2xl md:text-3xl text-foreground font-medium",
						lexend.className
					)}
				>
					Hi, I&apos;m <span className="text-primary">Cedric Angulo</span>
				</motion.p>
				<motion.h1
					{...getMotionProps(0.15)}
					className={cn(
						"text-foreground font-extrabold tracking-tight leading-none text-5xl sm:text-6xl md:text-7xl",
						lexend.className
					)}
				>
					<span className="text-primary">Frontend</span>{" "}
					<span className="relative">
						Developer
						{/* <YearBadge /> */}
					</span>
				</motion.h1>
				<motion.p
					{...getMotionProps(0.3)}
					className={cn(
						"text-foreground text-sm sm:text-base max-w-sm",
						"sm:text-center leading-relaxed"
					)}
				>
					Building beautiful and functional interfaces. Based in Nueva Ecija,
					Philippines.
				</motion.p>
				{/* <motion.p
					{...getMotionProps(0.3)}
					className={cn(
						"text-foreground text-sm sm:text-base max-w-sm sm:max-w-md",
						"sm:text-center leading-relaxed"
					)}
				>
					Third Year student at{" "}
					<Button asChild className="p-0 h-fit rounded-none" variant="link">
						<Link
							aria-label="NEUST - Nueva Ecija University of Science and Technology"
							href="https://neust.edu.ph"
							rel="noopener noreferrer"
							target="_blank"
						>
							NEUST
						</Link>
					</Button>
					, based in Nueva Ecija, Philippines
				</motion.p> */}
				<motion.div
					{...getMotionProps(0.45)}
					className="inline-flex gap-3 mt-2"
					role="navigation"
					aria-label="Main actions"
				>
					<Button asChild variant="secondary" size="lg">
						<Link
							href="mailto:cdrcangulo@gmail.com"
							target="_blank"
							aria-label="Email me at cdrcangulo@gmail.com"
							rel="noopener noreferrer"
						>
							<MailIcon aria-hidden="true" />
							<span>cdrcangulo@gmail.com</span>
						</Link>
					</Button>
					<Button asChild size="lg">
						<Link href="/#works" aria-label="View my works">
							Works
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
};
