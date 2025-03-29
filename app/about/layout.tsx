import { Metadata } from "next"
import PageTitle from "@/components/shared/page-title"

export const metadata: Metadata = { title: "About" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="min-h-dvh max-w-[62.5rem] mt-[4.5rem] md:mt-[5.5rem] mb-20 w-full">
			<PageTitle
				title="About"
				subheader="A little bit about me"
			/>
			<div
				role="region"
				aria-label="About content"
			>
				{children}
			</div>
		</section>
	)
}
