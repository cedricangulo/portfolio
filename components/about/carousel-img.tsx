import {
	Carousel,
	CarouselMainContainer,
	CarouselThumbsContainer,
	SliderMainItem,
	SliderThumbItem,
} from "../ui/carousel"
import ImageRender from "../shared/image-render"

const Carousell = () => {
	return (
		<Carousel
			orientation="vertical"
			className="flex items-center rounded-lg py-1 bg-card shadow-black/10 shadow-md border-2 border-border"
		>
			<div className="relative basis-3/4 ">
				<CarouselMainContainer className="h-96">
					{Array.from({ length: 15 }).map((_, index) => (
						<SliderMainItem
							key={index}
							className="flex items-center justify-center h-52 rounded-md"
						>
							<ImageRender
								src={`/images/photography/${index + 1}.jpg`}
								alt={`${index}`}
								width={384}
								height={384}
								className="rounded-md"
							/>
						</SliderMainItem>
					))}
				</CarouselMainContainer>
			</div>
			<CarouselThumbsContainer className="rounded-md h-96 basis-1/4">
				{Array.from({ length: 15 }).map((_, index) => (
					<SliderThumbItem
						key={index}
						index={index}
						className="rounded-md bg-transparent"
					>
						<span className="flex items-center justify-center h-full w-full rounded-md cursor-pointer">
							<ImageRender
								src={`/images/photography/${index + 1}.jpg`}
								alt={`${index}`}
								width={384}
								height={384}
								className="rounded-md"
							/>
						</span>
					</SliderThumbItem>
				))}
			</CarouselThumbsContainer>
		</Carousel>
	)
}

export default Carousell
