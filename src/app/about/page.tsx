import Image from 'next/image';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import { FeaturedSkills, Highlight, Timeline } from '@/components/about/about';
import AnnButton from '@/components/shared/ui/announcement-btn';

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
