import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for HVAC in Sydney (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for HVAC technicians in Sydney?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Sydney HVAC technicians. At 1.4% in-person with same-day settlement, it handles residential split-system installs, commercial ducted fit-outs, and service calls without site WiFi.' },
  { q: 'Do Sydney HVAC technicians need WiFi to take card payments?', a: 'No — Zeller Terminal 1 has built-in Optus SIM connectivity. HVAC technicians at new builds in Box Hill, Marsden Park, and Jordan Springs can take payment without any WiFi connection.' },
  { q: 'What are the card payment fees for HVAC technicians in Sydney?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'How quickly do card payments settle for Sydney HVAC technicians?', a: 'Zeller settles same-day to a Zeller Transaction Account — Sydney HVAC technicians receive funds the same day they complete a job.' },
  { q: 'What licence do Sydney HVAC technicians need?', a: 'Sydney HVAC technicians require an ARC refrigerant handling licence for refrigerant work and a NSW Fair Trading electrical contractor licence for electrical connections. Both are required to operate legally and open a merchant account.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for HVAC in Sydney (2026)', description: 'Best EFTPOS for Sydney HVAC technicians — residential split-system installs, commercial ducted fit-outs, and service calls across Sydney growth corridors.', url: `${SITE}/blog/best-eftpos-hvac-sydney-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-hvac-sydney-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for HVAC in Sydney (2026)', item: `${SITE}/blog/best-eftpos-hvac-sydney-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Sydney HVAC Technicians', description: 'Best EFTPOS terminal for HVAC technicians across Sydney.', url: `${SITE}/blog/best-eftpos-hvac-sydney-2026`, areaServed: [ { '@type': 'City', name: 'Sydney' }, { '@type': 'AdministrativeArea', name: 'New South Wales' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposHVACSydney() {
  return (
    <>
      <Meta title="Best EFTPOS for HVAC in Sydney (2026)" description="Best EFTPOS for Sydney HVAC technicians — residential split-system installs, commercial ducted fit-outs, and service calls across Sydney growth corridors." canonical="/blog/best-eftpos-hvac-sydney-2026" ogType="article" geoRegion="AU-NSW" geoPlacename="Sydney, New South Wales" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-hvac-sydney-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Sydney</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for HVAC in Sydney (2026)</h1>
          <p className="hero-sub">Covering residential split-system installs across Sydney, commercial ducted fit-outs, and service calls in growth corridors from Box Hill to Marsden Park.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#context">Sydney Context</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for HVAC Technicians in Sydney</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Sydney HVAC technicians. At 1.4% in-person with SIM connectivity via Optus and same-day settlement, it handles split-system installs, ducted fit-outs, and service calls without relying on customer WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/hvac/nsw" className="text-brand-blue font-medium hover:underline">NSW HVAC guide on TradiePay →</Link>
          <Link to="/blog/best-eftpos-hvac-nsw-2026" className="text-brand-blue font-medium hover:underline">NSW state EFTPOS guide →</Link>
          <Link to="/trades/hvac" className="text-brand-blue font-medium hover:underline">National HVAC guide →</Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Sydney HVAC — what shapes your payment needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Residential split-system installs', body: 'Split-system installs across Inner West, Eastern Suburbs, and North Shore involve customers who prefer card payment on completion. SIM connectivity handles payment without needing the homeowner\'s WiFi.' },
              { title: 'New estate ducted systems', body: 'Ducted HVAC installs in Box Hill, Marsden Park, and Jordan Springs occur on new builds with no active internet. SIM connectivity is the only reliable payment option at these jobs.' },
              { title: 'Commercial fit-outs', body: 'Commercial HVAC fit-outs across Greater Sydney\'s CBD, North Sydney, and Parramatta involve progress payments on site. SIM connectivity and same-day settlement keep cash flow consistent.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — parts and refrigerant costs can be covered the same afternoon a Sydney job is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — HVAC Technicians in Sydney" />
      <RelatedLinks slug="hvac" type="trade" currentState="nsw" />
    </>
  )
}
