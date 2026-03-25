import { Link } from 'react-router-dom'

export default function Breadcrumb({ crumbs }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100">
      <div className="container-page">
        <ol className="breadcrumb">
          {crumbs.map((c, i) => (
            <li key={i} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
              {i < crumbs.length - 1
                ? <Link to={c.href} className="text-brand-blue hover:underline">{c.label}</Link>
                : <span className="text-slate-500">{c.label}</span>
              }
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
