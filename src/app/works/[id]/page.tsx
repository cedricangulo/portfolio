import { Info } from 'lucide-react';
import { notFound } from 'next/navigation';
import { lexend, playfair } from '@/lib/fonts';
import { worksMeta } from '../data/worksdetails';
import LangList from '@/components/works/lang-list';
import ColorScheme from '@/components/works/color-scheme';
import ImageRender from '@/components/shared/image-render';
import AnnButton from '@/components/shared/ui/announcement-btn';
import { IDynamicParam } from '../../../components/works/interface/dynamic-param';

export function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }];
}

function worksDetails({ params }: IDynamicParam) {
	const { id } = params;
	const work = worksMeta.find((work) => work.id.toString() === id);

	!work && notFound();

	return (
		<div className='details-container'>
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
				<div className='details-wrapper'>
					{work?.id === 2 && (
						<AnnButton
							href='https://technodyssey.vercel.app/'
							icon='🎉'
							text='Now Available in Mobile'
							from='#ffaa40'
							via='#9c40ff'
							to='#ffaa40'
						/>
					)}
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
						<div className='colorscheme-wrapper'>
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
					<div className='lang-wrapper'>
						<LangList lang={work?.langs} />
					</div>
				</div>
			</div>
			<div className='image-wrapper'>
				{work?.images.map((image, index) => (
					<figure
						key={index}
						className='my-4 text-center'
					>
						<ImageRender
							src={image.src}
							alt={image.alt}
							className='w-auto h-auto shadow-md'
							width={570}
							height={325}
						/>
						<figcaption className={`${playfair.className} fig-caption sec-text`}>
							{image.alt}
						</figcaption>
					</figure>
				))}
				{work?.id === 5 && (
					<span className='note'>
						<Info
							strokeWidth={1.5}
							className='w-6 h-6 text-yellow-600 dark:text-yellow-200'
						/>
						The data listed above are merely sample data from internet.
					</span>
				)}
			</div>
		</div>
	);
}

export default worksDetails;
