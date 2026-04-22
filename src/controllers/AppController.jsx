import { useEffect, useState } from 'react'
import AboutPage from '../pages/about/AboutPage'
import HomePage from '../pages/home/HomePage'
import siteConfig from '../models/siteConfig'

function resolveRoute() {
  const hash = window.location.hash || ''
  if (hash.startsWith('#/')) {
    const route = hash.slice(1).split('?')[0].toLowerCase()
    if (route === '/about') {
      return 'about'
    }

    return 'home'
  }

  const pathname = window.location.pathname.toLowerCase()
  if (pathname === '/about' || pathname.endsWith('/about')) {
    return 'about'
  }

  return 'home'
}

function AppController() {
  const [route, setRoute] = useState(resolveRoute)

  useEffect(() => {
    const onLocationChange = () => {
      setRoute(resolveRoute())
    }

    window.addEventListener('hashchange', onLocationChange)
    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('hashchange', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  if (route === 'about') {
    return <AboutPage siteConfig={siteConfig} />
  }

  return <HomePage siteConfig={siteConfig} />
}

export default AppController
