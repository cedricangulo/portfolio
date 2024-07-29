import {
	Carousel,
	CarouselMainContainer,
	CarouselThumbsContainer,
	SliderMainItem,
	SliderThumbItem,
} from '../shared/ui/carousel';
import ImageRender from '../shared/image-render';

const CarouselExample = () => {
	return (
		<Carousel
			orientation='vertical'
			className='flex items-center gap-2'
		>
			<div className='relative basis-3/4 w-fit max-w-96'>
				<CarouselMainContainer className='max-h-96 max-w-96'>
					{Array.from({ length: 15 }).map((_, index) => (
						<SliderMainItem
							key={index}
							className='border border-neutral-400 dark:border-neutral-800 flex items-center justify-center max-h-96 max-w-96 rounded-md'
						>
							<ImageRender
								src={`/images/photography/${index + 1}.jpg`}
								alt=''
								width={384}
								height={384}
								className='rounded-md'
							/>
						</SliderMainItem>
					))}
				</CarouselMainContainer>
			</div>
			<CarouselThumbsContainer className='h-96 basis-1/4'>
				{Array.from({ length: 15 }).map((_, index) => (
					<SliderThumbItem
						key={index}
						index={index}
						className='border border-neutral-400 dark:border-neutral-800 rounded-md bg-transparent'
					>
						<ImageRender
							src={`/images/photography/${index + 1}.jpg`}
							alt={`${index}`}
							width={384}
							height={384}
							className='rounded-md'
						/>
					</SliderThumbItem>
				))}
			</CarouselThumbsContainer>
		</Carousel>
	);
};

export default CarouselExample;
