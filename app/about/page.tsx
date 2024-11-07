import Image from "next/image"
import { cn } from "@/lib/utils"
import { lexend } from "../fonts/fonts"
import { FeaturedSkills, Highlight as Hl, Timeline } from "@/components/shared/about"
import AnnButton from "@/components/shared/announcement-btn"
import Carousell from "@/components/shared/carousel-img"
import Link from "next/link"

const buttonData = [
	{
		href: "https://cedangulo.vercel.app/",
		iconSrc: "/weblogoD.png",
		alt: "icon",
		from: "#af4edc",
		via: "#00bfff",
		to: "#af4edc",
	},
	{
		href: "https://bryangulo.vercel.app/",
		iconSrc: "/weblogo.png",
		alt: "icon",
		from: "#ff6224",
		via: "#f09819",
		to: "#ff6224",
	},
	{
		href: "https://cedbry.vercel.app/",
		iconSrc: "/me-icon.png",
		alt: "icon",
		from: "#1a627e",
		via: "#eff6e0",
		to: "#1a627e",
	},
]

export default function AboutPage() {
	return (
		<>
			<div className="w-full mx-auto md:py-0 my-16 lg:my-4 animate-fadeIn [--fadeIn-delay:500ms] opacity-0 flex items-center justify-center gap-4 flex-col-reverse lg:flex-row">
				<div className="flex flex-col gap-4 w-full lg:w-3/4">
					<p className="text-foreground text-base font-normal leading-relaxed">
						I’m 20 years old and a second year <Hl>BSIT student</Hl>. Finding out that websites are
						made with <Hl>HTML</Hl> and <Hl>CSS</Hl> got me excited about web development. That made
						me really interested in computers and programming.
					</p>
					<p className="text-foreground text-base font-normal leading-relaxed">
						Right now, I’m learning <Hl>ReactJS</Hl> and getting better at front-end skills with{" "}
						<Hl>TailwindCSS</Hl> and <Hl>NextJS</Hl>. As a second-year student, I’m putting in more
						effort to learn about <Hl>DSA</Hl> and <Hl>OOP</Hl> while applying my current web
						development knowledge in my <Hl>Web Systems Technology</Hl> subject. Even though I
						mostly focus on front-end development, I also want to try back-end development someday.
					</p>
				</div>
				<div className="lg:w-1/4 flex justify-center items-center xl:mb-0">
					<Image
						src="/about-img.png"
						alt="picture of me"
						width={250}
						height={250}
						className={cn(
							"rounded-full",
							"brightness-125 grayscale",
							"drop-shadow-[0_0_.75rem_#6b21a850] dark:drop-shadow-[0_0_1rem_#6b21a880]",
							"hover:grayscale-0 hover:scale-105 transition-all duration-500"
						)}
						priority={true}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-4 w-full mx-auto mt-16 animate-fadeIn [--fadeIn-delay:800ms] opacity-0">
				<h2 className={`${lexend.className} text-foreground text-3xl font-medium`}>
					My Photography Journey
				</h2>
				<p className="text-foreground text-base font-normal leading-relaxed">
					I tried photography using just my phone in year 2022. At that time, I was living in
					Zambales, but I couldn’t continue it because I didn’t have enough equipment for that hobby
					and I also lacked confidence back then, so my close friends and my relatives were the only
					subjects in my pictures. I even have a Facebook page{" "}
					<Link
						href="https://www.facebook.com/capicturessS?mibextid=ZbWKwL"
						target="_blank"
						className="text-primary font-semibold hover:text-primary/80 underline underline-offset-2 decoration-1 transition-color"
					>
						CA Pictures
					</Link>
					, but it has been inactive for a long time.
				</p>
				<div className="max-w-xl mx-auto mt-8">
					<Carousell />
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 max-w-6xl w-full mx-auto text-center my-16 animate-fadeIn [--fadeIn-delay:900ms] opacity-0">
				<h2 className={`${lexend.className} text-foreground text-3xl font-medium`}>
					Featured skills
				</h2>
				<FeaturedSkills />
			</div>
			<div className="flex flex-col gap-4 max-w-xl w-full mx-auto mt-16 animate-fadeIn [--fadeIn-delay:1200ms] opacity-0">
				<h2 className={`${lexend.className} text-foreground text-center text-3xl font-medium`}>
					Education
				</h2>
				<Timeline />
			</div>
			<div className="max-w-xl w-full mx-auto mt-16">
				<h2 className={`${lexend.className} text-foreground text-center text-3xl font-medium`}>
					My Old Portfolios
				</h2>
				<div className="flex items-center flex-col md:flex-row gap-0 md:gap-4 my-8">
					{buttonData.map((b, index) => (
						<AnnButton
							key={index}
							className="my-4 md:my-0"
							href={b.href}
							icon={
								<Image
									src={b.iconSrc}
									alt={b.alt}
									width={20}
									height={20}
								/>
							}
							text="@cdrcangulo"
							from={b.from}
							via={b.via}
							to={b.to}
						/>
					))}
				</div>
			</div>
		</>
	)
}
