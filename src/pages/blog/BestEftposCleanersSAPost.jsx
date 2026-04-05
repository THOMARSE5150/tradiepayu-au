import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const IMG = 'photo-1581578731548-c64695cc6952'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Cleaners in South Australia (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for cleaners in South Australia?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for SA cleaners. At 1.4% in-person with same-day settlement, it covers residential cleaning, end-of-lease cleans, and post-construction cleaning across Adelaide and regional SA.' },
  { q: 'Does Zeller work for cleaners across South Australia?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro and most regional SA areas. Cleaners at vacant properties have no WiFi access — SIM connectivity handles payment on the spot.' },
  { q: 'What card payment fees do cleaners pay in SA?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'Do I need a licence to accept card payments as a cleaner in SA?', a: 'No payment licence or trade licence is required for cleaning services in South Australia. An ABN is sufficient to open a merchant account.' },
  { q: 'How quickly do card payments settle for cleaners in SA?', a: 'Zeller settles same-day to a Zeller Transaction Account — SA cleaners receive funds the same day they complete a job.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Cleaners in South Australia (2026)', description: 'Best EFTPOS for SA cleaners — residential cleaning, end-of-lease cleans, and post-construction cleaning across Adelaide and regional SA.', url: `${SITE}/blog/best-eftpos-cleaners-sa-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/${IMG}?w=1200&h=630&fit=crop&crop=right&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Cleaners in South Australia (2026)', item: `${SITE}/blog/best-eftpos-cleaners-sa-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for SA Cleaners', description: 'Best EFTPOS terminal for cleaners across South Australia.', url: `${SITE}/blog/best-eftpos-cleaners-sa-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'South Australia' }, { '@type': 'City', name: 'Adelaide' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposCleanersSAPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Cleaners in South Australia (2026)" description="Best EFTPOS for SA cleaners — residential cleaning, end-of-lease cleans, and post-construction cleaning across Adelaide and regional SA." canonical="/blog/best-eftpos-cleaners-sa-2026" ogType="article" geoRegion="AU-SA" geoPlacename="Adelaide, South Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/${IMG}?w=900&h=560&fit=crop&crop=right&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>South Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Cleaners in South Australia (2026)</h1>
          <p className="hero-sub">Covering residential cleaning, end-of-lease cleans at vacant properties, and post-construction cleaning in Adelaide growth corridors and the Adelaide Hills.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">Coverage</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Cleaners in South Australia</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for SA cleaners. At 1.4% in-person with SIM connectivity and same-day settlement, it handles payment at vacant end-of-lease properties, post-construction sites, and residential jobs without relying on customer WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/cleaners/sa" className="text-brand-blue font-medium hover:underline">SA Cleaners guide on TradiePay →</Link>
          <Link to="/trades/cleaners" className="text-brand-blue font-medium hover:underline">National cleaners guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in South Australia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Residential cleaning', body: 'Regular and one-off residential cleans across Adelaide involve customers who prefer card payment at job completion. SIM connectivity handles payment without the homeowner\'s WiFi.' },
              { title: 'End-of-lease cleaning', body: 'End-of-lease cleans at vacant Adelaide properties have no active WiFi — the NBN is typically disconnected before the clean. SIM connectivity is the only reliable option.' },
              { title: 'Post-construction cleaning', body: 'Post-construction cleaning on new estate builds in Angle Vale, Munno Para, and Mount Barker operates on sites without utilities. SIM connectivity handles payment at job completion.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — cleaning supplies and staff can be paid the same afternoon a job is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Cleaning services in South Australia do not require a trade licence. <strong>An ABN is sufficient</strong> to operate as a cleaner and open a merchant account with Zeller, Square, or Stripe.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Cleaners in South Australia" />
      <RelatedLinks slug="cleaners" type="trade" currentState="sa" />
    </>
  )
}
