import "./globals.css";
import type { Metadata } from "next";
// import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header/header";
import LenisWrapper from "@/components/shared/lenis-wrapper";
import { ProgressiveBlur } from "@/components/shared/progressive-blur";
import Providers from "@/components/shared/theme-provider";
import { geistsans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const baseUrl = "https://cdrcangulo.is-a.dev";

export const metadata: Metadata = {
	title: {
		default: "Cedric Angulo",
		template: "Cedric Angulo | %s",
	},
	metadataBase: new URL(baseUrl),
	description:
		"Frontend Developer, 3rd year IT student at NEUST specializing in Web Systems Technology. Based in Nueva Ecija, Philippines.",
	keywords: [
		"frontend developer",
		"web developer",
		"react developer",
		"next.js developer",
		"IT student",
		"NEUST",
		"web systems",
		"typescript",
		"tailwind css",
		"portfolio",
		"cedric angulo",
		"nueva ecija",
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		siteName: "Cedric Angulo Portfolio",
		title: "Cedric Angulo's Portfolio",
		description:
			"Frontend Developer, 3rd year IT student at NEUST specializing in Web Systems Technology. Based in Nueva Ecija, Philippines.",
		images: [
			{
				url: `${baseUrl}/metaimg.jpg`,
				width: 1200,
				height: 630,
				alt: "Cedric Angulo Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cedric Angulo's Portfolio",
		description:
			"Frontend Developer, 3rd year IT student at NEUST specializing in Web Systems Technology.",
		images: [`${baseUrl}/metaimg.jpg`],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: baseUrl,
	},
};

type Props = {
	children: React.ReactNode;
};

const portfolioSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Cedric Angulo",
	url: baseUrl,
	image: `${baseUrl}/metaimg.jpg`,
	description:
		"Frontend Developer, 3rd year IT student at NEUST specializing in Web Systems Technology. Based in Nueva Ecija, Philippines.",
	jobTitle: "Frontend Developer",
	location: {
		"@type": "City",
		name: "Nueva Ecija",
		addressCountry: "PH",
	},
	sameAs: [
		"https://github.com/cedricangulo",
		"https://linkedin.com/in/cedric-angulo",
	],
	worksFor: {
		"@type": "Organization",
		name: "NEUST",
		url: "https://neust.edu.ph",
	},
	knowsAbout: [
		"React",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"Frontend Development",
		"Web Development",
		"Web Systems",
	],
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
				/>
			</head>
			<body className={cn("relative antialiased", geistsans.className)}>
				<Providers>
					<Header />
					<LenisWrapper>
						<main className="w-full px-4 md:px-8 justify-center flex flex-col items-center overflow-x">
							{children}
						</main>
					</LenisWrapper>
					<ProgressiveBlur
						title="Top Blur"
						className="fixed -top-px left-0 w-full h-30 z-20"
						direction="top"
						blurIntensity={1}
					/>
					<ProgressiveBlur
						className="fixed -bottom-px left-0 w-full h-30 z-20"
						direction="bottom"
						blurIntensity={1}
					/>
					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	);
}
