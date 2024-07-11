import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import Buttons from './card-buttons';
import { useTransform, motion } from 'framer-motion';
import { TCard } from '@/components/works/interface/card';
import ImageRender from '@/components/shared/image-render';

function Card({ i, l, progress, range, targetScale }: TCard) {
	const container = useRef(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className={`sticky top-[60px] md:top-[120px] flex items-enter justify-center`}
		>
			<motion.div
				style={{ scale, top: `calc(5vh + ${i * 1.5}rem)` }}
				className={cn(
					'relative bg-white dark:bg-[#0a0a0a]',
					'flex lg:flex-row flex-col items-start',
					'w-full min-h-[450px] md:min-h-[0px] mx-auto my-8',
					'rounded-lg shadow-[0 4px 6px #0000000a]',
					'border-2 border-[#ebebeb] dark:border-[#333] overflow-hidden transition-all'
				)}
			>
				<ImageRender
					width={500}
					height={280}
					src={l.src}
					alt={l?.title}
					className='w-full lg:w-2/4'
				/>
				<div className='z-10 p-4 grid gap-4 w-full lg:w-2/4'>
					<div className='w-full gap-4 flex items-start justify-between'>
						<div>
							<h4
								className={`${lexend.className} pri-text font-semibold tracking-wider text-3xl mb-2 leading-7`}
							>
								{l?.title}
							</h4>
							<p className='sec-text text-base'>{l.text}</p>
						</div>
						<Buttons
							l={l}
							i={i}
						/>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{l.tags.map((tag: string, index: number) => {
							return (
								<span
									key={index}
									className={cn(
										'text-xs bg-neutral-100 dark:bg-[#1a1a1a]',
										'text-gray-500 dark:text-gray-400',
										'px-2 py-1 rounded-md transition-all'
									)}
								>
									{tag}
								</span>
							);
						})}
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Card;
