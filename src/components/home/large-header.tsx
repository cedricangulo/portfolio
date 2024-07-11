import { caveat, lexend } from '@/lib/fonts';
import { cn } from '@/lib/utils';

function LargeHeader() {
	return (
		<h1
			className={cn(
				'animate-slideIn [--slideIn-delay:500ms] opacity-0',
				'pri-text font-extrabold tracking-tight leading-none',
				'text-5xl sm:text-6xl md:text-8xl',
				lexend.className
			)}
		>
			<span className='text-purple-400 dark:text-purple-300'>BSIT</span>{' '}
			<span className='relative transition-all'>
				Student
				<span
					className={cn(
						'absolute -right-4 lg:-right-6 -rotate-12 -top-3',
						'text-purple-400 dark:text-purple-300',
						'font-normal tracking-wider',
						'text-2xl md:text-3xl',
						caveat.className
					)}
				>
					only
				</span>
			</span>
		</h1>
	);
}

export default LargeHeader;
