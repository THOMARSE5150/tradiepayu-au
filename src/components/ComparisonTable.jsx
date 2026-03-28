import { motion } from 'framer-motion'

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: 'easeOut' },
  }),
}

export default function ComparisonTable({ headers, rows }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {/* ── Mobile: stacked cards (hidden on md+) ── */}
      <div className="md:hidden space-y-3">
        {rows.map((row, ri) => (
          <motion.div
            key={ri}
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
                key={ri}
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
