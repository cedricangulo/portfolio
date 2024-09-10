import { useRef } from 'react';
import { lexend } from '@/lib/fonts';
import Buttons from './card-buttons';
import { useTransform, motion } from 'framer-motion';
import { TCard } from '@/components/shared/interface/card';
import ImageRender from './image-render';
import { Badge } from '../ui/badge';

function Card({ i, l, progress, range, targetScale }: TCard) {
	const container = useRef(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className={`max-w-[34rem] lg:max-w-full mx-auto sticky top-[10%] flex items-enter justify-center`}
		>
			<motion.div
				style={{ scale, top: `calc(5vh + ${i * 1.5}rem)` }}
				className='card'
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
							<h4 className={`${lexend.className} text-foreground font-medium text-3xl mb-2 leading-7`}>
								{l?.title}
							</h4>
							<p className='text-muted-foreground text-base'>{l.text}</p>
						</div>
						<Buttons
							l={l}
							i={i}
						/>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{l.tags.map((tag: string, index: number) => {
							return (
								<Badge
									key={index}
									variant='outline'
									className='text-muted-foreground'
								>
									{tag}
								</Badge>
								// <span
								// 	key={index}
								// 	className='badge'
								// >
								// 	{tag}
								// </span>
							);
						})}
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Card;
