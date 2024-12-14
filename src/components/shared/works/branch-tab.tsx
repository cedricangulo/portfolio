"use client"

import LangList from "./lang-list"
import AnnButton from "../announcement-btn"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const main = [
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
]

const ts = [
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
]

const BranchTab = () => {
	return (
		<Tabs defaultValue="main">
			<TabsList>
				<TabsTrigger value="main">main</TabsTrigger>
				<TabsTrigger value="migrate-next-app">migrate-next-app</TabsTrigger>
			</TabsList>
			<TabsContent value="main">
				<LangList lang={main} />
			</TabsContent>
			<TabsContent value="migrate-next-app">
				<AnnButton
					className="my-4 block"
					href="https://technodyssey.vercel.app/"
					icon="🎉"
					text="Now Available in Mobile"
					from="#ffaa40"
					via="#9c40ff"
					to="#ffaa40"
				/>
				<LangList lang={ts} />
			</TabsContent>
		</Tabs>
	)
}

export default BranchTab
