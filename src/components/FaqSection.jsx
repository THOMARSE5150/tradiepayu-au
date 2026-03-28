import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { haptic } from '../utils/haptic'

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="border-b border-slate-100 last:border-0"
    >
      <button
        onClick={() => { haptic('light'); setOpen(v => !v) }}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${open ? 'text-brand-blue' : 'text-brand-dark'}`}>
          {item.q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${open ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
          {open ? <Minus size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection({ items, title = 'Frequently Asked Questions' }) {
  return (
    <section id="faq" className="section container-page">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold text-brand-dark mb-6"
      >
        {title}
      </motion.h2>
      <div className="lg-light rounded-2xl overflow-hidden">
        {items.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
