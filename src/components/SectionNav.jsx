import { useState, useEffect, useRef } from 'react'

/**
 * Sticky sub-nav that pins below the main Nav (z-50) once the hero scrolls out.
 * Shows section anchor links + an optional CTA slot.
 *
 * Props:
 *   sections  [{id, label}]  — anchor sections to link
 *   cta       node           — optional right-side CTA (e.g. AffiliateButton)
 */
export default function SectionNav({ sections = [], cta }) {
  const [visible, setVisible] = useState(false)
  const [active, setActive]   = useState(sections[0]?.id ?? '')
  const ticking = useRef(false)

  useEffect(() => {
    const ids = sections.map(s => s.id)

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 200)

        // Highlight the section currently in view
        let found = ids[0]
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top <= 120) found = id
        }
        setActive(found)
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  if (!visible) return null

  return (
    <div className="sticky top-14 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container-page flex items-center justify-between gap-2 py-1.5 overflow-x-auto">
        <nav className="flex items-center gap-0.5 flex-nowrap overflow-x-auto no-scrollbar">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                active === s.id
                  ? 'text-brand-blue bg-blue-50'
                  : 'text-slate-500 hover:text-brand-blue hover:bg-slate-50'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        {cta && <div className="flex-shrink-0 ml-2">{cta}</div>}
      </div>
    </div>
  )
}
