import { cn } from '@/lib/utils';

export default function WorksLoading() {
	return (
		<div className='min-h-screen w-full'>
			<div
				className={cn(
					'w-full h-full',
					'absolute bottom-0 right-0 z-20 transition-background',
					'bg-gradient-to-t from-neutral-50 to-transparent dark:from-black'
				)}
			></div>
			<div className='sticky top-[60px] md:top-[120px] flex items-enter justify-center'>
				<div
					className={cn(
						'flex lg:flex-row flex-col items-start relative',
						'border-2 border-[#ebebeb] dark:border-[#333]',
						'bg-white dark:bg-[#0a0a0a] shadow-[0 4px 6px #0000000a] transition-all',
						'min-h-[450px] md:min-h-[0px] w-full overflow-hidden mx-auto my-14 rounded-lg'
					)}
				>
					<div className='h-[280px] w-full skeleton [--pulse-delay:300ms]'></div>
					<div className='z-10 p-4 grid gap-4 w-full'>
						<div className='w-full gap-4 flex items-start justify-between'>
							<div className='w-3/4'>
								<div className='mb-3 h-8 w-32 rounded-md skeleton [--pulse-delay:500ms]'></div>
								<div className='my-2 h-4 w-4/5 rounded-md skeleton [--pulse-delay:700ms]'></div>
								<div className='my-2 h-4 w-2/4 rounded-md skeleton [--pulse-delay:900ms]'></div>
							</div>
							<div className='flex items-center gap-3'>
								{Array.from({ length: 3 }, (_, i) => (
									<div
										key={i}
										className='size-[20px] rounded-full skeleton [--pulse-delay:500ms]'
									></div>
								))}
							</div>
						</div>
						<div className='flex gap-2 flex-wrap'>
							<span className='w-20 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-32 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-20 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-20 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-32 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-32 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-20 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
						</div>
					</div>
				</div>
			</div>
			<div className='sticky top-[60px] md:top-[120px] flex items-enter justify-center'>
				<div
					className={cn(
						'flex lg:flex-row flex-col items-start relative',
						'border-2 border-[#ebebeb] dark:border-[#333]',
						'bg-white dark:bg-[#0a0a0a] shadow-[0 4px 6px #0000000a] transition-all',
						'min-h-[450px] md:min-h-[0px] w-full overflow-hidden mx-auto my-14 rounded-lg'
					)}
				>
					<div className='min-h-[270px] w-full skeleton [--pulse-delay:300ms]'></div>
					<div className='z-10 p-4 grid gap-4 w-full'>
						<div className='w-full gap-4 flex items-start justify-between'>
							<div className='w-3/4'>
								<div className='mb-3 h-8 w-32 rounded-md skeleton [--pulse-delay:500ms]'></div>
								<div className='my-2 h-4 w-4/5 rounded-md skeleton [--pulse-delay:700ms]'></div>
								<div className='my-2 h-4 w-2/4 rounded-md skeleton [--pulse-delay:900ms]'></div>
							</div>
							<div className='flex items-center gap-3'>
								{Array.from({ length: 2 }, (_, i) => (
									<div
										key={i}
										className='size-[20px] rounded-full skeleton [--pulse-delay:500ms]'
									></div>
								))}
							</div>
						</div>
						<div className='flex gap-2 flex-wrap'>
							<span className='w-20 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-16 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-32 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
							<span className='w-14 h-[16px] rounded-lg skeleton [--pulse-delay:1100ms]'></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
