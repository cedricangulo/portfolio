import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import { TTimeline } from './interface/about';

const timeline: TTimeline = [
	// {
	// 	time: "2024 - Current",
	// 	title: "Sophomore BSIT",
	// 	text: "In my first year, I learned the basics of computing, programming, and networking.",
	// },
	{
		time: '2023 - 2024',
		title: 'Freshmen BSIT',
		text: 'In my first semester, I studied the basics of computing, programming, and networking. During my second semester, I delved into web development basics, which I already familiar with, and continued programming using C++ and networking. I found this easier due to my prior knowledge.',
	},
	{
		time: '2022 - 2023',
		title: 'Grade 12 TVL-ICT',
		text: 'Graduated with honors from Santa Rosa National High School. Focused on ICT, emphasizing web development and programming. Grateful to Mr. Rey Laura, my major subject teacher, for his guidance.',
	},
	{
		time: '2021 - 2022',
		title: 'Grade 11 TVL-ICT',
		text: 'Studied hardware basics online at Zamblaes National High School despite challenges of the online setup.',
	},
	{
		time: '2019 - 2020',
		title: 'Grade 10 ICT',
		text: 'Discovered my passion for computers at Locloc National High School, sparking my interest in information technology.',
	},
];

function Timeline() {
	return (
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
}

export default Timeline;
