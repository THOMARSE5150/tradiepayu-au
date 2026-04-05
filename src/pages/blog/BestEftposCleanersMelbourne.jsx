import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const IMG = 'photo-1581578731548-c64695cc6952'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Cleaners in Melbourne (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for cleaners in Melbourne?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Melbourne cleaners. At 1.4% in-person with same-day settlement, it handles residential cleans, end-of-lease cleans at vacant properties, and post-construction cleaning without site WiFi.' },
  { q: 'Do Melbourne cleaners need WiFi to take card payments?', a: 'No — Zeller Terminal 1 has built-in Optus SIM connectivity. Melbourne cleaners at vacant end-of-lease properties can take payment without any WiFi connection.' },
  { q: 'What are the card payment fees for cleaners in Melbourne?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'How quickly do card payments settle for Melbourne cleaners?', a: 'Zeller settles same-day to a Zeller Transaction Account — Melbourne cleaners receive funds the same day they complete a job.' },
  { q: 'What licence do Melbourne cleaners need?', a: 'No trade licence is required for cleaning services in Victoria. An ABN is sufficient to operate as a cleaner and open a merchant account.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Cleaners in Melbourne (2026)', description: 'Best EFTPOS for Melbourne cleaners — residential cleans, end-of-lease cleans at vacant properties, and post-construction cleaning across Melbourne.', url: `${SITE}/blog/best-eftpos-cleaners-melbourne-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/${IMG}?w=1200&h=630&fit=crop&crop=faces&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Cleaners in Melbourne (2026)', item: `${SITE}/blog/best-eftpos-cleaners-melbourne-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Melbourne Cleaners', description: 'Best EFTPOS terminal for cleaners across Melbourne.', url: `${SITE}/blog/best-eftpos-cleaners-melbourne-2026`, areaServed: [ { '@type': 'City', name: 'Melbourne' }, { '@type': 'AdministrativeArea', name: 'Victoria' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposCleanersMelbourne() {
  return (
    <>
      <Meta title="Best EFTPOS for Cleaners in Melbourne (2026)" description="Best EFTPOS for Melbourne cleaners — residential cleans, end-of-lease cleans at vacant properties, and post-construction cleaning across Melbourne." canonical="/blog/best-eftpos-cleaners-melbourne-2026" ogType="article" geoRegion="AU-VIC" geoPlacename="Melbourne, Victoria" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/${IMG}?w=900&h=560&fit=crop&crop=faces&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Melbourne</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Cleaners in Melbourne (2026)</h1>
          <p className="hero-sub">Covering residential cleans in inner Melbourne suburbs, end-of-lease cleans at vacant properties, and post-construction cleaning in Melton and Craigieburn growth corridors.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#context">Melbourne Context</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Cleaners in Melbourne</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Melbourne cleaners. At 1.4% in-person with SIM connectivity and same-day settlement, it handles residential cleans, end-of-lease jobs at vacant properties, and post-construction cleaning without relying on site WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/cleaners/vic" className="text-brand-blue font-medium hover:underline">VIC Cleaners guide on TradiePay →</Link>
          <Link to="/blog/best-eftpos-cleaners-vic-2026" className="text-brand-blue font-medium hover:underline">VIC state EFTPOS guide →</Link>
          <Link to="/trades/cleaners" className="text-brand-blue font-medium hover:underline">National cleaners guide →</Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Melbourne cleaning — what shapes your payment needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Inner suburb residential cleans', body: 'Residential cleans in Fitzroy, Richmond, St Kilda, and South Yarra involve customers who prefer card payment. SIM connectivity handles payment without needing the homeowner\'s WiFi.' },
              { title: 'End-of-lease cleans', body: 'End-of-lease cleans at vacant Melbourne properties have no active WiFi — the NBN is typically disconnected. SIM connectivity is the only reliable payment option at these jobs.' },
              { title: 'Post-construction cleaning', body: 'Post-construction cleaning in Melton, Craigieburn, and Tarneit operates on sites without utilities. SIM connectivity handles payment at job completion.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — cleaning supplies and staff wages can be covered the same afternoon a Melbourne job is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Cleaners in Melbourne" />
      <RelatedLinks slug="cleaners" type="trade" currentState="vic" />
    </>
  )
}
