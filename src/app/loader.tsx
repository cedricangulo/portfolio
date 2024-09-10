import React from 'react';
import { quantum } from 'ldrs';

quantum.register();

function Loader() {
	return (
		<div className='flex items-center justify-center min-h-dvh w-full'>
			<l-quantum
				size='45'
				speed='1.75'
			></l-quantum>
		</div>
	);
}

export default Loader;
