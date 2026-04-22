import { useEffect, useRef, useState } from 'react'

function ParticleCanvas() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) {
			return undefined
		}

		const ctx = canvas.getContext('2d')
		if (!ctx) {
			return undefined
		}

		const resize = () => {
			const parentRect = canvas.parentElement?.getBoundingClientRect()
			const width = parentRect?.width ?? window.innerWidth
			const height = parentRect?.height ?? window.innerHeight
			canvas.width = width
			canvas.height = height
		}

		resize()

		const points = Array.from({ length: 50 }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			r: Math.random() * 0.7 + 0.2,
			dx: (Math.random() - 0.5) * 0.25,
			dy: (Math.random() - 0.5) * 0.25,
			o: Math.random() * 0.3 + 0.06,
			lime: Math.random() > 0.82,
		}))

		let frameId = 0
		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			points.forEach((point) => {
				ctx.beginPath()
				ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2)
				ctx.fillStyle = point.lime ? '#c8ff00' : '#ffffff'
				ctx.globalAlpha = point.o
				ctx.fill()

				point.x += point.dx
				point.y += point.dy

				if (point.x < 0 || point.x > canvas.width) {
					point.dx *= -1
				}

				if (point.y < 0 || point.y > canvas.height) {
					point.dy *= -1
				}
			})

			for (let i = 0; i < points.length; i += 1) {
				for (let j = i + 1; j < points.length; j += 1) {
					const p1 = points[i]
					const p2 = points[j]
					const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y)

					if (distance < 80) {
						ctx.beginPath()
						ctx.moveTo(p1.x, p1.y)
						ctx.lineTo(p2.x, p2.y)
						ctx.globalAlpha = (1 - distance / 80) * 0.04
						ctx.strokeStyle = '#ffffff'
						ctx.lineWidth = 0.4
						ctx.stroke()
					}
				}
			}

			ctx.globalAlpha = 1
			frameId = window.requestAnimationFrame(draw)
		}

		draw()
		window.addEventListener('resize', resize)

		return () => {
			window.cancelAnimationFrame(frameId)
			window.removeEventListener('resize', resize)
		}
	}, [])

	return <canvas id="particles" ref={canvasRef} />
}

function ArrowRightIcon({ size = 14 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<line x1="5" y1="12" x2="19" y2="12" />
			<polyline points="12 5 19 12 12 19" />
		</svg>
	)
}

function RocketIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
		</svg>
	)
}

function OrbitRocketIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
		</svg>
	)
}

function OrbitTargetIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="6" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	)
}

function OrbitBarIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
			<line x1="18" y1="20" x2="18" y2="10" />
			<line x1="12" y1="20" x2="12" y2="4" />
			<line x1="6" y1="20" x2="6" y2="14" />
		</svg>
	)
}

function OrbitGlobeIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<circle cx="12" cy="12" r="10" />
			<path d="M2 12h20" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	)
}

function OrbitBoltIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
		</svg>
	)
}

function OrbitIdeaIcon() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<line x1="9" y1="18" x2="15" y2="18" />
			<line x1="10" y1="22" x2="14" y2="22" />
			<path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
		</svg>
	)
}

function HeroOrbitIcons() {
	const icons = [
		{ Icon: OrbitRocketIcon, angle: 0 },
		{ Icon: OrbitTargetIcon, angle: 60 },
		{ Icon: OrbitBarIcon, angle: 120 },
		{ Icon: OrbitGlobeIcon, angle: 180 },
		{ Icon: OrbitBoltIcon, angle: 240 },
		{ Icon: OrbitIdeaIcon, angle: 300 },
	]

	return (
		<div className="orbit-icons">
			{icons.map(({ Icon, angle }) => {
				const radius = 43
				const radian = (angle * Math.PI) / 180
				const x = 50 + radius * Math.cos(radian)
				const y = 50 + radius * Math.sin(radian)

				return (
					<div
						key={angle}
						className="orbit-icon"
						style={{
							left: `calc(${x}% - 18px)`,
							top: `calc(${y}% - 18px)`,
							animationDuration: `${2.8 + angle * 0.005}s`,
							animationDelay: `${angle * 0.007}s`,
						}}
					>
						<Icon />
					</div>
				)
			})}
		</div>
	)
}

function HeroSection() {
	const words = [
		'IT Solutions',
		'Web Development',
		'Digital Marketing',
		'Brand Growth',
		'Leads Generation',
	]

	const [wordIndex, setWordIndex] = useState(0)
	const [displayText, setDisplayText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		const currentWord = words[wordIndex]
		let timer

		if (!isDeleting) {
			if (displayText.length < currentWord.length) {
				timer = window.setTimeout(() => {
					setDisplayText(currentWord.slice(0, displayText.length + 1))
				}, 72)
			} else {
				timer = window.setTimeout(() => {
					setIsDeleting(true)
				}, 1800)
			}
		} else if (displayText.length > 0) {
			timer = window.setTimeout(() => {
				setDisplayText(displayText.slice(0, -1))
			}, 35)
		} else {
			setIsDeleting(false)
			setWordIndex((prev) => (prev + 1) % words.length)
		}

		return () => {
			window.clearTimeout(timer)
		}
	}, [displayText, isDeleting, wordIndex, words])

	return (
		<section id="hero">
			<ParticleCanvas />

			<div className="hero-glow1" />

			<div className="hero-inner">
				<div className="hero-copy fade-up">
					<div className="hero-badge">
						<div className="hero-dot" />
						<span>Trusted Digital Partner</span>
					</div>

					<h1 className="hero-title">
						We Deliver
						<span className="hero-lime">
							{displayText}
							<span className="hero-cursor">|</span>
						</span>
					</h1>

					<p className="hero-desc">
						Beemyle is your full-stack digital partner from building high-performance websites to
						scaling your brand with data-driven marketing across every channel.
					</p>

					<div className="hero-btns">
						<a href="#contact" className="btn-primary">
							<RocketIcon />
							Start Your Project
						</a>

						<a href="#work" className="btn-outline">
							<ArrowRightIcon />
							View Our Work
						</a>
					</div>
				</div>

				<div className="hero-viz">
					<div className="orbit-wrap">
						<div className="ring ring1" />
						<div className="ring ring2" />
						<div className="ring ring3" />
						<div className="ring ring4" />
						<div className="orbit-label">BEEMYLE</div>
						<HeroOrbitIcons />
					</div>
				</div>
			</div>

			<div className="scroll-hint">
				<span>Scroll</span>
				<div className="scroll-line" />
			</div>
		</section>
	)
}

export default HeroSection
