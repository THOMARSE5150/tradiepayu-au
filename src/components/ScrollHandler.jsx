import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Give the page a tick to render before scrolling to the anchor
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // Element not yet in DOM — wait for render
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
