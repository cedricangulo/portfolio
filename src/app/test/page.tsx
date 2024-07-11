import Image from 'next/image';
export default function TestLoader() {
	return (
		<div className='flex items-center justify-center min-h-[80dvh] w-full'>
			<Image
				src='/loader.gif'
				alt='loader'
				width={250}
				height={250}
			/>
		</div>
	);
}
