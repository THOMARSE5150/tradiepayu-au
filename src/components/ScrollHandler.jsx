import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_ID = 'G-DW6EPTN6N1'

export default function ScrollHandler() {
  const { pathname, hash } = useLocation()

  // Fire a GA4 page_view on every SPA route change (including initial load).
  // send_page_view is disabled in index.html so this is the single source
  // of truth for all page_view events. Must be gtag('event', 'page_view', …) —
  // repeated gtag('config', …) calls reinitialise the stream and race with
  // events dispatched in the same commit tick (e.g. hero_variant_view).
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
        send_to: GA_ID,
      })
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
