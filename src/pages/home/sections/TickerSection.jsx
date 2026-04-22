const TICKER_ITEMS = [
	'Web Development',
	'Digital Marketing',
	'SEO Optimization',
	'UI/UX Design',
	'Social Media',
	'Brand Identity',
	'IT Solutions',
	'Leads Generation',
	'PPC Advertising',
	'Email Marketing',
]

function TickerSection() {
	const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

	return (
		<div id="ticker">
			<div className="ticker-inner">
				{items.map((item, index) => (
					<div key={`${item}-${index}`} className="tick-item">
						<svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
							<polygon points="3,0 6,3 3,6 0,3" fill="#c8ff00" />
						</svg>
						{item}
					</div>
				))}
			</div>
		</div>
	)
}

export default TickerSection
