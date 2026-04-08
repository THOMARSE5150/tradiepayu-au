import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Carpenters in Perth (2026)' },
]
const faqs = [
  { q: 'What is the best EFTPOS for carpenters in Perth?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Perth carpenters. At 1.4% in-person with same-day settlement, it covers new estate framing in Perth\'s outer suburbs, custom timber builds, and remote mining accommodation work.' },
  { q: 'Does Zeller work in Perth?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Perth including outer growth corridors in Ellenbrook, Baldivis, and Harrisdale where new estates operate without utilities.' },
  { q: 'What card payment fees do carpenters pay in Perth?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.' },
  { q: 'Do I need a licence to accept card payments as a carpenter in WA?', a: 'No payment licence is required. You need your building contractor licence from the Building Services Board (under Building and Energy) and an ABN to open a merchant account.' },
  { q: 'How quickly do card payments settle for carpenters in Perth?', a: 'Zeller settles same-day to a Zeller Transaction Account — Perth carpenters can order framing timber the same afternoon a progress payment is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Carpenters in Perth (2026)', description: 'Best EFTPOS for Perth carpenters — new estate framing in outer suburbs, custom timber builds, and same-day settlement.', url: `${SITE}/blog/best-eftpos-carpenters-perth-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-carpenters-perth-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Carpenters in Perth (2026)', item: `${SITE}/blog/best-eftpos-carpenters-perth-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Perth Carpenters', description: 'Best EFTPOS terminal for carpenters in Perth, Western Australia.', url: `${SITE}/blog/best-eftpos-carpenters-perth-2026`, areaServed: [ { '@type': 'City', name: 'Perth' }, { '@type': 'AdministrativeArea', name: 'Western Australia' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposCarpentersPerth() {
  return (
    <>
      <Meta title="Best EFTPOS for Carpenters in Perth (2026)" description="Best EFTPOS for Perth carpenters — new estate framing in outer suburbs, custom timber builds, and same-day settlement." canonical="/blog/best-eftpos-carpenters-perth-2026" ogType="article" geoRegion="AU-WA" geoPlacename="Perth, Western Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-carpenters-perth-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Perth, WA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Carpenters in Perth (2026)</h1>
          <p className="hero-sub">Covering new estate framing in Ellenbrook, Baldivis, and Harrisdale, custom timber builds, and remote mining accommodation work across Greater Perth.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#context">Why Perth</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Carpenters in Perth</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Perth carpenters. At 1.4% in-person with SIM connectivity and same-day settlement, it covers new estate framing across Perth's outer growth corridors and custom timber builds without relying on site WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/carpenters/wa" className="text-brand-blue font-medium hover:underline">WA Carpenters guide →</Link>
          <Link to="/blog/best-eftpos-carpenters-wa-2026" className="text-brand-blue font-medium hover:underline">Best EFTPOS for Carpenters in Western Australia →</Link>
          <Link to="/trades/carpenters" className="text-brand-blue font-medium hover:underline">National carpenters guide →</Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Why Perth Carpenters need SIM connectivity</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Outer suburbs new estate framing', body: 'New estate framing in Ellenbrook, Baldivis, and Harrisdale operates on sites without NBN or customer WiFi. SIM connectivity is the only reliable way to collect progress payments at frame stage.' },
              { title: 'Custom timber builds', body: 'Custom timber home builds across Perth\'s Hills and southern suburbs involve large progress payment schedules. Deposit collection before ordering structural timber uses Zeller payment links (1.7%).' },
              { title: 'Reno and fit-out work', body: 'Renovation and joinery fit-out across established Perth suburbs involves accessing properties during construction, often without WiFi. SIM connectivity handles payment at practical completion.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — framing timber and hardware orders can be placed the same afternoon a progress payment clears.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Carpenters in Perth" />
      <RelatedLinks slug="carpenters" type="trade" currentState="wa" />
    </>
  )
}
