import { Metadata } from "next"
import PageTitle from "@/components/shared/page-title"

export const metadata: Metadata = { title: "About" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="main-wrapper">
			{/* <div className="header-wrapper">
				<h1 className={`${lexend.className} text-foreground header`}>About</h1>
				<p className="text-foreground subheader">A little bit about me</p>
			</div> */}
			<PageTitle title="About" subheader="A little bit about me" />
			{children}
		</section>
	)
}
