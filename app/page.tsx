import {
	ParagraphWrapper,
	// PhotographySection,
	Profile,
	TechStack,
	// TimelineContainer,
} from "@/components/about";
import { ContactForm, Contents, GridBackground } from "@/components/home";
import { Card } from "@/components/works/card";
import { lexend } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { WorkList } from "./works/data/workslist";

export default function HomePage() {
	return (
		<div className="w-full flex flex-col items-center mb-32">
			<section
				id="home"
				className="relative flex items-center justify-between max-w-250 w-full scroll-mt-28"
			>
				<GridBackground />
				<Contents />
			</section>

			<section
				id="works"
				className="mt-18 md:mt-22 w-full md:max-w-250 scroll-mt-28"
			>
				<div className="w-full h-30 pt-8">
					<h2
						className={cn(
							"text-foreground text-center lg:text-left m-auto text-5xl font-extrabold tracking-tight leading-none uppercase",
							lexend.className
						)}
					>
						Works
					</h2>
					<p className="text-foreground text-center lg:text-left text-xl font-normal">
						These are the projects I built
					</p>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					{WorkList.map((work, index) => {
						return (
							<Card
								key={work.title}
								index={index}
								src={work.src}
								slug={work.slug}
								title={work.title}
								text={work.text}
							/>
						);
					})}
				</div>
			</section>

			<section
				id="about"
				className="max-w-250 mt-18 md:mt-22 mb-20 w-full scroll-mt-28"
			>
				<div
					className={cn(
						"w-full mx-auto my-16 flex items-center justify-center gap-16 flex-col-reverse",
						"md:py-0",
						"lg:my-4 lg:items-start lg:flex-row"
					)}
				>
					<div className="">
						<h2
							className={cn(
								"text-foreground text-center text-5xl font-extrabold tracking-tight leading-none uppercase",
								"m-auto",
								"lg:text-left",
								lexend.className
							)}
						>
							About
						</h2>
						<p className="text-foreground text-center lg:text-left text-xl font-normal mb-8">
							A little bit about me
						</p>
						<ParagraphWrapper />
					</div>
					<Profile />
				</div>
				{/* <PhotographySection /> */}
				<TechStack />
				{/* <TimelineContainer /> */}
			</section>

			<section
				id="contact"
				className="max-w-250 mt-18 md:mt-22 w-full scroll-mt-28"
			>
				<ContactForm />
			</section>
		</div>
	);
}
