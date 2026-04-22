import { useEffect, useState } from 'react'

const TESTIMONIALS = [
	{
		text: 'Beemyle transformed our online presence completely. The website they built tripled our conversion rate within 3 months. Exceptional work.',
		name: 'Rahul Sharma',
		role: 'CEO, TechStart India',
	},
	{
		text: 'Our Instagram went from 2k to 40k followers in 6 months. Their content strategy was incredibly effective. Highly recommended!',
		name: 'Priya Mehta',
		role: 'Founder, StyleHouse',
	},
	{
		text: 'We needed a full brand refresh and Beemyle delivered beyond every expectation. Professional, creative, always on time.',
		name: 'Arjun Kapoor',
		role: 'Director, BuildersCo',
	},
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

function TestimonialsSection() {
	const [active, setActive] = useState(0)

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActive((prev) => (prev + 1) % TESTIMONIALS.length)
		}, 5000)

		return () => {
			window.clearInterval(timer)
		}
	}, [])

	return (
		<section id="testimonials">
			<div className="testi-wrap">
				<SectionLabel text="Testimonials" center />
				<h2 className="sec-title center">
					What Clients
					<br />
					<span className="lime">Say About Us</span>
				</h2>

				<div className="testi-box">
					<div className="testi-quote">&quot;</div>
					<p className="testi-text">{TESTIMONIALS[active].text}</p>
					<div className="testi-name">{TESTIMONIALS[active].name}</div>
					<div className="testi-role">{TESTIMONIALS[active].role}</div>

					<div className="testi-dots" role="tablist" aria-label="Client testimonials">
						{TESTIMONIALS.map((item, index) => (
							<button
								key={item.name}
								type="button"
								className={`dot${index === active ? ' active' : ''}`}
								onClick={() => setActive(index)}
								aria-label={`Show testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
