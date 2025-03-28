import React from "react"
import Link from "next/link"
import { MoveLeft } from "lucide-react"

type Prop = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Prop) {
	return (
		<>
			<nav className="max-w-3xl grid place-items-center md:block my-8 animate-fadeIn [--fadeIn-delay:0ms] opacity-0">
				<Link
					href="/works"
					className="text-secondary-foreground back"
					aria-label="Back to works"
				>
					<MoveLeft
						strokeWidth={1.5}
						className="w-6 h-6 align-middle"
					/>
					Back
				</Link>
			</nav>
			{children}
		</>
	)
}
