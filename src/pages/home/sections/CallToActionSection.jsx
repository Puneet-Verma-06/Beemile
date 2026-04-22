import { useCallback, useEffect, useState } from 'react'

const DEFAULT_EMAIL = 'beemyletechnologies@gmail.com'
const DEFAULT_PHONE = '+91 74520 19358'
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '/api/contact'
const HEALTH_API_URL =
	import.meta.env.VITE_HEALTH_API_URL ||
	(CONTACT_API_URL.endsWith('/contact') ? `${CONTACT_API_URL.slice(0, -'/contact'.length)}/health` : '/api/health')

function sanitizePhoneNumber(phone) {
	return String(phone ?? '')
		.replace(/[^\d]/g, '')
		.replace(/^0+/, '')
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

function MailIcon() {
	return (
		<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
			<polyline points="22,6 12,13 2,6" />
		</svg>
	)
}

function PhoneIcon() {
	return (
		<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.86-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	)
}

function SuccessCheckIcon() {
	return (
		<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
			<polyline points="20 6 9 17 4 12" />
		</svg>
	)
}

function CallToActionSection({ siteConfig }) {
	const contactEmail = siteConfig?.contactEmail || DEFAULT_EMAIL
	const contactPhone = siteConfig?.contactPhone || DEFAULT_PHONE

	const [submitted, setSubmitted] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formError, setFormError] = useState('')
	const [isHealthChecking, setIsHealthChecking] = useState(true)
	const [healthState, setHealthState] = useState('checking')
	const [healthMessage, setHealthMessage] = useState('Checking mail service...')
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	})

	const checkMailHealth = useCallback(async () => {
		setIsHealthChecking(true)
		setHealthState('checking')
		setHealthMessage('Checking mail service...')

		try {
			const response = await fetch(HEALTH_API_URL, {
				method: 'GET',
				cache: 'no-store',
			})

			if (!response.ok) {
				throw new Error('Health endpoint unavailable')
			}

			const payload = await response.json().catch(() => null)

			if (payload?.ok && payload?.mailConfigured !== false) {
				setHealthState('online')
				setHealthMessage('Mail service is online')
				return
			}

			setHealthState('offline')
			setHealthMessage('Mail service reachable, but not configured')
		} catch {
			setHealthState('offline')
			setHealthMessage('Mail service is currently unavailable')
		} finally {
			setIsHealthChecking(false)
		}
	}, [])

	useEffect(() => {
		checkMailHealth()
	}, [checkMailHealth])

	const handleFieldChange = (event) => {
		const { name, value } = event.target
		if (formError) {
			setFormError('')
		}
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
			setFormError('Please fill Name, Email and Message')
			return
		}

		setIsSubmitting(true)
		setFormError('')

		try {
			const response = await fetch(CONTACT_API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name.trim(),
					email: formData.email.trim(),
					phone: formData.phone.trim(),
					service: formData.service,
					message: formData.message.trim(),
				}),
			})

			if (!response.ok) {
				if (response.status === 502) {
					throw new Error('Contact service is not reachable. In development, run npm run dev so both client and API are started.')
				}

				const errorPayload = await response.json().catch(() => null)
				throw new Error(errorPayload?.error || 'Failed to send your message. Please try again.')
			}

			setSubmitted(true)
		} catch (error) {
			setFormError(error instanceof Error ? error.message : 'Failed to send your message. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const resetForm = () => {
		setFormData({
			name: '',
			email: '',
			phone: '',
			service: '',
			message: '',
		})
		setFormError('')
		setSubmitted(false)
	}

	return (
		<section id="contact">
			<div className="contact-grid">
				<div>
					<SectionLabel text="Get In Touch" />
					<h2 className="sec-title contact-title">
						Ready to Scale
						<br />
						<span className="lime">Your Business?</span>
					</h2>

					<p className="contact-copy">
						Free consultation, no strings attached. We respond within 24 hours.
					</p>

					<a href={`mailto:${contactEmail}`} className="contact-info-card">
						<div className="ci-ico">
							<MailIcon />
						</div>
						<div>
							<div className="ci-label">Email Us</div>
							<div className="ci-val">{contactEmail}</div>
						</div>
					</a>

					<a href={`https://wa.me/${sanitizePhoneNumber(contactPhone) || '917452019358'}`} target="_blank" rel="noreferrer" className="contact-info-card">
						<div className="ci-ico">
							<WhatsAppIcon size={17} />
						</div>
						<div>
							<div className="ci-label">WhatsApp</div>
							<div className="ci-val">{contactPhone}</div>
						</div>
					</a>

					<a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="contact-info-card">
						<div className="ci-ico">
							<PhoneIcon />
						</div>
						<div>
							<div className="ci-label">Call Us</div>
							<div className="ci-val">{contactPhone}</div>
						</div>
					</a>
				</div>

				<div className="form-box">
					{!submitted ? (
						<form onSubmit={handleSubmit}>
							<div className="form-title">Send Us a Message</div>

							<div className={`api-status-badge ${healthState}`}>
								<span className="api-status-dot" aria-hidden="true" />
								<span className="api-status-text">{healthMessage}</span>
								<button
									type="button"
									className="api-status-recheck"
									onClick={checkMailHealth}
									disabled={isHealthChecking}
								>
									{isHealthChecking ? 'Checking...' : 'Recheck'}
								</button>
							</div>

							<div className="form-row">
								<label className="form-label" htmlFor="f-name">
									Full Name *
								</label>
								<input
									id="f-name"
									className="form-input"
									type="text"
									name="name"
									placeholder="Your full name"
									value={formData.name}
									onChange={handleFieldChange}
								/>
							</div>

							<div className="form-row">
								<label className="form-label" htmlFor="f-email">
									Email Address *
								</label>
								<input
									id="f-email"
									className="form-input"
									type="email"
									name="email"
									placeholder="you@company.com"
									value={formData.email}
									onChange={handleFieldChange}
								/>
							</div>

							<div className="form-row">
								<label className="form-label" htmlFor="f-phone">
									Phone Number
								</label>
								<input
									id="f-phone"
									className="form-input"
									type="tel"
									name="phone"
									placeholder="+91 XXXXX XXXXX"
									value={formData.phone}
									onChange={handleFieldChange}
								/>
							</div>

							<div className="form-row">
								<label className="form-label" htmlFor="f-service">
									Service Needed
								</label>
								<select
									id="f-service"
									className="form-input"
									name="service"
									value={formData.service}
									onChange={handleFieldChange}
								>
									<option value="">Select a service</option>
									<option value="Web Development">Web Development</option>
									<option value="Digital Marketing">Digital Marketing</option>
									<option value="SEO Optimization">SEO Optimization</option>
									<option value="Social Media Management">Social Media Management</option>
									<option value="Brand Identity">Brand Identity</option>
									<option value="IT Solutions">IT Solutions</option>
									<option value="Leads Generation">Leads Generation</option>
									<option value="Other">Other</option>
								</select>
							</div>

							<div className="form-row">
								<label className="form-label" htmlFor="f-msg">
									Message *
								</label>
								<textarea
									id="f-msg"
									className="form-input"
									rows="4"
									name="message"
									placeholder="Tell us about your project..."
									value={formData.message}
									onChange={handleFieldChange}
								/>
							</div>

							{formError ? <p className="form-error">{formError}</p> : null}

							<button className="btn-submit" type="submit" disabled={isSubmitting}>
								<MailIcon />
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</button>

							<p className="form-note">Your message will be delivered directly to our inbox.</p>
						</form>
					) : (
						<div className="success-box">
							<div className="success-icon">
								<SuccessCheckIcon />
							</div>
							<div className="success-title">Message Sent!</div>
							<p className="success-copy">We'll get back to you within 24 hours.</p>
							<button type="button" className="btn-again" onClick={resetForm}>
								Send Another
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default CallToActionSection
