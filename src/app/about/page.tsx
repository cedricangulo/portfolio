import Image from 'next/image';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import { FeaturedSkills, Highlight, Timeline } from '@/components/about/about';
import AnnButton from '@/components/shared/ui/announcement-btn';
import CarouselExample from '@/components/about/carousel-img';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<>
			<div className='main-container'>
				<div className='paragraph-wrapper'>
					<p className='paragraph sec-text'>
						I’m 19 years old and a second year <Highlight>BSIT student</Highlight>. Finding out that
						websites are made with <Highlight>HTML</Highlight> and <Highlight>CSS</Highlight> got me
						excited about web development. That made me really interested in computers and
						programming.
					</p>
					<p className='paragraph sec-text'>
						Right now, I’m learning <Highlight>ReactJS</Highlight> and getting better at front-end
						skills with <Highlight>TailwindCSS</Highlight> and <Highlight>NextJS</Highlight>. Before
						my second year starts, I want to get better at <Highlight>C++</Highlight> and learn more
						about <Highlight>DSA</Highlight> and <Highlight>OOP</Highlight> subject. Even though I
						mostly focus on front-end development, I also want to try back-end development someday.
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
			<div className='flex flex-col gap-4 w-full mx-auto mt-16 animate-fadeIn [--fadeIn-delay:800ms] opacity-0'>
				<h2 className={`${lexend.className} featured-header pri-text`}>My Photography Journey</h2>
				<p className='paragraph sec-text'>
					I tried photography using just my phone in year 2022, but I couldn’t continue it because I
					didn’t have enough equipment for that hobby and I also lacked confidence back then, so my
					close friends and my relatives were the only subjects in my pictures. I even have a
					Facebook page{' '}
					<Link
						href='https://www.facebook.com/capicturessS?mibextid=ZbWKwL'
						target='_blank'
						className='accent200 hover:text-purple-600 dark:hover:text-purple-400 underline underline-offset-2 decoration-1 transition-all'
					>
						CA Pictures
					</Link>
					, but it has been inactive for a long time.
				</p>
				<CarouselExample />
			</div>
			<div className='featured-wrapper'>
				<h2 className={`${lexend.className} featured-header pri-text`}>Featured skills</h2>
				<FeaturedSkills />
			</div>
			<div className='timeline-wrapper'>
				<h2 className={`${lexend.className} timeline-header pri-text`}>Education</h2>
				<Timeline />
			</div>
			<div className='max-w-xl w-full mx-auto mt-16'>
				<h2 className={`${lexend.className} oldport-header pri-text`}>My old portfolios</h2>
				<div className='flex items-center flex-col md:flex-row gap-0 md:gap-4 my-8'>
					<AnnButton
						href='https://cedbry.vercel.app/'
						icon={
							<Image
								src='/me-icon.png'
								alt='icon'
								width={20}
								height={20}
							/>
						}
						text='@cdrcangulo'
						from='#1a627e'
						via='#eff6e0'
						to='#1a627e'
					/>
					<AnnButton
						href='https://bryanangulo.vercel.app/'
						icon={
							<Image
								src='/weblogo.png'
								alt='icon'
								width={20}
								height={20}
							/>
						}
						text='@cdrcangulo'
						from='#ff6224'
						via='#f09819'
						to='#ff6224'
					/>
					<AnnButton
						href='https://cedangulo.vercel.app/'
						icon={
							<Image
								src='/weblogoD.png'
								alt='icon'
								width={20}
								height={20}
							/>
						}
						text='@cdrcangulo'
						from='#af4edc'
						via='#00bfff'
						to='#af4edc'
					/>
				</div>
			</div>
		</>
	);
}
