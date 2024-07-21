// import Image from 'next/image';
import './styles/loader.scss';

export default function Loading() {
	return (
		<div className='flex items-center justify-center min-h-dvh w-full'>
			{/* <Image
				src='/loader.gif'
				alt='loader'
				width={250}
				height={250}
				unoptimized
			/> */}
			<div className='loader'>
				<svg viewBox='0 0 80 80'>
					<circle
						className='stroke-'
						cx='40'
						cy='40'
						r='32'
					></circle>
				</svg>
			</div>

			<div className='loader triangle'>
				<svg viewBox='0 0 86 80'>
					<polygon points='43 8 79 72 7 72'></polygon>
				</svg>
			</div>

			<div className='loader'>
				<svg viewBox='0 0 80 80'>
					<rect
						x='8'
						y='8'
						width='64'
						height='64'
					></rect>
				</svg>
			</div>
		</div>
	);
}
