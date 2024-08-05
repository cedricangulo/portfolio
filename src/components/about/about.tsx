import React from 'react';
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
					className='skills-badge pri-text'
				>
					<svg
						style={{ fill: s.fill }}
						role='img'
						className='size-4'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
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
	<ol className='relative border-s border-gray-200 dark:border-gray-700'>
		{timeline.map((list, index) => (
			<li
				key={index}
				className='mb-6 ms-4'
			>
				<div className='absolute w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900'></div>
				<time
					className={`${lexend.className} mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500`}
				>
					{list.time}
				</time>
				<h3 className={`${lexend.className} text-lg font-semibold pri-text`}>{list.title}</h3>
				<p className='text-base font-normal sec-text'>{list.text}</p>
			</li>
		))}
	</ol>
);
Timeline.displayName = 'Timeline';

export { Highlight, FeaturedSkills, Timeline };
