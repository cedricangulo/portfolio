const Skills: string[] = [
	'HTML',
	'CSS',
	'JavaScript',
	'C++',
	'PHP',
	'Mysql',
	'TailwindCSS',
	'Mobile Responsive',
	'Visual Basic',
	'Git',
	'GitHub',
];

function FeaturedSkills() {
	return (
		<div className='flex max-w-3xl gap-4 flex-wrap items-center justify-center'>
			{Skills.map((text: string, index: number) => {
				return (
					<span
						key={index}
						className='cursor-pointer tag py-2 px-4 sec-text'
					>
						{text}
					</span>
				);
			})}
		</div>
	);
}

export default FeaturedSkills;
