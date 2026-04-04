import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AffiliateButton from './AffiliateButton'

export default function StickySignUpBar({ providerId, providerName }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setShow(scrolled > 0.3)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between"
          style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.10)' }}
        >
          <div>
            <p className="text-xs text-slate-500 leading-none mb-0.5">Ready to set up?</p>
            <p className="text-sm font-bold text-brand-dark">{providerName}</p>
          </div>
          <AffiliateButton providerId={providerId} label="sticky-cta" intent="signup" className="btn-primary text-sm px-4 py-2">
            Sign up →
          </AffiliateButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
