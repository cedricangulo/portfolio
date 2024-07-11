import React from 'react';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type Prop = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Prop) {
	return (
		<>
			<div className='pb-8 animate-fadeIn [--fadeIn-delay:1000ms] opacity-0'>
				<Link
					href='/works'
					className={cn(
						'inline-flex gap-1 hover:text-purple-500 hover:gap-0',
						'sec-text mt-2 text-lg items-center italic transition-all'
					)}
				>
					<MoveLeft
						strokeWidth={1.5}
						className='w-6 h-6 align-middle'
					/>
					Back
				</Link>
			</div>
			{children}
		</>
	);
}
