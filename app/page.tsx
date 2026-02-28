import {
	ParagraphWrapper,
	PhotographySection,
	Profile,
	TechStack,
	TimelineContainer,
} from "@/components/about";
import { Contents, GridBackground } from "@/components/home";
import { Card } from "@/components/works/card";
import { lexend } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { WorkList } from "./works/data/workslist";

export default function HomePage() {
	return (
		<div className="w-full flex flex-col items-center">
			<section
				id="home"
				className="relative h-dvh flex items-center justify-between max-w-250 w-full scroll-mt-28"
			>
				<GridBackground />
				<Contents />
			</section>

			<section
				id="works"
				className="relative min-h-dvh mt-18 md:mt-22 w-full md:max-w-250 mb-[40%] md:mb-[20%] scroll-mt-28"
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
				<div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-8">
					{WorkList.map((work, index) => {
						return (
							<Card
								key={work.title}
								index={index}
								src={work.src}
								title={work.title}
								text={work.text}
							/>
						);
					})}
				</div>
			</section>

			<section
				id="about"
				className="min-h-dvh max-w-250 mt-18 md:mt-22 mb-20 w-full scroll-mt-28"
			>
				<div className="w-full h-30 pt-8">
					<h2
						className={cn(
							"text-foreground text-center lg:text-left m-auto text-5xl font-extrabold tracking-tight leading-none uppercase",
							lexend.className
						)}
					>
						About
					</h2>
					<p className="text-foreground text-center lg:text-left text-xl font-normal">
						A little bit about me
					</p>
				</div>
				<div className="w-full mx-auto md:py-0 my-16 lg:my-4 flex items-center lg:items-start justify-center gap-16 flex-col-reverse lg:flex-row">
					<ParagraphWrapper />
					<Profile />
				</div>
				<PhotographySection />
				<TechStack />
				<TimelineContainer />
			</section>
		</div>
	);
}
