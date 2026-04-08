import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Tilers in Melbourne (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for tilers in Melbourne?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Melbourne tilers. At 1.4% in-person with same-day settlement, it handles bathroom renovations in the inner suburbs, new estate tiling in Melbourne\'s growth corridors, and heritage apartment restoration.' },
  { q: 'Do Melbourne tilers need WiFi to take card payments?', a: 'No — Zeller Terminal 1 has built-in Optus SIM connectivity. Tilers working inside renovated bathrooms across Melbourne can take payment without using the homeowner\'s network.' },
  { q: 'What are the card payment fees for tilers in Melbourne?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'How quickly do card payments settle for Melbourne tilers?', a: 'Zeller settles same-day to a Zeller Transaction Account — Melbourne tilers can order tiles, adhesive, and grout the same afternoon a deposit is collected.' },
  { q: 'What licence do Melbourne tilers need?', a: 'Melbourne tilers require VBA registration for domestic building work over the threshold. No payment licence is required — an ABN is sufficient to open a merchant account.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Tilers in Melbourne (2026)', description: 'Best EFTPOS for Melbourne tilers — bathroom renovations in inner suburbs, new estate tiling in growth corridors, and heritage apartment restoration.', url: `${SITE}/blog/best-eftpos-tilers-melbourne-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-tilers-melbourne-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Tilers in Melbourne (2026)', item: `${SITE}/blog/best-eftpos-tilers-melbourne-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Melbourne Tilers', description: 'Best EFTPOS terminal for tilers across Melbourne.', url: `${SITE}/blog/best-eftpos-tilers-melbourne-2026`, areaServed: [ { '@type': 'City', name: 'Melbourne' }, { '@type': 'AdministrativeArea', name: 'Victoria' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposTilersMelbourne() {
  return (
    <>
      <Meta title="Best EFTPOS for Tilers in Melbourne (2026)" description="Best EFTPOS for Melbourne tilers — bathroom renovations in inner suburbs, new estate tiling in growth corridors, and heritage apartment restoration." canonical="/blog/best-eftpos-tilers-melbourne-2026" ogType="article" geoRegion="AU-VIC" geoPlacename="Melbourne, Victoria" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-tilers-melbourne-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Melbourne</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Tilers in Melbourne (2026)</h1>
          <p className="hero-sub">Covering inner suburb bathroom renovations, new estate tiling in Melton and Craigieburn, and heritage apartment restoration across Melbourne — no site WiFi required.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#context">Melbourne Context</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Tilers in Melbourne</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Melbourne tilers. At 1.4% in-person with SIM connectivity and same-day settlement, it handles bathroom renovations, growth corridor new estate tiling, and heritage restoration without relying on site WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/tilers/vic" className="text-brand-blue font-medium hover:underline">VIC Tilers guide on TradiePay →</Link>
          <Link to="/blog/best-eftpos-tilers-vic-2026" className="text-brand-blue font-medium hover:underline">VIC state EFTPOS guide →</Link>
          <Link to="/trades/tilers" className="text-brand-blue font-medium hover:underline">National tilers guide →</Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Melbourne tiling — what shapes your payment needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Inner suburb bathroom renovations', body: 'Bathroom and kitchen tiling in Fitzroy, Richmond, St Kilda, and South Yarra involves premium tiles in occupied homes without shared WiFi. SIM connectivity handles payment at job completion.' },
              { title: 'Growth corridor new estate tiling', body: 'New estate tiling in Melton, Craigieburn, and Tarneit operates on sites without utilities or NBN. SIM connectivity handles practical completion payments without customer WiFi.' },
              { title: 'Heritage apartment restoration', body: 'Heritage apartment tiling in Carlton, Fitzroy, and South Yarra involves period-style tiles in buildings with no site WiFi. SIM connectivity handles payment every time.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — tiles, adhesive, and grout can be ordered the same afternoon a deposit is collected on a Melbourne job.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Tilers in Melbourne" />
      <RelatedLinks slug="tilers" type="trade" currentState="vic" />
    </>
  )
}
