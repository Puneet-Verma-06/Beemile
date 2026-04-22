const WORK_ITEMS = [
	{
		title: 'E-Commerce Platform',
		category: 'Web Development',
		description: 'Full-stack e-commerce with real-time inventory, payments, and analytics.',
		year: '2024',
		accent: true,
	},
	{
		title: 'Healthcare SEO',
		category: 'Digital Marketing',
		description: '400% organic traffic growth for a healthcare brand in 8 months.',
		year: '2024',
		accent: false,
	},
	{
		title: 'SaaS Brand Identity',
		category: 'Branding',
		description: 'Complete brand overhaul from logo to design system for a funded startup.',
		year: '2023',
		accent: true,
	},
	{
		title: 'Real Estate Portal',
		category: 'Web Development',
		description: 'AI-powered property listings with 3D virtual tour integration.',
		year: '2024',
		accent: false,
	},
	{
		title: 'Social Media Growth',
		category: 'Social Media',
		description: '10x follower growth in 6 months via viral content for a D2C brand.',
		year: '2023',
		accent: true,
	},
	{
		title: 'Cloud Infrastructure',
		category: 'IT Solutions',
		description: 'Enterprise cloud migration and managed IT for 200+ users.',
		year: '2024',
		accent: false,
	},
]

function SectionLabel({ text }) {
	return (
		<div className="s-label">
			<div className="s-bar" />
			<span>{text}</span>
			<div className="s-bar" />
		</div>
	)
}

function ArrowRightIcon({ size = 14 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	)
}

