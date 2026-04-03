import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const TRADES = [
  { slug: 'electricians', label: 'Electricians', icon: '⚡' },
  { slug: 'plumbers',     label: 'Plumbers',     icon: '🔧' },
  { slug: 'builders',     label: 'Builders',     icon: '🏗️' },
  { slug: 'roofers',      label: 'Roofers',       icon: '🏠' },
  { slug: 'painters',     label: 'Painters',      icon: '🖌️' },
  { slug: 'concreters',   label: 'Concreters',    icon: '🧱' },
  { slug: 'carpenters',   label: 'Carpenters',    icon: '🪚' },
  { slug: 'glaziers',     label: 'Glaziers',      icon: '🪟' },
  { slug: 'landscapers',  label: 'Landscapers',   icon: '🌿' },
]

// Per-trade reason why Zeller is the pick — keeps the result copy useful
const REASONS = {
  electricians: 'Switchboards, roof voids, and new estate MDPs have no customer WiFi. Zeller\'s Optus SIM keeps you connected.',
  plumbers:     'Emergency call-outs can\'t wait for bank transfers. Zeller settles same-day so you can buy parts the same afternoon.',
  builders:     'Large progress payments and stage invoices are Zeller\'s sweet spot — payment links for deposits, 1.4% on site.',
  roofers:      'Rooftop sites and storm-damage insurance work need connectivity independent of the customer\'s network. SIM is essential.',
  painters:     'Empty houses have no WiFi. Zeller\'s SIM + payment links for deposits before the first brush stroke.',
  concreters:   'Collect the 50% deposit before the pour using Zeller payment links. Same-day settlement covers your ready-mix order.',
  carpenters:   'Workshop and on-site work without customer WiFi — Zeller SIM handles payment at practical completion.',
  glaziers:     'Emergency glazing happens at all hours in high-rises with no site WiFi. Zeller SIM on Optus keeps payments moving wherever the glass is.',
  landscapers:  'New estate landscaping has no utilities. Zeller SIM is the only reliable payment option on undeveloped land.',
}

export default function HeroTradeSelector() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="mt-7">
      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
        Find the best EFTPOS for your trade
      </p>

      {/* Trade pill grid — wraps on desktop, scrolls on mobile */}
      <div className="flex flex-wrap gap-2 sm:max-w-xl">
        {TRADES.map(t => (
          <button
            key={t.slug}
            type="button"
            onClick={() => setSelected(selected?.slug === t.slug ? null : t)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95 ${
              selected?.slug === t.slug
                ? 'bg-white text-brand-dark border-white shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/20 hover:border-white/30'
            }`}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Result panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.slug}
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 6, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-5 max-w-xl">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{selected.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug">
                    {selected.label} → <span className="text-brand-blue">Zeller Terminal 1</span>
                  </p>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    {REASONS[selected.slug]}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Link
                      to={`/trades/${selected.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-xl hover:bg-blue-600 active:bg-blue-700 transition-colors"
                    >
                      {selected.label} guide →
                    </Link>
                    <Link
                      to="/providers/zeller"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/15 text-white text-xs font-semibold rounded-xl hover:bg-white/25 transition-colors"
                    >
                      Zeller review →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
