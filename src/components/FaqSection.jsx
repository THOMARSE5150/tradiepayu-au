import { motion } from 'framer-motion'

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
      <div className="divide-y divide-slate-100 lg-light rounded-2xl overflow-hidden">
        {items.map((item, i) => (
          <details
            key={i}
            className="faq-item group px-5 transition-all"
            style={{ overflow: 'hidden' }}
          >
            <summary className="faq-item-summary py-4 font-semibold cursor-pointer text-brand-dark group-open:text-brand-blue flex justify-between items-center transition-colors duration-200">
              {item.q}
              <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">▾</span>
            </summary>
            <div className="overflow-hidden transition-all duration-300">
              <p className="pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
