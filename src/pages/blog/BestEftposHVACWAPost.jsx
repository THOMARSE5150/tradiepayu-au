import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const IMG = 'photo-1621905251189-08b45d6a269e'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for HVAC in Western Australia (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for HVAC technicians in Western Australia?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for WA HVAC technicians. At 1.4% in-person with same-day settlement, it handles residential split-system and ducted reverse cycle installs, and service calls across Perth and regional Western Australia.' },
  { q: 'Do WA HVAC technicians need WiFi to take card payments?', a: 'No — Zeller Terminal 1 has built-in Optus SIM connectivity. HVAC technicians at new builds in Ellenbrook, Baldivis, and Harrisdale can take payment without any WiFi connection.' },
  { q: 'What are the card payment fees for HVAC technicians in WA?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'How quickly do card payments settle for WA HVAC technicians?', a: 'Zeller settles same-day to a Zeller Transaction Account — WA HVAC technicians receive funds the same day they complete a job.' },
  { q: 'What licence do HVAC technicians need in Western Australia?', a: 'HVAC technicians in Western Australia who handle refrigerants must hold an ARC refrigerant handling licence. Electrical work on HVAC systems requires a WA Building Services Board electrical contractor licence. Mechanical services work may require a separate contractor registration.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for HVAC in Western Australia (2026)', description: 'Best EFTPOS for WA HVAC technicians — residential split-system and ducted reverse cycle installs, and service calls across Perth and regional Western Australia.', url: `${SITE}/blog/best-eftpos-hvac-wa-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/${IMG}?w=1200&h=630&fit=crop&crop=left&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for HVAC in Western Australia (2026)', item: `${SITE}/blog/best-eftpos-hvac-wa-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for WA HVAC Technicians', description: 'Best EFTPOS terminal for HVAC technicians across Western Australia.', url: `${SITE}/blog/best-eftpos-hvac-wa-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'Western Australia' }, { '@type': 'City', name: 'Perth' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposHVACWAPost() {
  return (
    <>
      <Meta title="Best EFTPOS for HVAC in Western Australia (2026)" description="Best EFTPOS for WA HVAC technicians — residential split-system and ducted reverse cycle installs, and service calls across Perth and regional Western Australia." canonical="/blog/best-eftpos-hvac-wa-2026" ogType="article" geoRegion="AU-WA" geoPlacename="Western Australia, Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/${IMG}?w=900&h=560&fit=crop&crop=left&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>Western Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for HVAC in Western Australia (2026)</h1>
          <p className="hero-sub">Covering split-system and ducted reverse cycle installs across Perth, service calls in Ellenbrook, Baldivis, and Harrisdale, and regional WA HVAC work.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">WA Coverage</a><a href="#licence">Licensing</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for WA HVAC Technicians</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for WA HVAC technicians. At 1.4% in-person with SIM connectivity via Optus and same-day settlement, it handles split-system installs, ducted reverse cycle fit-outs, and service calls without relying on customer WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/hvac/wa" className="text-brand-blue font-medium hover:underline">WA HVAC guide on TradiePay →</Link>
          <Link to="/blog/best-eftpos-hvac-perth-2026" className="text-brand-blue font-medium hover:underline">Perth HVAC city guide →</Link>
          <Link to="/trades/hvac" className="text-brand-blue font-medium hover:underline">National HVAC guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">HVAC work across Western Australia — what shapes your payment needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Ducted reverse cycle installs', body: 'Ducted reverse cycle installs in Perth are driven by extreme summer heat. Customers in new estates at Ellenbrook, Baldivis, and Harrisdale expect card payment on completion, and new builds have no active internet.' },
              { title: 'Split-system installs', body: 'Residential split-system installs across Perth suburbs involve customers who prefer card payment. SIM connectivity handles payment without needing the homeowner\'s WiFi.' },
              { title: 'Regional WA service calls', body: 'HVAC service calls in Mandurah, Bunbury, and the Pilbara require reliable payment options in areas with patchy connectivity. SIM connectivity on Optus keeps transactions processing wherever you work.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — parts and refrigerant costs can be covered the same afternoon a WA job is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="licence" className="section container-page">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Western Australia HVAC licensing</h2>
          <p className="text-sm text-slate-600 leading-relaxed">HVAC technicians in Western Australia who handle refrigerants must hold an <strong>ARC refrigerant handling licence</strong>. Electrical work on HVAC systems requires a <strong>WA Building Services Board electrical contractor licence</strong>. Mechanical services work including ducted installation may require a separate contractor registration. All applicable licences must be held before opening a merchant account as an HVAC contractor in Western Australia.</p>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — HVAC Technicians in Western Australia" />
      <RelatedLinks slug="hvac" type="trade" currentState="wa" />
    </>
  )
}
