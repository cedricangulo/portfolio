'use client';

import { useState } from 'react';
import LangList from './lang-list';
import AnnButton from '../shared/ui/announcement-btn';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/shared/ui/select';

const main = [
	{
		langName: 'HTML',
		langColor: {
			bg: 'bg-[#e34f26]',
			fill: 'fill-[#e34f26]',
		},
		langWidth: 67.4,
	},
	{
		langName: 'CSS',
		langColor: {
			bg: 'bg-[#1572b6]',
			fill: 'fill-[#1572b6]',
		},
		langWidth: 32.6,
	},
];

const ts = [
	{
		langName: 'Typescript',
		langColor: {
			bg: 'bg-[#3178c6]',
			fill: 'fill-[#3178c6]',
		},
		langWidth: 81.7,
	},
	{
		langName: 'CSS',
		langColor: {
			bg: 'bg-[#1572b6]',
			fill: 'fill-[#1572b6]',
		},
		langWidth: 17.5,
	},
	{
		langName: 'JavaScript',
		langColor: {
			bg: 'bg-[#f7df1e]',
			fill: 'fill-[#f7df1e]',
		},
		langWidth: 0.8,
	},
];

const BranchTab = () => {
	const [selectedValue, setSelectedValue] = useState<string>('main');

	const handleSelectChange = (value: string) => {
		setSelectedValue(value);
	};

	return (
		<>
			<Select
				defaultValue='main'
				onValueChange={handleSelectChange}
			>
				<SelectTrigger className='w-[180px] bg-white dark:bg-neutral-950 border-2 border-[#ebebeb] dark:border-[#333]'>
					<SelectValue placeholder='Select a branch' />
				</SelectTrigger>
				<SelectContent className='bg-white dark:bg-neutral-950 border-2 border-[#ebebeb] dark:border-[#333]'>
					<SelectGroup>
						<SelectLabel>Branches</SelectLabel>
						<SelectItem value='main'>main</SelectItem>
						<SelectItem value='ts-version'>ts-version</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			{selectedValue === 'main' && (
				<>
					<LangList lang={main} />
				</>
			)}
			{selectedValue === 'ts-version' && (
				<>
					<AnnButton
						className='my-4 block'
						href='https://technodyssey.vercel.app/'
						icon='🎉'
						text='Now Available in Mobile'
						from='#ffaa40'
						via='#9c40ff'
						to='#ffaa40'
					/>
					<LangList lang={ts} />
				</>
			)}
		</>
	);
};

export default BranchTab;
