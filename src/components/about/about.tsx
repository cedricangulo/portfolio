import React from 'react';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import { GeistMono } from 'geist/font/mono';
import { Skills, timeline } from './about-meta';

const Highlight = ({ children }: { children: React.ReactNode }) => (
	<span className={`${GeistMono.className} highlight`}>{children}</span>
);
Highlight.displayName = 'Highlight';

const FeaturedSkills = () => (
	<div className='flex max-w-3xl gap-4 flex-wrap items-center justify-center'>
		{Skills.map((s, index: number) => {
			return (
				<div
					key={index}
					className='flex gap-2 cursor-pointer tag py-2 px-4 pri-text bg-purple-300/20 dark:bg-purple-300/30'
				>
					<svg
						style={{ fill: s.fill }}
						role='img'
						className='size-4'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<span className='sr-only'>{s.text}</span>
						<path d={`${s.icon}`} />
					</svg>
					{s.text}
				</div>
			);
		})}
	</div>
);
FeaturedSkills.displayName = 'FeaturedSkills';

const Timeline = () => (
	<ol className='relative border-s-2 border-purple-400/50'>
		{timeline.map((list, index) => (
			<li
				className='mb-10 ms-4'
				key={index}
			>
				<div className='absolute w-3 h-3 rounded-full mt-1.5 -start-[.45rem] bg-purple-300 dark:bg-purple-500'></div>
				<time className={cn(lexend.className, 'mb-1 text-sm font-normal leading-none accent100')}>
					{list.time}
				</time>
				<h3 className={cn(lexend.className, 'pri-text text-lg font-medium')}>{list.title}</h3>
				<p className='mb-4 paragraph sec-text'>{list.text}</p>
			</li>
		))}
	</ol>
);
Timeline.displayName = 'Timeline';

export { Highlight, FeaturedSkills, Timeline };
