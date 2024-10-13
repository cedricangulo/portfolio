import { cn } from "@/lib/utils"
import { caveat, lexend } from "@/lib/fonts"

import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

import Link from "next/link"
import GridBackground from "@/components/shared/grid-background"
import { Button } from "@/components/ui/button"

export default function HomePage() {
	return (
		<section className="relative h-dvh flex items-center justify-between max-w-[62.5rem] w-full">
			<GridBackground />
			<div className="h-screen flex mx-0 sm:mx-auto">
				<div className="w-full flex sm:items-center justify-center flex-col gap-2">
					<p
						className={cn(
							"text-xl sm:text-2xl md:text-3xl text-foreground font-medium animate-slideIn [--slideIn-delay:300ms] opacity-0 transition-all",
							lexend.className
						)}
					>
						Hi, I’m <span className="text-primary">Cedric Angulo</span>
					</p>
					<h1
						className={cn(
							"text-foreground font-extrabold tracking-tight leading-none text-5xl sm:text-6xl md:text-8xl animate-slideIn [--slideIn-delay:500ms] opacity-0",
							lexend.className
						)}
					>
						<span className="text-primary">BSIT</span>{" "}
						<span className="relative transition-all">
							Student
							{/* <span
								className={cn(
									"absolute -right-4 lg:-right-6 -rotate-12 -top-3",
									"text-primary font-normal tracking-wider",
									"text-2xl md:text-3xl",
									caveat.className
								)}
							>
								only
							</span> */}
						</span>
					</h1>
					<p
						className={cn(
							"animate-slideIn [--slideIn-delay:700ms] opacity-0 transition-all",
							"text-foreground text-sm sm:text-base max-w-sm sm:max-w-md",
							"sm:text-center leading-relaxed"
						)}
					>
						Aspiring web developer and a second year student at{" "}
						<Link
							href="https://neust.edu.ph"
							target="_blank"
							className="text-primary hover:text-primary/80 hover:underline underline-offset-2 font-semibold focus:outline-ring"
						>
							NEUST
						</Link>
						, based in Nueva Ecija, Philippines
					</p>
					<div className="animate-slideIn [--slideIn-delay:900ms] opacity-0 inline-flex gap-3 mt-2">
						<Button variant="secondary">
							<EnvelopeOpenIcon className="mr-2 h-4 w-4" />
							<Link
								href="mailto:cdrcangulo@gmail.com"
								target="_blank"
							>
								cdrcangulo@gmail.com
							</Link>
						</Button>
						<Button
							className="text-white"
							asChild
						>
							<Link href="/works">Works</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
