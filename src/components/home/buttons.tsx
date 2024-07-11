import { cn } from '@/lib/utils';
import Link from 'next/link';

function buttons() {
	return (
		<div className='animate-slideIn [--slideIn-delay:900ms] opacity-0 inline-flex gap-3 mt-2'>
			<Link
				href='mailto:cdrcangulo@gmail.com'
				target='_blank'
				className={cn(
					'hover:scale-[1.015] dark:active:text-gray-300 active:scale-[.98] rounded-lg transition-all duration-[300ms]',
					'text-gray-600 dark:text-gray-200 hover:bg-purple-200/50 dark:hover:bg-purple-900/50',
					'border border-gray-800/30 dark:border-gray-700',
					'text-sm sm:text-base tracking-wider',
					'py-2 px-3'
				)}
			>
				cdrcangulo@gmail.com
			</Link>
			<Link
				href='/works'
				className={cn(
					'bg-purple-500 dark:bg-purple-500 hover:bg-purple-500 dark:hover:bg-purple-700 active:bg-purple-700 dark:active:bg-purple-800',
					'hover:scale-[1.015] dark:active:text-purple-200 active:scale-[.98] rounded-lg transition-all duration-[300ms]',
					'text-xs sm:text-sm tracking-wider grid place-items-center',
					'text-purple-50',
					'py-2 px-3'
				)}
			>
				Works
			</Link>
		</div>
	);
}

export default buttons;
