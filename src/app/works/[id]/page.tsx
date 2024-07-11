import ImageRender from '@/components/shared/image-render';
import { notFound } from 'next/navigation';
import { Info } from 'lucide-react';
import { lexend } from '@/lib/fonts';
import { worksMeta } from '../data/worksdetails';
import { IDynamicParam } from '../../../components/works/interface/dynamic-param';
import ColorScheme from '@/components/works/color-scheme';
import LangList from '@/components/works/lang-list';

export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
}

function worksDetails({ params }: IDynamicParam) {
	const { id } = params;
	const work = worksMeta.find((work) => work.id.toString() === id);

	!work && notFound();

	return (
		<section className='min-h-screen w-full animate-fadeIn [--fadeIn-delay:0ms] opacity-0'>
			<div className='w-full mx-auto my-0 flex flex-col-reverse gap-4 md:gap-12 justify-center lg:flex-row-reverse'>
				<div className='mx-auto w-full xl:w-2/4 flex flex-col gap-8 items-center overflow-hidden'>
					{work?.images.map((image, index) => {
						return (
							<ImageRender
								key={index}
								src={image.src}
								alt={image.alt}
								className='w-dvw shadow-md'
								width={570}
								height={325}
							/>
						);
					})}
					{work?.id === 5 && (
						<span className='inline-flex items-center gap-2 text-sm p-4 rounded-lg bg-yellow-300/50 border-yellow-500 text-yellow-800 dark:bg-yellow-950 border dark:border-yellow-500 dark:text-yellow-50'>
							<Info
								strokeWidth={1.5}
								className='w-6 h-6 text-yellow-600 dark:text-yellow-200'
							/>
							The data listed above are merely sample data from internet.
						</span>
					)}
				</div>
				<div className='mx-auto w-full xl:w-2/4'>
					<h2 className={`${lexend.className} text-left text-3xl mb-8 font-medium pri-text`}>
						{work?.title}
					</h2>
					{work?.paragraphs.map((paragraph, index) => {
						return (
							<p
								key={index}
								className='paragraph my-4 sec-text'
							>
								{paragraph}
							</p>
						);
					})}
					<div className='mt-16 flex'>
						<div className='w-2/4'>
							{work?.fontFamily.map((f, index) => {
								return (
									<p
										key={index}
										className={`${f.fonts.className} text-2xl pri-text`}
									>
										{f.text}
									</p>
								);
							})}
						</div>
						<div className='flex flex-wrap w-2/4'>
							{work?.colorScheme.map((color, index) => {
								return (
									<ColorScheme
										key={index}
										content={color.content}
										color={color.color}
										textColor={color.textColor}
									/>
								);
							})}
						</div>
					</div>
					<div className='my-8 flex gap-2 flex-wrap w-3/4'>
						<LangList lang={work?.langs} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default worksDetails;
