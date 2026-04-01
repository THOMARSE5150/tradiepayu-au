import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb({ crumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center flex-wrap gap-x-1 gap-y-0.5 text-[11px] sm:text-xs text-white/65">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={i} className="flex items-center gap-1" aria-current={isLast ? 'page' : undefined}>
              {i > 0 && <ChevronRight size={11} className="text-white/40 flex-shrink-0" />}
              {isLast
                ? <span className="text-white/70">{c.label}</span>
                : <Link to={c.href} className="text-white/75 hover:text-white transition-colors">{c.label}</Link>
              }
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
