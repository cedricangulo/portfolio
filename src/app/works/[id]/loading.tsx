import { useMemo } from 'react';
import { cn } from '@/lib/utils';

const getRandomWidthClass = () => {
	const widthClasses = ['w-2/4', 'w-3/4', 'w-4/5', 'w-full'];
	return widthClasses[Math.floor(Math.random() * widthClasses.length)];
};

function Loading() {
	interface RandomWidthElement {
		key: number;
		widthClass: string;
		animationDelay: string;
	}

	const randomWidthElements: RandomWidthElement[] = useMemo(() => {
		return Array.from({ length: 5 }, (_, i) => ({
			key: i,
			widthClass: getRandomWidthClass(),
			animationDelay: `${i * 0.5}s`,
		}));
	}, []);

	return (
		<div className='min-h-screen max-w-[62.5rem] w-full'>
			<div
				className={cn(
					'my-0 mx-auto',
					'min-h-screen w-full',
					'flex flex-col lg:flex-row gap-16 md:gap-12 justify-center',
					'animate-fadeIn [--fadeIn-delay:0ms] opacity-0'
				)}
			>
				<div className='mx-auto w-full xl:w-2/4'>
					<div className='rounded-md w-2/4 h-8 md:h-[2.25rem] skeleton [--pulse-delay:500ms]'></div>
					<div className='rounded-md my-8 h-5 w-1/4 skeleton [--pulse-delay:700ms]'></div>
					{randomWidthElements.map(({ key, widthClass, animationDelay }) => (
						<div
							key={key}
							style={{ animationDelay }}
							className={`rounded-md my-4 h-4 skeleton [--pulse-delay:500ms] ${widthClass}`}
						></div>
					))}
					<div
						className={cn(
							'rounded-lg shadow-[0 4px 6px #0000000a]',
							'mt-16 p-4 bg-white dark:bg-neutral-950',
							'border-2 border-[#ebebeb] dark:border-[#333] overflow-hidden transition-all'
						)}
					>
						<div className='flex flex-col sm:flex-row gap-8 sm:gap-4'>
							<div className='w-2/4'>
								{Array.from({ length: 3 }, (_, i) => {
									return (
										<div
											key={i}
											style={{ animationDelay: `${i * 0.5}s` }}
											className='rounded-md h-6 w-28 my-2 skeleton [--pulse-delay:0ms]'
										></div>
									);
								})}
							</div>
							<div className='flex flex-nowrap w-full sm:w-2/4'>
								{Array.from({ length: 3 }, (_, i) => {
									return (
										<div
											key={i}
											style={{ animationDelay: `${i * 0.5}s` }}
											className='h-8 w-full skeleton [--pulse-delay:0ms]'
										></div>
									);
								})}
							</div>
						</div>
						<div className='mt-8 flex gap-2 flex-wrap w-full sm:w-3/4'>
							<div className='rounded-lg h-1 w-full skeleton [--pulse-delay:500ms]'></div>
							{Array.from({ length: 3 }, (_, i) => {
								return (
									<li
										key={i}
										className='inline'
									>
										<div className='inline-flex items-center mr-3 h-3.5'>
											<svg
												height='16'
												viewBox='0 0 16 16'
												width='16'
												className='fill-gray-300/60 dark:fill-gray-500/25 animate-pulse m-1'
											>
												<path d='M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z'></path>
											</svg>
											<span
												style={{ animationDelay: `${i * 0.5}s` }}
												className='rounded-md h-3 w-14 mr-1 skeleton [--pulse-delay:700ms]'
											></span>
											<span
												style={{ animationDelay: `${i * 0.5}s` }}
												className='rounded-md h-3 w-6 skeleton [--pulse-delay:700ms]'
											></span>
										</div>
									</li>
								);
							})}
						</div>
					</div>
				</div>
				<div className='mx-auto w-full xl:w-2/4 flex flex-col gap-8 items-center overflow-hidden'>
					<div className='min-h-[20.313rem] my-4 w-full skeleton [--pulse-delay:500ms]'></div>
					<div className='min-h-[20.313rem] my-4 w-full skeleton [--pulse-delay:900ms]'></div>
				</div>
			</div>
		</div>
	);
}

export default Loading;
