import "./globals.css"
import type { Metadata } from "next"

import Header from "@/components/shared/header/header"
import Providers from "@/components/shared/theme-provider"
import Footer from "@/components/shared/footer"
import LenisWrapper from "@/components/shared/lenis-wrapper"
import { geistsans } from "@/lib/fonts"
import { ProgressiveBlur } from "@/components/shared/progressive-blur"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
	title: {
		default: "Cedric Angulo",
		template: "Cedric Angulo | %s",
	},
	metadataBase: new URL("https://cdrcangulo.vercel.app"),
	description:
		"Aspiring web developer and a second year student at NEUST, based in Nueva Ecija, Philippines.",
	openGraph: {
		title: "Cedric Angulo’s Portfolio",
		description:
			"Aspiring web developer and a second year student at NEUST, based in Nueva Ecija, Philippines.",
		images: [`https://cdrcangulo.vercel.app/metaimg.jpg`],
	},
}

type Props = {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={cn("relative antialiased", geistsans.className)}>
				<Providers>
					<Header />
					<LenisWrapper>
						<main
							role="main"
							className="w-full px-4 md:px-8 justify-center flex flex-col items-center overflow-x"
						>
							{children}
						</main>
					</LenisWrapper>
					<ProgressiveBlur
						className="sticky bottom-[-1px] w-full h-30 z-20"
						direction="bottom"
						blurIntensity={1}
					/>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
