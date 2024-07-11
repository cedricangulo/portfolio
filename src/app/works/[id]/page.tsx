import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { notFound } from 'next/navigation';
import { lexend, playfair } from '@/lib/fonts';
import { worksMeta } from '../data/worksdetails';
import LangList from '@/components/works/lang-list';
import ColorScheme from '@/components/works/color-scheme';
import ImageRender from '@/components/shared/image-render';
import { IDynamicParam } from '../../../components/works/interface/dynamic-param';

export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
}

function worksDetails({ params }: IDynamicParam) {
	const { id } = params;
	const work = worksMeta.find((work) => work.id.toString() === id);

	!work && notFound();

	return (
		<section
			className={cn(
				'my-0 mx-auto',
				'min-h-screen w-full',
				'flex flex-col lg:flex-row gap-16 md:gap-12 justify-center',
				'animate-fadeIn [--fadeIn-delay:0ms] opacity-0'
			)}
		>
			<div className='mx-auto w-full xl:w-2/4'>
				<h2 className={`${lexend.className} text-left text-3xl mb-8 font-medium pri-text`}>
					{work?.title}
				</h2>
				{work?.paragraphs.map((paragraph, index) => (
					<p
						key={index}
						className='paragraph my-4 sec-text'
					>
						{paragraph}
					</p>
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
							{work?.fontFamily.map((f, index) => (
								<p
									key={index}
									className={`${f.fonts.className} text-2xl pri-text`}
								>
									{f.text}
								</p>
							))}
						</div>
						<div className='flex flex-nowrap w-full sm:w-2/4'>
							{work?.colorScheme.map((color, index) => (
								<ColorScheme
									key={index}
									content={color.content}
									color={color.color}
									textColor={color.textColor}
								/>
							))}
						</div>
					</div>
					<div className='mt-8 flex gap-2 flex-wrap w-full sm:w-3/4'>
						<LangList lang={work?.langs} />
					</div>
				</div>
			</div>
			<div className='mx-auto w-full xl:w-2/4 flex flex-col gap-8 items-center overflow-hidden'>
				{work?.images.map((image, index) => (
					<figure className='my-4 text-center'>
						<ImageRender
							key={index}
							src={image.src}
							alt={image.alt}
							className='w-dvw shadow-md'
							width={570}
							height={325}
						/>
						<figcaption className={cn('sec-text mt-4 text-sm italic', playfair.className)}>
							{image.alt}
						</figcaption>
					</figure>
				))}
				{work?.id === 5 && (
					<span
						className={cn(
							'inline-flex items-center gap-2',
							'text-sm text-yellow-800 dark:text-yellow-50',
							'border border-yellow-500 dark:border-yellow-500',
							'bg-yellow-300/50   dark:bg-yellow-950',
							'p-4 rounded-lg'
						)}
					>
						<Info
							strokeWidth={1.5}
							className='w-6 h-6 text-yellow-600 dark:text-yellow-200'
						/>
						The data listed above are merely sample data from internet.
					</span>
				)}
			</div>
		</section>
	);
}

export default worksDetails;
