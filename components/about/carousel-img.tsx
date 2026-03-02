import ImageRender from "../shared/image-render";
import {
	Carousel,
	CarouselMainContainer,
	CarouselThumbsContainer,
	SliderMainItem,
	SliderThumbItem,
} from "../ui/carousel";

const imagesUrl = [
	"XLJnqTgGVh2yzFA1BGGpSqIVFghX4lG2mfzHP869YMyEDLJe",
	"XLJnqTgGVh2y9J1NUPhQoCX4LWyvdIFSiZ2Jel5pTt703wYR",
	"XLJnqTgGVh2yxCS6Xo7b6ZuGqAYgJcld1BMXNWR5LK9o8exj",
	"XLJnqTgGVh2yoTShZndvuYCEShkIc7KQRmAGX6UjD5NVePdp",
	"XLJnqTgGVh2yUz0LWyuVykJKLRtwfPhDTQaGnuIdBzNYms2q",
	"XLJnqTgGVh2yusvWZmfKCA2lawgvUodEj8OR1r9WySFB6sq7",
	"XLJnqTgGVh2yu8Yer5fKCA2lawgvUodEj8OR1r9WySFB6sq7",
	"XLJnqTgGVh2yIDaZJqogqDwuQNEpVJTsR9WnlXj0YHZ5Lz1k",
	"XLJnqTgGVh2yzvEZAGpSqIVFghX4lG2mfzHP869YMyEDLJeb",
	"XLJnqTgGVh2yC7E7HOJTSeqlnaW74LRU025I8o3rMx9DvAbG",
	"XLJnqTgGVh2yYTLnqEuDmLAVBbonEQp4dC6fltP1v0sNOTai",
	"XLJnqTgGVh2yqzSGzEMLPtO9GS4Bjg8wDdcUrIqWkCY5emHM",
	"XLJnqTgGVh2yb0jgZl6F61mhrJSYVg35Rt8nUG94vwpEq2Xb",
	"XLJnqTgGVh2y8gyXha2HPbiBv6EgI17KOo5AxDFleTXQ9wRz",
	"XLJnqTgGVh2yG5wlL0TblGkf859dMrs7nYaeICzSigF2TW0h",
];

const Carousell = () => {
	return (
		<Carousel
			orientation="vertical"
			className="flex items-center rounded-lg py-1 bg-card shadow-black/10 shadow-md border-2 border-border"
		>
			<div className="relative basis-3/4 ">
				<CarouselMainContainer className="h-96">
					{imagesUrl.map((imageUrl, index) => (
						<SliderMainItem
							key={imageUrl}
							className="flex items-center justify-center h-52 rounded-md"
						>
							<ImageRender
								src={`https://sow4xmup6y.ufs.sh/f/${imageUrl}`}
								alt={`Carousel image ${index + 1}`}
								width={384}
								height={384}
								className="rounded-md"
							/>
						</SliderMainItem>
					))}
				</CarouselMainContainer>
			</div>
			<CarouselThumbsContainer className="rounded-md h-96 basis-1/4">
				{imagesUrl.map((imageUrl, index) => (
					<SliderThumbItem
						key={`${imageUrl}-thumb`}
						index={index}
						className="rounded-md bg-transparent"
					>
						<span className="flex items-center justify-center h-full w-full rounded-md cursor-pointer">
							<ImageRender
								src={`https://sow4xmup6y.ufs.sh/f/${imageUrl}`}
								alt={`Carousel thumbnail ${index + 1}`}
								width={108}
								height={108}
								className="rounded-md"
							/>
						</span>
					</SliderThumbItem>
				))}
			</CarouselThumbsContainer>
		</Carousel>
	);
};

export default Carousell;
