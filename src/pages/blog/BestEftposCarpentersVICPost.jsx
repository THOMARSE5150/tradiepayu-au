import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Carpenters in Victoria (2026)' },
]
const faqs = [
  { q: 'What is the best EFTPOS for carpenters in Victoria?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Victorian carpenters. At 1.4% in-person with same-day settlement, it covers Melbourne new estate framing, heritage restoration in inner suburbs, and regional VIC renovation work without site WiFi.' },
  { q: 'Does Zeller work across Victoria?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Melbourne metro and most regional VIC areas. For remote sites, Square Terminal\'s offline mode handles payments when signal is unavailable.' },
  { q: 'What card payment fees do carpenters pay in VIC?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'Do I need a licence to accept card payments as a carpenter in Victoria?', a: 'No payment licence is required. You need your building practitioner registration from the Victorian Building Authority (VBA) and an ABN to open a merchant account.' },
  { q: 'How quickly do card payments settle for carpenters in VIC?', a: 'Zeller settles same-day to a Zeller Transaction Account. Victorian carpenters purchasing framing timber can access deposit funds the same afternoon they are collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Carpenters in Victoria (2026)', description: 'Best EFTPOS for Victorian carpenters — Melbourne new estate framing, heritage joinery restoration, and same-day settlement.', url: `${SITE}/blog/best-eftpos-carpenters-vic-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=630&fit=crop&crop=top&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Carpenters in Victoria (2026)', item: `${SITE}/blog/best-eftpos-carpenters-vic-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Victorian Carpenters', description: 'Best EFTPOS terminal for carpenters across Victoria.', url: `${SITE}/blog/best-eftpos-carpenters-vic-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'Victoria' }, { '@type': 'City', name: 'Melbourne' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposCarpentersVICPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Carpenters in Victoria (2026)" description="Best EFTPOS for Victorian carpenters — Melbourne new estate framing, heritage joinery restoration, and same-day settlement." canonical="/blog/best-eftpos-carpenters-vic-2026" ogType="article" geoRegion="AU-VIC" geoPlacename="Melbourne, Victoria" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&h=560&fit=crop&crop=top&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>Victoria</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Carpenters in Victoria (2026)</h1>
          <p className="hero-sub">Covering Melbourne new estate framing, Victorian/Edwardian heritage restoration, and new build carpentry across regional VIC.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">Coverage</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Carpenters in Victoria</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Victorian carpenters. At 1.4% in-person with SIM connectivity and same-day settlement, it covers Melbourne new estate framing in Melton and Craigieburn, heritage restoration in Fitzroy and Carlton, and regional VIC renovation work.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/carpenters/vic" className="text-brand-blue font-medium hover:underline">VIC Carpenters guide on TradiePay →</Link>
          <Link to="/trades/carpenters" className="text-brand-blue font-medium hover:underline">National carpenters guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in Victoria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'New estate framing', body: 'New estate framing in Melton, Craigieburn, and Tarneit operates on sites without utilities or NBN. SIM connectivity handles progress payment at frame stage without customer WiFi.' },
              { title: 'Heritage joinery restoration', body: 'Victorian and Edwardian restoration in Fitzroy, Carlton, and Kew involves premium custom joinery in areas with limited site WiFi. Zeller\'s SIM plan covers the full Melbourne metro.' },
              { title: 'Deposit collection before starting', body: 'Victorian carpenters collecting deposits before ordering custom timber or structural materials use Zeller payment links (1.7%) — clients pay via SMS before materials arrive on site.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — structural timber and hardware orders can be placed the same afternoon a deposit is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Carpenters in Victoria are regulated by the <strong>Victorian Building Authority (VBA)</strong>. Building practitioner registration is required for domestic building work. An ABN is needed to open a merchant account.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Carpenters in Victoria" />
      <RelatedLinks slug="carpenters" type="trade" currentState="vic" />
    </>
  )
}
