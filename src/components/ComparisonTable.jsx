import { useState } from 'react'
import { motion } from 'framer-motion'

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: 'easeOut' },
  }),
}

export default function ComparisonTable({ headers = [], rows = [], pickable = false }) {
  const [picking, setPicking] = useState(false)
  const [selected, setSelected] = useState([])

  function toggleSelect(id) {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : prev.length < 2 ? [...prev, id] : prev
    )
  }

  const displayRows = pickable && picking && selected.length === 2
    ? rows.filter(r => selected.includes(r.id))
    : rows

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {/* ── Mobile: stacked cards (hidden on md+) ── */}
      <div className="md:hidden">
        {pickable && (
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-500">
              {picking && selected.length < 2 ? `Select ${2 - selected.length} more` : picking && selected.length === 2 ? 'Showing 2 selected' : ''}
            </span>
            <button
              type="button"
              onClick={() => { setPicking(v => !v); setSelected([]) }}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${picking ? 'bg-brand-blue text-white border-brand-blue' : 'border-slate-200 text-brand-blue'}`}
            >
              {picking ? 'Show all ×' : 'Compare 2 →'}
            </button>
          </div>
        )}
        <div className="space-y-3">
          {displayRows.map((row, ri) => (
            <motion.div
              key={row.id ?? ri}
              custom={ri}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className={`rounded-2xl overflow-hidden ${
                row.highlight
                  ? 'border-2 border-brand-blue shadow-[0_4px_16px_rgba(0,106,255,0.12)]'
                  : 'border border-slate-200'
              }`}
            >
              {row.highlight && (
                <div className="bg-brand-blue text-white text-xs font-bold px-4 py-1.5 tracking-wide">
                  ★ Top Pick
                </div>
              )}
              {pickable && picking && (
                <button
                  type="button"
                  onClick={() => row.id && toggleSelect(row.id)}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-xs font-semibold border-b transition-colors ${
                    selected.includes(row.id)
                      ? 'bg-brand-blue/10 text-brand-blue border-brand-blue/20'
                      : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-blue-50'
                  }`}
                >
                  <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${selected.includes(row.id) ? 'bg-brand-blue border-brand-blue' : 'border-slate-300'}`}>
                    {selected.includes(row.id) && <span className="text-white text-[10px] font-bold">✓</span>}
                  </span>
                  {row.label ?? `Option ${ri + 1}`}
                </button>
              )}
              <div className="divide-y divide-slate-100 bg-white/90">
                {headers.map((header, ci) => (
                  <div key={ci} className="flex items-start justify-between gap-4 px-4 py-2.5">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex-shrink-0 pt-0.5 w-28">
                      {header}
                    </span>
                    <span className={`text-sm text-right text-brand-dark leading-snug ${
                      row.highlight && ci === 0 ? 'font-semibold text-brand-blue' : ''
                    }`}>
                      {row.cells[ci]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Desktop: normal table (hidden below md) ── */}
      <div className="hidden md:block overflow-x-auto rounded-2xl lg-light">
        <table className="w-full text-sm border-collapse">
          <thead>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wide border-b border-slate-200/80 whitespace-nowrap bg-white/40"
                >
                  {h}
                </th>
              ))}
            </motion.tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <motion.tr
                key={row.id ?? ri}
                custom={ri}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ backgroundColor: row.highlight ? 'rgba(239,246,255,0.9)' : 'rgba(248,250,252,0.8)' }}
                className={`group transition-colors ${row.highlight ? 'bg-blue-50/60' : ''}`}
              >
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`py-3.5 px-4 border-b border-slate-100/80 last:border-0 ${
                      row.highlight && ci === 0
                        ? 'border-l-[3px] border-l-brand-blue font-medium'
                        : ''
                    }`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ri * 0.07 + ci * 0.02 }}
                      className="block"
                    >
                      {cell}
                    </motion.span>
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
