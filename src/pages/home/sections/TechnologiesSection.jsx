const TECH_ITEMS = [
	['React', 'Frontend'],
	['Next.js', 'Framework'],
	['Node.js', 'Backend'],
	['TypeScript', 'Language'],
	['MongoDB', 'Database'],
	['PostgreSQL', 'Database'],
	['AWS', 'Cloud'],
	['Google Ads', 'Marketing'],
	['Meta Ads', 'Marketing'],
	['Figma', 'Design'],
	['Tailwind CSS', 'Styling'],
	['GraphQL', 'API'],
]

function SectionLabel({ text, center = false }) {
	return (
		<div className={`s-label${center ? ' center' : ''}`}>
			<div className="s-bar" />
			<span>{text}</span>
			<div className="s-bar" />
		</div>
	)
}

function TechnologiesSection() {
	return (
		<section id="technologies">
			<div className="tech-wrap">
				<SectionLabel text="Tech Stack" center />
				<h2 className="sec-title center">
					Tools We
					<br />
					<span className="lime">Master</span>
				</h2>

				<div className="tech-pills">
					{TECH_ITEMS.map(([name, category]) => (
						<div key={name} className="tech-pill">
							<span className="tech-name">{name}</span>
							<span className="tech-cat">{category}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TechnologiesSection
