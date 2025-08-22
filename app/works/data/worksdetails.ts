import { geistsans } from "@/lib/fonts"
import {
	anta,
	electrolize,
	lexend,
	orbitron,
	poppins,
	tektur,
} from "../_lib/font"
import { GeistMono } from "geist/font/mono"

export const worksMeta = [
	{
		id: 1,
		title: "Pokémon Grading Tool",
		paragraphs: [
			"As a frontend developer, I had the opportunity to contribute to the development of the Pokémon Card Analysis Tool. This comprehensive tool is designed to provide users with the necessary information to make informed decisions regarding their card collection and trades.",
			"Whether you are an experienced collector or just beginning to build your collection, this tool is intended to facilitate the navigation of the Pokémon trading card market and support informed decision-making.",
		],
		fontFamily: [{ fonts: geistsans, text: "Geist Sans" }],
		colorScheme: [
			{ content: "#d92d2d", color: "bg-[#d92d2d]", textColor: 0 },
			{ content: "#ffffff", color: "bg-[#ffffff]", textColor: 1 },
			{ content: "#0a0a0a", color: "bg-[#0a0a0a]", textColor: 0 },
		],
		contributors: [
			{
				avatar: "https://avatars.githubusercontent.com/u/142586349?v=4",
				name: "Aldwin Sarte",
				link: "https://github.com/AldJayR",
				fallback: "AS"
			},
			{
				avatar: "https://avatars.githubusercontent.com/u/141980423?v=4",
				name: "Leon Laborina",
				link: "https://github.com/leonlaborina15",
				fallback: "LL"
			},
			{
				avatar: "https://avatars.githubusercontent.com/u/117529860?v=4",
				name: "Cedric Angulo",
				link: "https://github.com/cedricangulo",
				fallback: "CA"
			},
		],
		images: [
			{
				src: "XLJnqTgGVh2yMHI2jKY1FnJXUsEZgBrp8NT5qM4mkuwC9ORi",
				alt: "Home Page",
			},
			{
				src: "XLJnqTgGVh2yhqcXUL8VPwXjt6UCkn9zaKJdyx7e2Q1NHcWI",
				alt: "All Cards Page",
			},
		],
		github: "https://github.com/cedricangulo/pokemon",
		href: "https://pokemon-proxx.vercel.app",
	},
	{
		id: 2,
		title: "CA Resources",
		paragraphs: [
			"It is a website designed to improve productivity, especially for web development, among other fields in education. It provides the most valuable resources and guides.",
			"It uses fumadocs as the content management system.",
		],
		fontFamily: [
			{ fonts: geistsans, text: "Geist Sans" },
			{ fonts: GeistMono, text: "Geist Mono" },
		],
		colorScheme: [
			{ content: "#fafafa", color: "bg-[#fafafa]", textColor: 1 },
			{ content: "#71717a", color: "bg-[#71717a]", textColor: 0 },
			{ content: "#09090b", color: "bg-[#09090b]", textColor: 0 },
		],
		langs: [
			{
				langName: "MDX",
				langColor: {
					bg: "bg-[#fcb32c]",
					fill: "fill-[#fcb32c]",
				},
				langWidth: 63.3,
			},
			{
				langName: "TypeScript",
				langColor: {
					bg: "bg-[#3178c6]",
					fill: "fill-[#3178c6]",
				},
				langWidth: 33.2,
			},
			{
				langName: "CSS",
				langColor: {
					bg: "bg-[#1572b6]",
					fill: "fill-[#1572b6]",
				},
				langWidth: 3.3,
			},
			{
				langName: "JavaScript",
				langColor: {
					bg: "bg-[#f7df1e]",
					fill: "fill-[#f7df1e]",
				},
				langWidth: 0.2,
			},
		],
		images: [
			{
				src: "XLJnqTgGVh2yIG3yG7NogqDwuQNEpVJTsR9WnlXj0YHZ5Lz1",
				alt: "Home Page",
			},
			{
				src: "XLJnqTgGVh2y3DRJWHP5p1EXywrTAMbuKslkcH86SVeU7Roz",
				alt: "Resources Page",
			},
			{
				src: "XLJnqTgGVh2yOSrQHU9kZVhkTKUwtzfEOCLFl1xqnuXr70Nj",
				alt: "Guides Page",
			},
		],
		github: "https://github.com/cedricangulo/ca-resources",
		href: "https://ca-resources.vercel.app",
	},
	{
		id: 3,
		title: "WebWise",
		paragraphs: [
			"WebWise is a comprehensive case study for our first-year, second-semester IT Web Systems Technology (ITWST) subject. Our goal was to create a free, user-friendly platform for learning web development.",
			"The platform features over 15 well-designed lessons, guiding beginners to start web development.",
			"We chose an educational website about starting web development to ensure our project’s relevance to our Bachelor of Science in Information Technology (BSIT) course. The project was completed within one month.",
		],
		fontFamily: [
			{ fonts: anta, text: "Anta" },
			{ fonts: poppins, text: "Poppins" },
			{ fonts: lexend, text: "Lexend" },
		],
		colorScheme: [
			{ content: "#4c1d95", color: "bg-[#4c1d95]", textColor: 0 },
			{ content: "#7c3aed", color: "bg-[#7c3aed]", textColor: 0 },
			{ content: "#facc15", color: "bg-[#facc15]", textColor: 1 },
		],
		langs: [
			{
				langName: "HTML",
				langColor: {
					bg: "bg-[#e34f26]",
					fill: "fill-[#e34f26]",
				},
				langWidth: 90.6,
			},
			{
				langName: "CSS",
				langColor: {
					bg: "bg-[#1572b6]",
					fill: "fill-[#1572b6]",
				},
				langWidth: 4.4,
			},
			{
				langName: "JavaScript",
				langColor: {
					bg: "bg-[#f7df1e]",
					fill: "fill-[#f7df1e]",
				},
				langWidth: 5.0,
			},
		],
		images: [
			{
				src: "XLJnqTgGVh2yxCSjXCCb6ZuGqAYgJcld1BMXNWR5LK9o8exj",
				alt: "WebWise in Mobile",
			},
			{
				src: "XLJnqTgGVh2yTrEZlo3djaF5VK7iGR0ZQqIx4Ynk2rvCLESX",
				alt: "Compilation for Mobile View Pages",
			},
		],
		github: "https://github.com/cedricangulo/WebWise",
		href: "https://webwisee.vercel.app",
	},
	{
		id: 4,
		title: "Techno Odyssey",
		paragraphs: [
			"This project was my submission for the Technoday 2024 event at our school. This project showcased the latest news and advancements in technology.",
			"Despite the tight deadline, I developed the website in just three days, ensuring our team, BLACK, had a strong web presence for the event.",
			"Luckily, I won first place with this project.",
		],
		fontFamily: [
			{ fonts: poppins, text: "Poppins" },
			{ fonts: orbitron, text: "Orbitron" },
			{ fonts: electrolize, text: "Electrolize" },
		],
		colorScheme: [
			{ content: "#8b59ff", color: "bg-[#8b59ff]", textColor: 1 },
			{ content: "#b466fe", color: "bg-[#b466fe]", textColor: 1 },
			{ content: "#e1a9ff", color: "bg-[#e1a9ff]", textColor: 1 },
		],
		langs: [
			{
				langName: "HTML",
				langColor: {
					bg: "bg-[#e34f26]",
					fill: "fill-[#e34f26]",
				},
				langWidth: 67.4,
			},
			{
				langName: "CSS",
				langColor: {
					bg: "bg-[#1572b6]",
					fill: "fill-[#1572b6]",
				},
				langWidth: 32.6,
			},
		],
		images: [
			{
				src: "XLJnqTgGVh2yUeaWIDVykJKLRtwfPhDTQaGnuIdBzNYms2q3",
				alt: "Mobile view",
			},
			{
				src: "XLJnqTgGVh2yS08t3tdkZ5UY7wNv401CqDaOyxGREVrfImtl",
				alt: "Home page",
			},
			{
				src: "XLJnqTgGVh2y6jaur3CqJMYprfCyscKo1mt5FhSGRL9aHnUw",
				alt: "Articles page",
			},
			{
				src: "XLJnqTgGVh2yUY7gyFVykJKLRtwfPhDTQaGnuIdBzNYms2q3",
				alt: "Innovations page",
			},
			{
				src: "XLJnqTgGVh2yd5NacNEKg4cMa3RysqvVZNfz7AFDkKEIrj2o",
				alt: "About page",
			},
			{
				src: "XLJnqTgGVh2yKpDf31rquhokAsR2IXiT0b4Cc7Zmp6nwBzLF",
				alt: "Reach us page",
			},
		],
		github: "https://github.com/cedricangulo/technodyssey",
		href: "",
	},
	{
		id: 5,
		title: "Class Directory",
		paragraphs: [
			"It is designed to provide simple yet essential information about the class. The site includes images of class officers, a class schedule presented using cards, and a list of announcements.",
			"Each announcements is marked with a colored dot to indicate its type or status.",
		],
		fontFamily: [
			{ fonts: poppins, text: "Poppins" },
			{ fonts: tektur, text: "Tektur" },
		],
		colorScheme: [
			{ content: "#601008", color: "bg-[#601008]", textColor: 0 },
			{ content: "#F88820", color: "bg-[#F88820]", textColor: 1 },
			{ content: "#ffce0a", color: "bg-[#ffce0a]", textColor: 1 },
		],
		contributors: [
			{
				avatar: "https://avatars.githubusercontent.com/u/147966338?v=4",
				name: "AJ Capule",
				link: "https://github.com/Ryudd07",
				fallback: "AC"
			},
			{
				avatar: "https://avatars.githubusercontent.com/u/117529860?v=4",
				name: "Cedric Angulo",
				link: "https://github.com/cedricangulo",
				fallback: "CA"
			},
		],
		langs: [
			{
				langName: "HTML",
				langColor: {
					bg: "bg-[#e34f26]",
					fill: "fill-[#e34f26]",
				},
				langWidth: 65.2,
			},
			{
				langName: "CSS",
				langColor: {
					bg: "bg-[#1572b6]",
					fill: "fill-[#1572b6]",
				},
				langWidth: 23,
			},
			{
				langName: "JavaScript",
				langColor: {
					bg: "bg-[#f7df1e]",
					fill: "fill-[#f7df1e]",
				},
				langWidth: 11.8,
			},
		],
		images: [
			{
				src: "XLJnqTgGVh2y8xOJnz2HPbiBv6EgI17KOo5AxDFleTXQ9wRz",
				alt: "Mobile view",
			},
			{
				src: "XLJnqTgGVh2yQj6zvFtq982FJZLc513oMElSdaWGzVOuDmXe",
				alt: "Home page",
			},
			{
				src: "XLJnqTgGVh2yNHVEW8ejYPiBbefI3WXTF0u4Swh5xO2mM1Hk",
				alt: "Class Officers page",
			},
			{
				src: "XLJnqTgGVh2yS7JuYVdkZ5UY7wNv401CqDaOyxGREVrfImtl",
				alt: "Schedules page",
			},
		],
		github: "https://github.com/cedricangulo/sumbsit1a",
		href: "https://sumacabbsit1a.vercel.app",
	}
]
