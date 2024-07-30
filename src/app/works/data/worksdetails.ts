import {
	anta,
	electrolize,
	hind,
	lexend,
	orbitron,
	poppins,
	rubik_doodle_shadow,
	tektur,
} from '../_lib/font';

export const worksMeta = [
	{
		id: 1,
		title: 'WebWise',
		paragraphs: [
			'WebWise is a comprehensive case study for our first-year, second-semester IT Web Systems Technology (ITWST) subject. Our goal was to create a free, user-friendly platform for learning web development.',
			'The platform features over 15 well-designed lessons, guiding beginners to start web development.',
			'We chose an educational website about starting web development to ensure our project’s relevance to our Bachelor of Science in Information Technology (BSIT) course. The project was completed within one month.',
		],
		fontFamily: [
			{ fonts: anta, text: 'Anta' },
			{ fonts: poppins, text: 'Poppins' },
			{ fonts: lexend, text: 'Lexend' },
		],
		colorScheme: [
			{ content: '#4c1d95', color: 'bg-[#4c1d95]', textColor: 0 },
			{ content: '#7c3aed', color: 'bg-[#7c3aed]', textColor: 0 },
			{ content: '#facc15', color: 'bg-[#facc15]', textColor: 1 },
		],
		langs: [
			{
				langName: 'HTML',
				langColor: {
					bg: 'bg-[#dc3207] dark:bg-[#e34c26]',
					fill: 'fill-[#dc3207] dark:fill-[#e34c26]',
				},
				langWidth: 90.6,
			},
			{
				langName: 'CSS',
				langColor: {
					bg: 'bg-[#5a14c2] dark:bg-[#563d7c]',
					fill: 'fill-[#5a14c2] dark:fill-[#563d7c]',
				},
				langWidth: 4.4,
			},
			{
				langName: 'JavaScript',
				langColor: {
					bg: 'bg-[#f7df27] dark:bg[#e6cc00]',
					fill: 'fill-[#f7df27] dark:fill-[#e6cc00]',
				},
				langWidth: 5.0,
			},
		],
		images: [
			{
				src: '/images/webwise/webwisee-mobile.jpg',
				alt: 'WebWise in Mobile',
			},
			{
				src: '/images/webwise/webwise2.webp',
				alt: 'Compilation for Mobile View Pages',
			},
		],
	},
	{
		id: 2,
		title: 'Techno Odyssey',
		paragraphs: [
			'This project was my submission for the Technoday 2024 event at our school. This project showcased the latest news and advancements in technology.',
			'Despite the tight deadline, I developed the website in just three days, ensuring our team, BLACK, had a strong web presence for the event.',
			'Luckily, I won first place with this project.',
		],
		fontFamily: [
			{ fonts: poppins, text: 'Poppins' },
			{ fonts: orbitron, text: 'Orbitron' },
			{ fonts: electrolize, text: 'Electrolize' },
		],
		colorScheme: [
			{ content: '#8b59ff', color: 'bg-[#8b59ff]', textColor: 1 },
			{ content: '#b466fe', color: 'bg-[#b466fe]', textColor: 1 },
			{ content: '#e1a9ff', color: 'bg-[#e1a9ff]', textColor: 1 },
		],
		langs: [
			{
				langName: 'HTML',
				langColor: {
					bg: 'bg-[#dc3207] dark:bg-[#e34c26]',
					fill: 'fill-[#dc3207] dark:fill-[#e34c26]',
				},
				langWidth: 67.4,
			},
			{
				langName: 'CSS',
				langColor: {
					bg: 'bg-[#5a14c2] dark:bg-[#563d7c]',
					fill: 'fill-[#5a14c2] dark:fill-[#563d7c]',
				},
				langWidth: 32.6,
			},
		],
		images: [
			{
				src: '/images/techodyssey/technodyssey-mobile.jpg',
				alt: 'Mobile view',
			},
			{
				src: '/images/techodyssey/techno1.jpg',
				alt: 'Home page',
			},
			{
				src: '/images/techodyssey/techno2.jpg',
				alt: 'Articles page',
			},
			// {
			// 	src: "/images/techodyssey/techno3.jpg",
			// 	alt: "Techno Odyssey",
			// },
			{
				src: '/images/techodyssey/techno4.jpg',
				alt: 'Innovations page',
			},
			// {
			// 	src: "/images/techodyssey/techno5.jpg",
			// 	alt: "Techno Odyssey",
			// },
			{
				src: '/images/techodyssey/techno6.jpg',
				alt: 'About page',
			},
			// {
			// 	src: "/images/techodyssey/techno7.jpg",
			// 	alt: "Techno Odyssey",
			// },
			{
				src: '/images/techodyssey/techno8.jpg',
				alt: 'Reach us page',
			},
		],
	},
	{
		id: 3,
		title: 'Class Directory',
		paragraphs: [
			'It is designed to provide simple yet essential information about the class. The site includes of images of class officers, a class schedule presented using cards, and a list of announcements.',
			'Each announcements is marked with a colored dot to indicate its type or status.',
		],
		fontFamily: [
			{ fonts: poppins, text: 'Poppins' },
			{ fonts: tektur, text: 'Tektur' },
		],
		colorScheme: [
			{ content: '#601008', color: 'bg-[#601008]', textColor: 0 },
			{ content: '#F88820', color: 'bg-[#F88820]', textColor: 1 },
			{ content: '#ffce0a', color: 'bg-[#ffce0a]', textColor: 1 },
		],
		langs: [
			{
				langName: 'HTML',
				langColor: {
					bg: 'bg-[#dc3207] dark:bg-[#e34c26]',
					fill: 'fill-[#dc3207] dark:fill-[#e34c26]',
				},
				langWidth: 65.2,
			},
			{
				langName: 'CSS',
				langColor: {
					bg: 'bg-[#5a14c2] dark:bg-[#563d7c]',
					fill: 'fill-[#5a14c2] dark:fill-[#563d7c]',
				},
				langWidth: 23,
			},
			{
				langName: 'JavaScript',
				langColor: {
					bg: 'bg-[#f7df27] dark:bg[#e6cc00]',
					fill: 'fill-[#f7df27] dark-fill[#e6cc00]',
				},
				langWidth: 11.8,
			},
		],
		images: [
			{
				src: '/images/classdirectory/sumbsit-mobile.jpg',
				alt: 'Mobile view',
			},
			{
				src: '/images/classdirectory/sumbsit1a1.webp',
				alt: 'Home page',
			},
			{
				src: '/images/classdirectory/sumbsit1a2.webp',
				alt: 'Class Officers page',
			},
			{
				src: '/images/classdirectory/sumbsit1a3.webp',
				alt: 'Schedules page',
			},
		],
	},
	{
		id: 4,
		title: 'Shoepee',
		paragraphs: [
			'Shoepee is an e-commerce website initially developed for my friend’s project. When he asked for my assistance, I saw it as a chance to learn more about PHP. We used PHP and a database managed through XAMPP. It was my first experience uploading and deleting images using PHP.',
			'We started development on December 5, 2023, and he submitted the project on December 22, 2023. Although the initial project was submitted, I have continued to work on it, and it remains an ongoing development project.',
		],
		fontFamily: [
			{ fonts: poppins, text: 'Poppins' },
			{ fonts: hind, text: 'Hind' },
			{ fonts: rubik_doodle_shadow, text: 'Rubik Doodle Shadow' },
		],
		colorScheme: [
			{ content: '#2c3333', color: 'bg-[#2c3333]', textColor: 0 },
			{ content: '#a11b0f', color: 'bg-[#a11b0f]', textColor: 0 },
			{ content: '#dc000e', color: 'bg-[#dc000e]', textColor: 0 },
		],
		langs: [
			{
				langName: 'PHP',
				langColor: {
					bg: 'bg-[#1e3698] dark:bg[#4F5D95]',
					fill: 'fill-[#1e3698] dark-fill[#4F5D95]',
				},
				langWidth: 79.6,
			},
			{
				langName: 'CSS',
				langColor: {
					bg: 'bg-[#5a14c2] dark:bg-[#563d7c]',
					fill: 'fill-[#5a14c2] dark:fill-[#563d7c]',
				},
				langWidth: 15.8,
			},
			{
				langName: 'JavaScript',
				langColor: {
					bg: 'bg-[#f7df27] dark:bg[#e6cc00]',
					fill: 'fill-[#f7df27] dark-fill[#e6cc00]',
				},
				langWidth: 4.6,
			},
		],
		images: [
			{
				src: '/images/shoepee/shoepee.webp',
				alt: 'Landing page',
			},
			{
				src: '/images/shoepee/shoepee1.webp',
				alt: 'Product info page',
			},
			{
				src: '/images/shoepee/shoepee2.webp',
				alt: 'Bag list page',
			},
			{
				src: '/images/shoepee/shoepee3.webp',
				alt: 'Search resutls page',
			},
		],
	},
	{
		id: 5,
		title: 'Students’ Transcripts System',
		paragraphs: [
			'The STS is a web application for school registrars to manage Old Curriculum SF10 records. Developed within a month, it has some security limitations.',
			'The primary goal is to generate internal-use Excel files (.xlsx), not for public access.',
			'This was my first project using PHP, undertaken as self-study since our teacher hadn’t covered PHP. Our knowledge was limited to HTML, CSS, and JavaScript fundamentals. In this group project, I served as the full stack developer, with my teammates managing other tasks.',
		],
		fontFamily: [{ fonts: poppins, text: 'Poppins' }],
		colorScheme: [
			{ content: '#33691e', color: 'bg-[#33691e]', textColor: 0 },
			{ content: '#6a9221', color: 'bg-[#6a9221]', textColor: 1 },
			{ content: '#FFD046', color: 'bg-[#FFD046]', textColor: 1 },
		],
		langs: [
			{
				langName: 'PHP',
				langColor: {
					bg: 'bg-[#1e3698] dark:bg[#4F5D95]',
					fill: 'fill-[#1e3698] dark-fill[#4F5D95]',
				},
				langWidth: 88.6,
			},
			{
				langName: 'CSS',
				langColor: {
					bg: 'bg-[#5a14c2] dark:bg-[#563d7c]',
					fill: 'fill-[#5a14c2] dark:fill-[#563d7c]',
				},
				langWidth: 8.7,
			},
			{
				langName: 'HTML',
				langColor: {
					bg: 'bg-[#dc3207] dark:bg-[#e34c26]',
					fill: 'fill-[#dc3207] dark:fill-[#e34c26]',
				},
				langWidth: 2.1,
			},
			{
				langName: 'JavaScript',
				langColor: {
					bg: 'bg-[#f7df27] dark:bg[#e6cc00]',
					fill: 'fill-[#f7df27] dark-fill[#e6cc00]',
				},
				langWidth: 0.6,
			},
		],
		images: [
			{
				src: '/images/sts/sts.webp',
				alt: 'Landing page',
			},
			{
				src: '/images/sts/sts2.webp',
				alt: 'Students list',
			},
			{
				src: '/images/sts/sts3.webp',
				alt: 'Add student page',
			},
			{
				src: '/images/sts/sts4.webp',
				alt: 'Student’s Informations page',
			},
			{
				src: '/images/sts/sts5.webp',
				alt: 'Edit Informations page',
			},
		],
	},
];
