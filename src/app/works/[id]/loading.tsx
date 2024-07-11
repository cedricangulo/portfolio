import { useMemo } from 'react';

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
		<div className='min-h-screen max-w-[1000px] w-full'>
			<div className='w-full mx-auto my-0 flex flex-col-reverse gap-4 md:gap-12 justify-center lg:flex-row-reverse'>
				<div className='max-w-3xl mx-auto w-full xl:w-2/4 flex flex-col gap-8 items-center overflow-hidden'>
					<div className='min-h-[325px] w-full skeleton [--pulse-delay:500ms]'></div>
					<div className='min-h-[325px] w-full skeleton [--pulse-delay:900ms]'></div>
				</div>
				<div className='max-w-3xl mx-auto w-full xl:w-2/4'>
					<div className='rounded-md w-2/4 h-8 md:h-[36px] skeleton [--pulse-delay:500ms]'></div>
					<div className='rounded-md my-8 h-5 w-1/4 skeleton [--pulse-delay:700ms]'></div>
					{randomWidthElements.map(({ key, widthClass, animationDelay }) => (
						<div
							key={key}
							style={{ animationDelay }}
							className={`rounded-md my-4 h-4 skeleton [--pulse-delay:500ms] ${widthClass}`}
						></div>
					))}
					<div className='mt-16 flex'>
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
						<div className='flex flex-wrap w-2/4'>
							{Array.from({ length: 3 }, (_, i) => {
								return (
									<div
										key={i}
										style={{ animationDelay: `${i * 0.5}s` }}
										className='h-8 w-16 skeleton [--pulse-delay:0ms]'
									></div>
								);
							})}
						</div>
					</div>
					<div className='my-8 flex gap-2 flex-wrap w-3/4'>
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
		</div>
	);
}

export default Loading;
