import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll-triggered email capture — appears after the user reads ~40% of any
 * /blog/* article. Slides up from the bottom on mobile, appears as a fixed
 * bar at the bottom on desktop. Only shown once per session.
 */
export default function BlogReadCapture() {
  const { pathname } = useLocation()
  const isBlogPost = /^\/blog\/[^/]+/.test(pathname)

  const [visible, setVisible]   = useState(false)
  const [email, setEmail]       = useState('')
  const [sent, setSent]         = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Reset per post, but not if already dismissed this session
  useEffect(() => {
    setVisible(false)
    setSent(false)
  }, [pathname])

  const handleScroll = useCallback(() => {
    if (!isBlogPost || dismissed) return
    const el = document.documentElement
    const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight)
    if (scrolled >= 0.4) setVisible(true)
  }, [isBlogPost, dismissed])

  useEffect(() => {
    if (!isBlogPost || dismissed) return
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isBlogPost, dismissed, handleScroll])

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    // Configure VITE_EMAIL_ENDPOINT in .env (e.g. a Cloudflare Worker or Resend webhook)
    const endpoint = import.meta.env.VITE_EMAIL_ENDPOINT
    if (endpoint) {
      try { await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, source: pathname }) }) } catch {}
    }
    // Always persist locally as fallback
    try {
      const existing = JSON.parse(localStorage.getItem('tp_subscribers') || '[]')
      if (!existing.includes(email)) localStorage.setItem('tp_subscribers', JSON.stringify([...existing, email]))
    } catch {}
    setSent(true)
    setTimeout(dismiss, 2500)
  }

  if (!isBlogPost || !visible) return null

  return (
    <div
      role="dialog"
      aria-label="Get the EFTPOS comparison guide"
      className="fixed bottom-16 sm:bottom-0 left-0 right-0 z-40 animate-slide-up"
    >
      <div className="mx-auto max-w-2xl sm:max-w-none sm:mx-0">
        <div className="bg-brand-dark border-t border-white/10 shadow-2xl px-4 py-3 sm:py-4">
          <div className="container-page flex flex-col sm:flex-row sm:items-center gap-3">

            {sent ? (
              <p className="text-green-400 text-sm font-semibold text-center sm:text-left flex-1">
                ✓ You&apos;re in — we&apos;ll send the guide shortly.
              </p>
            ) : (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold leading-snug">
                    Free EFTPOS rate comparison guide
                  </p>
                  <p className="text-white/50 text-xs mt-0.5 hidden sm:block">
                    Zeller vs Square vs Stripe — all rates, fees, and trade scenarios. One email, no spam.
                  </p>
                </div>
                <form onSubmit={submit} className="flex gap-2 flex-shrink-0">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com.au"
                    required
                    className="flex-1 sm:w-52 px-3 py-2 text-sm rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-brand-blue"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-blue text-white text-sm font-semibold rounded-xl hover:bg-brand-blue/90 transition-colors flex-shrink-0"
                  >
                    Send guide
                  </button>
                </form>
              </>
            )}

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss"
              className="absolute top-2 right-3 text-white/40 hover:text-white/80 transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
