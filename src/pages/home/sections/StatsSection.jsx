function TrophyIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M6 9H3.5a2.5 2.5 0 0 1 0-5H6" />
			<path d="M18 9h2.5a2.5 2.5 0 0 0 0-5H18" />
			<path d="M4 22h16" />
			<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
			<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
			<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
		</svg>
	)
}

function UsersIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	)
}

function CalendarIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect x="3" y="4" width="18" height="18" rx="2" />
			<path d="M16 2v4M8 2v4M3 10h18" />
		</svg>
	)
}

function StarIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	)
}

function StatsSection() {
	const stats = [
		{ value: '150+', label: 'Projects Delivered', Icon: TrophyIcon },
		{ value: '80+', label: 'Happy Clients', Icon: UsersIcon },
		{ value: '5+', label: 'Years Experience', Icon: CalendarIcon },
		{ value: '98%', label: 'Client Satisfaction', Icon: StarIcon },
	]

	return (
		<section id="stats">
			<div className="stats-grid">
				{stats.map((stat, index) => (
					<div key={stat.label} className="stat-card fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
						<div className="stat-icon">
							<stat.Icon />
						</div>
						<div className="stat-num">{stat.value}</div>
						<div className="stat-label">{stat.label}</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default StatsSection
