function SectionLabel({ text }) {
	return (
		<div className="s-label">
			<div className="s-bar" />
			<span>{text}</span>
			<div className="s-bar" />
		</div>
	)
}

function StrategyIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="6" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	)
}

function FastIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
		</svg>
	)
}

function RoiIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
			<line x1="12" y1="20" x2="12" y2="10" />
			<line x1="18" y1="20" x2="18" y2="4" />
			<line x1="6" y1="20" x2="6" y2="16" />
			<path d="M2 20h20" />
		</svg>
	)
}

function PartnerIcon() {
	return (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	)
}

function AboutSection() {
	const pillars = [
		{
			title: 'Strategy First',
			description: 'Deep understanding of your goals before we write a single line of code.',
			Icon: StrategyIcon,
		},
		{
			title: 'Fast Execution',
			description: 'Agile delivery without cutting corners. Speed and quality together.',
			Icon: FastIcon,
		},
		{
			title: 'ROI Focused',
			description: 'We measure success by your business results, not deliverables.',
			Icon: RoiIcon,
		},
		{
			title: 'Long-Term Partner',
			description: 'We build relationships, not just projects. We grow with you.',
			Icon: PartnerIcon,
		},
	]

	return (
		<section id="about">
			<div className="about-grid">
				<div>
					<SectionLabel text="Who We Are" />
					<h2 className="sec-title about-title">
						Not Just an
						<br />
						Agency -
						<br />
						<span className="lime">Your Digital Team</span>
					</h2>

					<p className="about-desc">
						Beemyle was built on one belief: businesses deserve a partner that actually cares about growth.
						We combine technical depth with creative thinking to deliver results.
					</p>

					<div className="pillar-grid">
						{pillars.map((pillar) => (
							<article key={pillar.title} className="pillar">
								<div className="pillar-ico">
									<pillar.Icon />
								</div>
								<h4>{pillar.title}</h4>
								<p>{pillar.description}</p>
							</article>
						))}
					</div>
				</div>

				<div className="about-viz">
					<div className="viz-main">
						<div className="viz-main-label">Our Approach</div>
						<div className="viz-main-title">
							360 Digital
							<br />
							Ecosystem
						</div>

						<div className="viz-chart-wrap">
							<svg width="190" height="190" viewBox="0 0 200 200" aria-hidden="true">
								<circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
								<circle cx="100" cy="100" r="50" fill="none" stroke="rgba(200,255,0,0.06)" strokeWidth="1" />
								<circle cx="100" cy="100" r="25" fill="rgba(200,255,0,0.06)" stroke="rgba(200,255,0,0.2)" strokeWidth="1.5" />
								<path d="M100 22 A78 78 0 0 1 178 100" fill="none" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
								<path d="M178 100 A78 78 0 0 1 100 178" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
								<path d="M100 178 A78 78 0 0 1 22 100" fill="none" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
								<path d="M22 100 A78 78 0 0 1 100 22" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" />
								<text x="132" y="65" fill="#c8ff00" fontSize="9" fontFamily="Barlow" fontWeight="700" letterSpacing="1">DESIGN</text>
								<text x="130" y="142" fill="white" fontSize="9" fontFamily="Barlow" fontWeight="700" letterSpacing="1">MKTNG</text>
								<text x="36" y="142" fill="#c8ff00" fontSize="9" fontFamily="Barlow" fontWeight="700" letterSpacing="1">DEV</text>
								<text x="44" y="65" fill="white" fontSize="9" fontFamily="Barlow" fontWeight="700" letterSpacing="1">SEO</text>
								<text x="86" y="105" fill="white" fontSize="10" fontFamily="Barlow" fontWeight="900" letterSpacing="2">BEE</text>
							</svg>
						</div>
					</div>

					<div className="viz-float">
						<div className="viz-roi-label">Avg. ROI Delivered</div>
						<div className="viz-roi-num">+340%</div>

						<div className="bar-row">
							{[18, 12, 22, 14, 26, 17, 25].map((height, index) => (
								<div
									key={`${height}-${index}`}
									style={{
										width: '6px',
										height: `${height}px`,
										background: `rgba(200,255,0,${0.28 + index * 0.08})`,
										borderRadius: '3px',
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
