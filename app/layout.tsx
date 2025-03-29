import "./globals.css"
import type { Metadata } from "next"

import Header from "@/components/shared/header/header"
import Providers from "@/components/shared/theme-provider"
import Footer from "@/components/shared/footer"
import LenisWrapper from "@/components/shared/lenis-wrapper"
import { geistsans } from "@/lib/fonts"

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
			<body className={geistsans.className}>
				<Providers>
					<Header />
					<LenisWrapper>
						<main
							role="main"
							className="w-full px-8 justify-center flex flex-col items-center overflow-x"
						>
							{children}
						</main>
					</LenisWrapper>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
