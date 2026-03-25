export default function FaqSection({ items, title = 'Frequently Asked Questions' }) {
  return (
    <section id="faq" className="section container-page">
      <h2 className="text-2xl font-bold text-brand-dark mb-6">{title}</h2>
      <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
        {items.map((item, i) => (
          <details key={i} className="faq-item group px-5">
            <summary className="faq-item-summary py-4 font-semibold cursor-pointer text-brand-dark group-open:text-brand-blue flex justify-between items-center">
              {item.q}
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
