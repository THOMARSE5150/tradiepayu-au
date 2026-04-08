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
  { label: 'Best EFTPOS for Carpenters in Western Australia (2026)' },
]
const faqs = [
  { q: 'What is the best EFTPOS for carpenters in Western Australia?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for WA carpenters. At 1.4% in-person with same-day settlement, it covers Perth new estate framing, Pilbara mining accommodation builds, and remote site work without WiFi.' },
  { q: 'Does Zeller work across Western Australia?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Perth metro and most regional WA centres. For remote Pilbara and Kimberley sites, Square Terminal\'s offline mode stores payments until signal is restored.' },
  { q: 'What card payment fees do carpenters pay in WA?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'Do I need a licence to accept card payments as a carpenter in WA?', a: 'No payment licence is required. You need your building contractor licence from the Building Services Board (under Building and Energy) and an ABN to open a merchant account.' },
  { q: 'How quickly do card payments settle for carpenters in WA?', a: 'Zeller settles same-day to a Zeller Transaction Account — WA carpenters can order framing timber the same afternoon a deposit is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Carpenters in Western Australia (2026)', description: 'Best EFTPOS for WA carpenters — Perth new estate framing, Pilbara mining accommodation builds, and same-day settlement for material purchasing.', url: `${SITE}/blog/best-eftpos-carpenters-wa-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-carpenters-wa-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Carpenters in Western Australia (2026)', item: `${SITE}/blog/best-eftpos-carpenters-wa-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for WA Carpenters', description: 'Best EFTPOS terminal for carpenters across Western Australia.', url: `${SITE}/blog/best-eftpos-carpenters-wa-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'Western Australia' }, { '@type': 'City', name: 'Perth' }, { '@type': 'City', name: 'Karratha' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposCarpentersWAPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Carpenters in Western Australia (2026)" description="Best EFTPOS for WA carpenters — Perth new estate framing, Pilbara mining accommodation builds, and same-day settlement for material purchasing." canonical="/blog/best-eftpos-carpenters-wa-2026" ogType="article" geoRegion="AU-WA" geoPlacename="Perth, Western Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-carpenters-wa-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>Western Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Carpenters in Western Australia (2026)</h1>
          <p className="hero-sub">Covering Perth new estate framing, remote Pilbara and Kimberley mining accommodation builds, and custom timber work across WA.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">Coverage</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Carpenters in Western Australia</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for WA carpenters. At 1.4% in-person with SIM connectivity via Optus and same-day settlement, it covers Perth new estate framing in Ellenbrook and Baldivis, remote Pilbara mining accommodation builds, and custom joinery work across WA.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/carpenters/wa" className="text-brand-blue font-medium hover:underline">WA Carpenters guide on TradiePay →</Link>
          <Link to="/trades/carpenters" className="text-brand-blue font-medium hover:underline">National carpenters guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in Western Australia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Perth new estate framing', body: 'New estate framing in Ellenbrook, Baldivis, and Harrisdale operates on sites without NBN. SIM connectivity handles progress payment collection at frame stage without customer WiFi.' },
              { title: 'Pilbara and Kimberley remote work', body: 'WA carpenters working on mining accommodation in Karratha, Newman, and Port Hedland face remote sites with no WiFi. Zeller\'s Optus SIM covers most mining town areas; Square\'s offline mode handles isolated sites.' },
              { title: 'Custom joinery deposit collection', body: 'WA carpenters collecting deposits for custom joinery or bespoke cabinetry use Zeller payment links (1.7%) — clients pay via SMS before materials are ordered.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — timber and hardware orders can be placed the same afternoon the deposit clears.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Carpenters in Western Australia are regulated by the <strong>Building Services Board</strong> under <strong>Building and Energy</strong>. A building contractor licence is required for residential work over the threshold. An ABN is needed to open a merchant account.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Carpenters in Western Australia" />
      <RelatedLinks slug="carpenters" type="trade" currentState="wa" />
    </>
  )
}