function WorkSVG({ index }) {
	const variant = index % 6

	if (variant === 0) {
		return (
			<svg width="140" height="110" viewBox="0 0 140 110" fill="none" aria-hidden="true">
				<rect x="12" y="12" width="116" height="86" rx="7" stroke="#c8ff00" strokeOpacity="0.3" strokeWidth="1" />
				<rect x="12" y="12" width="116" height="18" rx="7" fill="#c8ff00" fillOpacity="0.15" />
				<circle cx="27" cy="21" r="3.5" fill="#c8ff00" fillOpacity="0.9" />
				<circle cx="39" cy="21" r="3.5" fill="#c8ff00" fillOpacity="0.6" />
				<circle cx="51" cy="21" r="3.5" fill="#c8ff00" fillOpacity="0.4" />
				<rect x="22" y="40" width="50" height="6" rx="3" fill="#c8ff00" fillOpacity="0.35" />
				<rect x="22" y="50" width="36" height="6" rx="3" fill="#c8ff00" fillOpacity="0.25" />
				<rect x="22" y="60" width="58" height="6" rx="3" fill="#c8ff00" fillOpacity="0.3" />
				<rect x="22" y="70" width="42" height="6" rx="3" fill="#c8ff00" fillOpacity="0.2" />
			</svg>
		)
	}

	if (variant === 1) {
		return (
			<svg width="140" height="110" viewBox="0 0 140 110" fill="none" aria-hidden="true">
				<rect x="18" y="50" width="14" height="45" rx="4" fill="white" fillOpacity="0.12" />
				<rect x="38" y="35" width="14" height="60" rx="4" fill="white" fillOpacity="0.18" />
				<rect x="58" y="42" width="14" height="53" rx="4" fill="white" fillOpacity="0.14" />
				<rect x="78" y="20" width="14" height="75" rx="4" fill="white" fillOpacity="0.2" />
				<rect x="98" y="8" width="14" height="87" rx="4" fill="white" fillOpacity="0.25" />
				<polyline points="25,56 45,43 65,49 85,28 105,16" fill="none" stroke="white" strokeWidth="1.8" strokeOpacity="0.6" />
			</svg>
		)
	}

	if (variant === 2) {
		return (
			<svg width="140" height="110" viewBox="0 0 140 110" fill="none" aria-hidden="true">
				<circle cx="70" cy="55" r="38" fill="none" stroke="#c8ff00" strokeOpacity="0.25" />
				<circle cx="70" cy="55" r="24" fill="none" stroke="#c8ff00" strokeOpacity="0.15" />
				<path d="M70 17 A38 38 0 0 1 108 55" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.6" />
				<path d="M108 55 A38 38 0 0 1 62 91" stroke="#c8ff00" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.35" />
				<circle cx="70" cy="55" r="11" fill="#c8ff00" fillOpacity="0.1" stroke="#c8ff00" strokeOpacity="0.35" strokeWidth="1.5" />
			</svg>
		)
	}

	if (variant === 3) {
		return (
			<svg width="140" height="110" viewBox="0 0 140 110" fill="none" aria-hidden="true">
				<rect x="8" y="8" width="54" height="42" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" />
				<rect x="78" y="8" width="54" height="42" rx="6" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" />
				<rect x="8" y="60" width="54" height="42" rx="6" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" />
				<rect x="78" y="60" width="54" height="42" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" />
			</svg>
		)
	}

	if (variant === 4) {
		return (
			<svg width="140" height="110" viewBox="0 0 140 110" fill="none" aria-hidden="true">
				<circle cx="35" cy="28" r="7.5" fill="#c8ff00" fillOpacity="0.12" stroke="#c8ff00" strokeOpacity="0.55" strokeWidth="1.5" />
				<circle cx="105" cy="28" r="7.5" fill="#c8ff00" fillOpacity="0.12" stroke="#c8ff00" strokeOpacity="0.55" strokeWidth="1.5" />
				<circle cx="70" cy="55" r="7.5" fill="#c8ff00" fillOpacity="0.12" stroke="#c8ff00" strokeOpacity="0.55" strokeWidth="1.5" />
				<circle cx="35" cy="82" r="7.5" fill="#c8ff00" fillOpacity="0.12" stroke="#c8ff00" strokeOpacity="0.55" strokeWidth="1.5" />
				<circle cx="105" cy="82" r="7.5" fill="#c8ff00" fillOpacity="0.12" stroke="#c8ff00" strokeOpacity="0.55" strokeWidth="1.5" />
				<line x1="35" y1="28" x2="105" y2="28" stroke="#c8ff00" strokeOpacity="0.2" />
				<line x1="35" y1="28" x2="70" y2="55" stroke="#c8ff00" strokeOpacity="0.2" />
				<line x1="105" y1="28" x2="70" y2="55" stroke="#c8ff00" strokeOpacity="0.2" />
				<line x1="70" y1="55" x2="35" y2="82" stroke="#c8ff00" strokeOpacity="0.2" />
				<line x1="70" y1="55" x2="105" y2="82" stroke="#c8ff00" strokeOpacity="0.2" />
			</svg>
		)
	}

	return (
		<svg width="140" height="110" viewBox="0 0 140 110" fill="none" aria-hidden="true">
			<rect x="18" y="16" width="104" height="20" rx="5" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
			<circle cx="34" cy="26" r="4" fill="white" fillOpacity="0.55" />
			<rect x="44" y="23" width="28" height="6" rx="3" fill="white" fillOpacity="0.18" />
			<rect x="18" y="42" width="104" height="20" rx="5" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
			<circle cx="34" cy="52" r="4" fill="white" fillOpacity="0.55" />
			<rect x="44" y="49" width="28" height="6" rx="3" fill="white" fillOpacity="0.18" />
			<rect x="18" y="68" width="104" height="20" rx="5" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.25" strokeWidth="1" />
			<circle cx="34" cy="78" r="4" fill="white" fillOpacity="0.55" />
			<rect x="44" y="75" width="28" height="6" rx="3" fill="white" fillOpacity="0.18" />
		</svg>
	)
}

function WorkSection() {
	return (
		<section id="work">
			<div className="work-header">
				<div>
					<SectionLabel text="Our Work" />
					<h2 className="sec-title">
						Projects That
						<br />
						<span className="lime">Speak Louder</span>
					</h2>
				</div>

				<a href="#contact" className="work-link">
					<ArrowRightIcon />
					View All
				</a>
			</div>

			<div className="work-grid">
				{WORK_ITEMS.map((project, index) => (
					<article key={project.title} className="work-card">
						<div className="work-thumb">
							<WorkSVG index={index} />
							<div className={`work-yr${project.accent ? '' : ' muted'}`}>{project.year}</div>
						</div>

						<div className="work-body">
							<div className={`work-cat${project.accent ? '' : ' muted'}`}>{project.category}</div>
							<h3 className="work-title">{project.title}</h3>
							<p className="work-desc">{project.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default WorkSection
