import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { haptic } from '../utils/haptic'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => { haptic('medium'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          aria-label="Back to top"
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-lg transition-colors"
          style={{
            background: 'rgba(0,106,255,0.9)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 20px rgba(0,106,255,0.4)',
          }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
