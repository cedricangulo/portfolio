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
			className='flex justify-center items-center gap-2'
		>
			<div className='relative'>
				<CarouselMainContainer className='h-96'>
					{Array.from({ length: 15 }).map((_, index) => (
						<SliderMainItem
							key={index}
							className='border border-muted flex items-center justify-center size-96 rounded-md'
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
						className='rounded-md bg-transparent'
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
