"use client"

import LangList from "./lang-list"
import AnnButton from "../announcement-btn"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabsData = [
	{
		value: "main",
		label: "main",
		lang: [
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
	},
	{
		value: "migrate-next-app",
		label: "migrate-next-app",
		announcement: {
			href: "https://technodyssey.vercel.app/",
			icon: "🎉",
			text: "Now Available in Mobile",
			from: "#ffaa40",
			via: "#9c40ff",
			to: "#ffaa40",
		},
		lang: [
			{
				langName: "Typescript",
				langColor: {
					bg: "bg-[#3178c6]",
					fill: "fill-[#3178c6]",
				},
				langWidth: 81.7,
			},
			{
				langName: "CSS",
				langColor: {
					bg: "bg-[#1572b6]",
					fill: "fill-[#1572b6]",
				},
				langWidth: 17.5,
			},
			{
				langName: "JavaScript",
				langColor: {
					bg: "bg-[#f7df1e]",
					fill: "fill-[#f7df1e]",
				},
				langWidth: 0.8,
			},
		],
	},
	{
		value: "frontend",
		label: "frontend",
		lang: [
			{
				langName: "Typescript",
				langColor: {
					bg: "bg-[#3178c6]",
					fill: "fill-[#3178c6]",
				},
				langWidth: 93.9,
			},
			{
				langName: "JavaScript",
				langColor: {
					bg: "bg-[#f7df1e]",
					fill: "fill-[#f7df1e]",
				},
				langWidth: 3.1,
			},
			{
				langName: "CSS",
				langColor: {
					bg: "bg-[#1572b6]",
					fill: "fill-[#1572b6]",
				},
				langWidth: 2.6,
			},
			{
				langName: "HTML",
				langColor: {
					bg: "bg-[#e34f26]",
					fill: "fill-[#e34f26]",
				},
				langWidth: 0.4,
			},
		],
	},
	{
		value: "backend",
		label: "backend",
		lang: [
			{
				langName: "Python",
				langColor: {
					bg: "bg-[#3776AB]",
					fill: "fill-[#3776AB]",
				},
				langWidth: 97.8,
			},
			{
				langName: "Dockerfile",
				langColor: {
					bg: "bg-[#2496ED]",
					fill: "fill-[#2496ED]",
				},
				langWidth: 2.2,
			},
		],
	},
]

const BranchTab = ({ workId }: { workId: number }) => {
	const filteredTabsData =
		workId === 5
			? tabsData.filter((tab) => tab.value === "main" || tab.value === "migrate-next-app")
			: tabsData.filter((tab) => tab.value === "frontend" || tab.value === "backend")

	return (
		<Tabs defaultValue={filteredTabsData[0].value}>
			<TabsList>
				{filteredTabsData.map((tab) => (
					<TabsTrigger
						key={tab.value}
						value={tab.value}
					>
						{tab.label}
					</TabsTrigger>
				))}
			</TabsList>
			{filteredTabsData.map((tab) => (
				<TabsContent
					key={tab.value}
					value={tab.value}
				>
					{tab.announcement && (
						<AnnButton
							className="my-4 block"
							href={tab.announcement.href}
							icon={tab.announcement.icon}
							text={tab.announcement.text}
							from={tab.announcement.from}
							via={tab.announcement.via}
							to={tab.announcement.to}
						/>
					)}
					<LangList lang={tab.lang} />
				</TabsContent>
			))}
		</Tabs>
	)
}

export default BranchTab
