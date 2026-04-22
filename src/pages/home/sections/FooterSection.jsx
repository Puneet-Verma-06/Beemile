const DEFAULT_EMAIL = 'beemyletechnologies@gmail.com'
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

function WhatsAppIcon({ size = 14 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
		</svg>
	)
}

function MailIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
			<polyline points="22,6 12,13 2,6" />
		</svg>
	)
}

function PhoneIcon() {
	return (
		<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.86-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	)
}

function LinkedInIcon() {
	return (
		<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	)
}

function InstagramIcon() {
	return (
		<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect x="2" y="2" width="20" height="20" rx="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
		</svg>
	)
}

function XIcon() {
	return (
		<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	)
}

function YouTubeIcon() {
	return (
		<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
			<polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
		</svg>
	)
}

function FooterSection({ siteConfig }) {
	const contactEmail = siteConfig?.contactEmail || DEFAULT_EMAIL
	const contactPhone = siteConfig?.contactPhone || DEFAULT_PHONE
	const talkHref = toWhatsAppUrl(contactPhone, 'Hi Beemyle, I want to discuss a project')

	const socialLinks = [
		{ title: 'LinkedIn', href: 'https://linkedin.com/company/beemyle', Icon: LinkedInIcon },
		{ title: 'Instagram', href: 'https://instagram.com/beemyle', Icon: InstagramIcon },
		{ title: 'X', href: 'https://twitter.com/beemyle', Icon: XIcon },
		{ title: 'YouTube', href: 'https://youtube.com/@beemyle', Icon: YouTubeIcon },
		{ title: 'WhatsApp', href: talkHref, Icon: WhatsAppIcon },
	]

	const services = [
		'Web Development',
		'Digital Marketing',
		'SEO Optimization',
		'Social Media',
		'Brand Identity',
		'IT Solutions',
		'Leads Generation',
	]

	const companyLinks = ['About Us', 'Our Work', 'Blog', 'Careers', 'Contact']

	return (
		<footer>
			<div className="footer-grid">
				<div>
					<div className="footer-brand">BEEMYLE</div>
					<p className="footer-about">
						Your full-stack digital partner for IT solutions and marketing that drives real, measurable
						growth.
					</p>

					<div className="socials">
						{socialLinks.map(({ title, href, Icon }) => (
							<a key={title} href={href} target="_blank" rel="noreferrer" className="soc-btn" title={title}>
								<Icon size={15} />
							</a>
						))}
					</div>
				</div>

				<div className="foot-col">
					<h4>Services</h4>
					<ul>
						{services.map((service) => (
							<li key={service}>
								<a href="#services">{service}</a>
							</li>
						))}
					</ul>
				</div>

				<div className="foot-col">
					<h4>Company</h4>
					<ul>
						{companyLinks.map((link) => (
							<li key={link}>
								<a href="#hero">{link}</a>
							</li>
						))}
					</ul>
				</div>

				<div className="foot-col">
					<h4>Contact</h4>
					<ul>
						<li>
							<a href={`mailto:${contactEmail}`}>
								<MailIcon />
								{contactEmail}
							</a>
						</li>
						<li>
							<a href={`tel:${contactPhone.replace(/\s+/g, '')}`}>
								<PhoneIcon />
								{contactPhone}
							</a>
						</li>
						<li>
							<a href={talkHref} target="_blank" rel="noreferrer">
								<WhatsAppIcon size={13} />
								WhatsApp Us
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-bottom">
				<span>Copyright 2026 Beemyle Technologies. All rights reserved.</span>
				<div>
					<a href="#hero">Privacy Policy</a>
					<a href="#hero">Terms of Service</a>
				</div>
			</div>
		</footer>
	)
}

export default FooterSection
