import '../../App.css'
import NavbarSection from './sections/NavbarSection'
import HeroSection from './sections/HeroSection'
import TickerSection from './sections/TickerSection'
import StatsSection from './sections/StatsSection'
import ServicesSection from './sections/ServicesSection'
import AboutSection from './sections/AboutSection'
import WorkSection from './sections/WorkSection'
import TechnologiesSection from './sections/TechnologiesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import CallToActionSection from './sections/CallToActionSection'
import FooterSection from './sections/FooterSection'

function HomePage({ siteConfig }) {
  return (
    <div className="app-shell">
      <NavbarSection />
      <HeroSection />
      <TickerSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <WorkSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <CallToActionSection siteConfig={siteConfig} />
      <FooterSection siteConfig={siteConfig} />
    </div>
  )
}

export default HomePage
