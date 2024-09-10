import { Metadata } from "next"
import { lexend } from "@/lib/fonts"

export const metadata: Metadata = { title: "About" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="main-wrapper">
			<div className="header-wrapper">
				<h1 className={`${lexend.className} text-foreground header`}>About</h1>
				<p className=" text-muted-foreground subheader">A little bit about me</p>
			</div>
			{children}
		</section>
	)
}
