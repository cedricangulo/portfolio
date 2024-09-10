import { ILangListProps } from './interface/lang';

function LangList({ lang }: ILangListProps) {
	return (
		<>
			<span className='w-full inline-flex rounded-lg gap-1'>
				{lang?.map((l, i) => (
					<span
						key={i}
						className={l.langColor.bg}
						style={{
							display: 'inline-block',
							height: '0.25rem',
							width: `${l.langWidth}%`,
							borderTopLeftRadius: i === 0 ? '0.5rem' : '0',
							borderBottomLeftRadius: i === 0 ? '0.5rem' : '0',
							borderTopRightRadius: i === lang?.length - 1 ? '0.5rem' : '0',
							borderBottomRightRadius: i === lang?.length - 1 ? '0.5rem' : '0',
						}}
					></span>
				))}
			</span>
			<ul className='list-none'>
				{lang?.map((l, i) => (
					<li
						key={i}
						className='inline'
					>
						<div className='inline-flex items-center no-underline text-sm mr-3 text-secondary-foreground'>
							<svg
								height='16'
								viewBox='0 0 16 16'
								width='16'
								className={l.langColor.fill}
								style={{ margin: '4px' }}
							>
								<path d='M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z'></path>
							</svg>
							<span className='text-xs font-base mr-1'>{l.langName}</span>
							<span className='text-xs font-base'>{l.langWidth}%</span>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default LangList;
