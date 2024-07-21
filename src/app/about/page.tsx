import Image from 'next/image';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import Timeline from '@/components/about/timeline';
import Highlight from '@/components/about/highlight';
import FeaturedSkills from '@/components/about/skills';

export default function AboutPage() {
	return (
		<>
			<div
				className={cn(
					'w-full mx-auto md:py-0 my-16 lg:my-4',
					'animate-fadeIn [--fadeIn-delay:500ms] opacity-0',
					'flex items-center justify-center gap-4 flex-col-reverse lg:flex-row'
				)}
			>
				<div className='flex flex-col gap-4 w-full lg:w-3/4'>
					<p className='paragraph sec-text'>
						I’m 19 years old and a second year <Highlight>BSIT student</Highlight>. Finding out that
						websites are made with <Highlight>HTML</Highlight> and <Highlight>CSS</Highlight> got me
						excited about web development. That made me really interested in computers and
						programming.
					</p>
					<p className='paragraph sec-text'>
						Right now, I’m learning <Highlight>ReactJS</Highlight> and getting better at front-end
						skills with <Highlight>TailwindCSS</Highlight> and <Highlight>NextJS</Highlight>. Before
						my second year starts, I want to get better at <Highlight>C++</Highlight> and be ready
						for my <Highlight>Database</Highlight> subject. Even though I mostly focus on front-end
						development, I also want to try back-end development someday.
					</p>
				</div>
				<div className='lg:w-1/4 flex justify-center items-center xl:mb-0'>
					<Image
						src='/about-img.png'
						alt='me'
						width={250}
						height={250}
						className={cn(
							'rounded-full',
							'brightness-125 grayscale',
							'drop-shadow-[0_0_.75rem_#6b21a850] dark:drop-shadow-[0_0_1rem_#6b21a880]',
							'hover:grayscale-0 hover:scale-105 transition-all duration-500'
						)}
						priority={true}
					/>
				</div>
			</div>
			<div className='flex flex-col items-center gap-4 max-w-6xl w-full mx-auto text-center my-16 animate-fadeIn [--fadeIn-delay:900ms] opacity-0'>
				<h2 className={`${lexend.className} text-3xl uppercase font-medium pri-text`}>
					Featured skills
				</h2>
				<FeaturedSkills />
			</div>
			<div className='flex flex-col gap-4 max-w-xl w-full mx-auto mt-16 animate-fadeIn [--fadeIn-delay:1200ms] opacity-0'>
				<h2 className={`${lexend.className} text-center text-3xl uppercase font-medium pri-text`}>
					Education
				</h2>
				<Timeline />
			</div>
		</>
	);
}
