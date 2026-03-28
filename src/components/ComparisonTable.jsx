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
      className="overflow-x-auto rounded-2xl lg-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
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
    </motion.div>
  )
}
