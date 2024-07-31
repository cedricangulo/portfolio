'use client';
import React, { useState } from 'react';
import { lexend } from '@/lib/fonts';
import { timeline } from './about-meta';

const Timeline = () => {
	const [showAll, setShowAll] = useState(false);

	const toggleShowAll = () => {
		setShowAll(!showAll);
	};

	return (
		<>
			<ol
				className={`relative border-s border-gray-200 dark:border-gray-700 ${
					showAll ? 'max-h-full' : 'max-h-96 overflow-x-hidden'
				}`}
			>
				{timeline.map((list, index) => (
					<li
						key={index}
						className='mb-10 ms-4'
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
			<button
				onClick={toggleShowAll}
				className='mt-4 text-purple-500 dark:text-purple-400 hover:underline focus:outline-none'
			>
				{showAll ? 'Show Less' : 'Show More'}
			</button>
		</>
	);
};

Timeline.displayName = 'Timeline';

export default Timeline;
