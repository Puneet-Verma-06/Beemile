import NavbarSection from '../home/sections/NavbarSection'

function AboutStatCard({ value, label }) {
  return (
    <article className="about-page-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </article>
  )
}

function AboutValueCard({ title, description }) {
  return (
    <article className="about-page-value-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}

function AboutPage() {
  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '80+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'No hidden fees, no surprises. You always know what we are doing and why.',
    },
    {
      title: 'Quality First',
      description: 'We never cut corners. Every deliverable meets the highest standard before it reaches you.',
    },
    {
      title: 'Results Driven',
      description: 'We measure success by your business outcomes traffic, leads, and revenue.',
    },
    {
      title: 'Long-Term Focus',
      description: 'We build for sustainable growth, not quick wins that fade.',
    },
  ]

  return (
    <div className="app-shell about-page">
      <NavbarSection />

      <section className="about-page-hero">
        <div className="about-page-container">
          <a href="#hero" className="about-page-back">
            {'<- Back'}
          </a>

          <span className="about-page-badge">Company</span>

          <h1 className="about-page-title">
            About <span>Beemyle</span>
          </h1>

          <p className="about-page-subtitle">
            We are a full-stack IT and digital marketing agency built on one belief: businesses deserve a
            partner that actually cares about their growth.
          </p>
        </div>
      </section>

      <section className="about-page-story">
        <div className="about-page-container about-page-story-grid">
          <div>
            <h2 className="about-page-section-title">
              Our <span>Story</span>
            </h2>

            <p>
              Beemyle was founded with a single mission: to be the digital partner that small and
              mid-sized businesses actually need. Not just a vendor, but a team that is invested in your
              success.
            </p>

            <p>
              We combine technical expertise across web development, IT infrastructure, and digital
              marketing with a deep understanding of what drives business growth. Every strategy we build
              is rooted in data, creativity, and results.
            </p>

            <p>
              From our first client to our 150th project, we have stayed true to one principle your growth
              is our growth.
            </p>
          </div>

          <div className="about-page-stats-grid">
            {stats.map((stat) => (
              <AboutStatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-values">
        <div className="about-page-container">
          <h2 className="about-page-section-title about-page-center">
            Our <span>Values</span>
          </h2>

          <div className="about-page-values-grid">
            {values.map((value) => (
              <AboutValueCard key={value.title} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-cta-wrap">
        <div className="about-page-container">
          <div className="about-page-cta">
            <h2>Lets Work Together</h2>
            <p>Ready to partner with a team that is as invested in your success as you are?</p>
            <a href="#contact" className="about-page-cta-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
