const DEFAULT_PHONE = '+91 74520 19358'

function sanitizePhoneNumber(phone) {
	return String(phone ?? '')
		.replace(/[^\d]/g, '')
		.replace(/^0+/, '')
}

function toWhatsAppUrl(phone, text) {
	const number = sanitizePhoneNumber(phone)
	if (!number) {
		return '#'
	}

	const encodedText = text ? `?text=${encodeURIComponent(text)}` : ''
	return `https://wa.me/${number}${encodedText}`
}

function SectionLabel({ text }) {
	return (
		<div className="s-label">
			<div className="s-bar" />
			<span>{text}</span>
			<div className="s-bar" />
		</div>
	)
}

function WhatsAppIcon({ size = 14 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
		</svg>
	)
}

function WebIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(200,255,0,0.08)" />
			<rect x="6" y="8" width="28" height="18" rx="3" stroke="#c8ff00" strokeWidth="1.4" />
			<path d="M14 17l-4 2 4 2M26 17l4 2-4 2M18 12l4 10" stroke="#c8ff00" strokeWidth="1.4" strokeLinecap="round" />
			<path d="M12 32h16M20 26v6" stroke="#c8ff00" strokeWidth="1.4" strokeLinecap="round" />
		</svg>
	)
}

function MarketingIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(255,255,255,0.06)" />
			<path d="M7 32V20l8-4v16M15 32V15l8-5v22M23 32V9l8 2v21" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

function SeoIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(200,255,0,0.08)" />
			<circle cx="17" cy="17" r="8" stroke="#c8ff00" strokeWidth="1.4" />
			<path d="M23 23l7 7" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" />
			<path d="M13 15h8M13 18h6M13 21h4" stroke="#c8ff00" strokeWidth="1.4" strokeLinecap="round" />
		</svg>
	)
}

function SocialIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(255,255,255,0.06)" />
			<circle cx="10" cy="20" r="4" stroke="white" strokeWidth="1.4" />
			<circle cx="30" cy="10" r="4" stroke="white" strokeWidth="1.4" />
			<circle cx="30" cy="30" r="4" stroke="white" strokeWidth="1.4" />
			<path d="M14 18l12-6M14 22l12 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
		</svg>
	)
}

function BrandIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(200,255,0,0.08)" />
			<path d="M20 5l3.5 10h10.5L25 21l3.5 10L20 25l-8.5 6L15 21 6 15h10.5z" stroke="#c8ff00" strokeWidth="1.4" strokeLinejoin="round" />
		</svg>
	)
}

function ItIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(255,255,255,0.06)" />
			<rect x="6" y="12" width="28" height="17" rx="3" stroke="white" strokeWidth="1.4" />
			<path d="M12 21h5M20 16v10M27 18l-4 4 4 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

function LeadsIcon() {
	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
			<rect width="40" height="40" rx="9" fill="rgba(200,255,0,0.1)" />
			<path d="M8 30C8 20 14 13 20 13C26 13 32 20 32 30" stroke="#c8ff00" strokeWidth="1.4" strokeLinecap="round" />
			<circle cx="20" cy="13" r="4" stroke="#c8ff00" strokeWidth="1.4" />
			<path d="M11 28h18M8 33h24" stroke="#c8ff00" strokeWidth="1.4" strokeLinecap="round" />
			<path d="M15 24l5-4 5 4" stroke="#c8ff00" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

function ServicesSection() {
	const services = [
		{
			title: 'Web Development',
			description: 'Custom, high-performance websites and apps using modern frameworks and scalable backends.',
			tags: ['React', 'Next.js', 'Node.js'],
			Icon: WebIcon,
			accent: '#c8ff00',
		},
		{
			title: 'Digital Marketing',
			description: 'Data-driven campaigns that grow visibility, leads, and revenue across every digital channel.',
			tags: ['Google Ads', 'Meta Ads', 'Analytics'],
			Icon: MarketingIcon,
			accent: 'rgba(255,255,255,0.6)',
		},
		{
			title: 'SEO Optimization',
			description: 'Technical and content SEO to rank higher, get found faster, and capture high-intent traffic.',
			tags: ['On-Page', 'Technical', 'Backlinks'],
			Icon: SeoIcon,
			accent: '#c8ff00',
		},
		{
			title: 'Social Media',
			description: 'Compelling content and growth-focused execution that builds engagement and brand recall.',
			tags: ['Instagram', 'LinkedIn', 'YouTube'],
			Icon: SocialIcon,
			accent: 'rgba(255,255,255,0.6)',
		},
		{
			title: 'Brand Identity',
			description: 'Logos, visual systems, and guidelines that make your brand instantly recognizable.',
			tags: ['Logo', 'Brand Guide', 'Design'],
			Icon: BrandIcon,
			accent: '#c8ff00',
		},
		{
			title: 'IT Solutions',
			description: 'Cloud, cybersecurity, infrastructure, and managed support for reliable business operations.',
			tags: ['Cloud', 'Security', 'Support'],
			Icon: ItIcon,
			accent: 'rgba(255,255,255,0.6)',
		},
	]

	const leadsHref = toWhatsAppUrl(DEFAULT_PHONE, 'Hi Beemyle, I need Leads Generation service')

	return (
		<section id="services">
			<div className="services-wrap">
				<SectionLabel text="What We Do" />
				<h2 className="sec-title">
					Services Built
					<br />
					<span className="lime">For Real Results</span>
				</h2>
				<p className="sec-desc">
					Every service is engineered to move the needle with better traffic, stronger conversion, and
					lasting brand equity.
				</p>

				<div className="svc-grid">
					{services.map((service) => (
						<article key={service.title} className="svc-card" style={{ '--svc-c': service.accent }}>
							<service.Icon />
							<a href="#contact" className="svc-title">
								{service.title}
								<span>↗</span>
							</a>
							<p>{service.description}</p>

							<div className="tags">
								{service.tags.map((tag) => (
									<span key={tag} className="tag">
										{tag}
									</span>
								))}
							</div>
						</article>
					))}

					<div className="leads-card">
						<div className="leads-icon-wrap">
							<LeadsIcon />
							<span className="leads-badge">Featured</span>
						</div>

						<div className="leads-body">
							<a href="#contact" className="leads-title">
								Leads Generation
								<span>↗</span>
							</a>
							<p>
								High-quality, ready-to-convert leads delivered to your CRM powered by precision Meta and
								Google ad funnels, laser-targeted audiences, and conversion-optimized landing pages.
							</p>
						</div>

						<div className="leads-right">
							<div className="leads-tags">
								{['Meta Ads', 'Google Ads', 'Lead Funnels', 'Landing Pages', 'CRM'].map((tag) => (
									<span key={tag} className="leads-tag">
										{tag}
									</span>
								))}
							</div>

							<a className="btn-leads" href={leadsHref} target="_blank" rel="noreferrer">
								<WhatsAppIcon size={13} />
								Get Leads Now
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
