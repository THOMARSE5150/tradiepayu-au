import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Fencers in Brisbane (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for fencers in Brisbane?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Brisbane fencers. At 1.4% in-person with same-day settlement, it covers SEQ new estate colourbond fencing, rural acreage in outer Brisbane, and cyclone-rated aluminium fencing in bayside suburbs.' },
  { q: 'Does Zeller work in Brisbane?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Brisbane including new estate sites in Ripley, Flagstone, North Lakes, Ipswich, and the Logan corridor.' },
  { q: 'What card payment fees do fencers pay in Brisbane?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.' },
  { q: 'Do I need a licence to accept card payments as a fencer in QLD?', a: 'No payment licence is required. Fencing over the QBCC threshold requires a QBCC licence; most residential fencing only needs an ABN to open a merchant account.' },
  { q: 'How quickly do card payments settle for fencers in Brisbane?', a: 'Zeller settles same-day to a Zeller Transaction Account — Brisbane fencers can order fencing materials the same afternoon a deposit is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Fencers in Brisbane (2026)', description: 'Best EFTPOS for Brisbane fencers — SEQ new estate colourbond fencing, rural acreage in outer Brisbane, and cyclone-rated fencing in bayside suburbs.', url: `${SITE}/blog/best-eftpos-fencers-brisbane-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=630&fit=crop&crop=entropy&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Fencers in Brisbane (2026)', item: `${SITE}/blog/best-eftpos-fencers-brisbane-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Brisbane Fencers', description: 'Best EFTPOS terminal for fencers in Brisbane, Queensland.', url: `${SITE}/blog/best-eftpos-fencers-brisbane-2026`, areaServed: [ { '@type': 'City', name: 'Brisbane' }, { '@type': 'AdministrativeArea', name: 'Queensland' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposFencersBrisbane() {
  return (
    <>
      <Meta title="Best EFTPOS for Fencers in Brisbane (2026)" description="Best EFTPOS for Brisbane fencers — SEQ new estate colourbond fencing, rural acreage in outer Brisbane, and cyclone-rated fencing in bayside suburbs." canonical="/blog/best-eftpos-fencers-brisbane-2026" ogType="article" geoRegion="AU-QLD" geoPlacename="Brisbane, Queensland" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=560&fit=crop&crop=entropy&q=80" alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Brisbane, QLD</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Fencers in Brisbane (2026)</h1>
          <p className="hero-sub">Covering SEQ new estate colourbond fencing in Ripley and North Lakes, acreage fencing in Samford and Dayboro, and cyclone-rated aluminium fencing in bayside suburbs.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#context">Why Brisbane</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Fencers in Brisbane</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Brisbane fencers. At 1.4% in-person with SIM connectivity and same-day settlement, it covers SEQ new estate fencing, acreage in outer Brisbane, and cyclone-rated aluminium fencing in coastal suburbs.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/fencers/qld" className="text-brand-blue font-medium hover:underline">QLD Fencers guide →</Link>
          <Link to="/blog/best-eftpos-fencers-qld-2026" className="text-brand-blue font-medium hover:underline">Best EFTPOS for Fencers in Queensland →</Link>
          <Link to="/trades/fencers" className="text-brand-blue font-medium hover:underline">National fencers guide →</Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Why Brisbane Fencers need SIM connectivity</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'SEQ new estate colourbond fencing', body: 'New estate fencing in Ripley, Flagstone, and North Lakes operates on sites without utilities or customer WiFi. SIM connectivity handles payment at job completion.' },
              { title: 'Acreage and rural lifestyle fencing', body: 'Acreage fencing in Samford, Dayboro, and outer Brisbane lifestyle blocks involves remote properties without site WiFi. SIM connectivity handles payment on any rural property across Greater Brisbane.' },
              { title: 'Cyclone-rated aluminium fencing', body: 'Brisbane\'s bayside suburbs in Wynnum, Manly, and Redcliffe require cyclone-rated aluminium fencing. Installing at occupied homes means no guaranteed customer WiFi — SIM connectivity is essential.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — colourbond panels and aluminium fencing can be ordered the same afternoon a deposit is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Fencers in Brisbane" />
      <RelatedLinks slug="fencers" type="trade" currentState="qld" />
    </>
  )
}
