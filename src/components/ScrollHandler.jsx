import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = 'G-DW6EPTN6N1'

export default function ScrollHandler() {
  const { pathname, hash } = useLocation()

  // Fire a GA4 page_view on every SPA route change.
  // The gtag snippet in index.html only fires once on initial load —
  // without this, client-side navigations are invisible to GA4.
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, { page_path: pathname })
    }
  }, [pathname])

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        const timer = setTimeout(() => {
          const el2 = document.getElementById(id)
          if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        return () => clearTimeout(timer)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
