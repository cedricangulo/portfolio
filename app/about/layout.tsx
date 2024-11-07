import { Metadata } from "next"
import { lexend } from "../fonts/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = { title: "About" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="min-h-dvh max-w-[62.5rem] mt-[4.5rem] md:mt-[5.5rem] mb-20 w-full">
			<div className="lg:min-w-[62.5rem] w-full h-[7.5rem] pt-8 animate-fadeIn [--fadeIn-delay:300ms] opacity-0">
				<h1
					className={cn(
						lexend.className,
						"text-foreground m-auto uppercase text-center lg:text-left text-5xl font-extrabold tracking-tight leading-none"
					)}
				>
					About
				</h1>
				<p className="text-foreground text-center lg:text-left text-xl font-normal">
					A little bit about me
				</p>
			</div>
			{children}
		</section>
	)
}
