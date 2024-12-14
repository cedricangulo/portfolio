import React from "react"
import Link from "next/link"
import { MoveLeft } from "lucide-react"

type Prop = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Prop) {
	return (
		<>
			<div className="max-w-3xl pb-8 animate-fadeIn [--fadeIn-delay:2000ms] opacity-0">
				<Link
					href="/works"
					className="text-secondary-foreground back"
				>
					<MoveLeft
						strokeWidth={1.5}
						className="w-6 h-6 align-middle"
					/>
					Back
				</Link>
			</div>
			{children}
		</>
	)
}
