import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for HVAC in New South Wales (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for HVAC technicians in NSW?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for NSW HVAC technicians. At 1.4% in-person with same-day settlement, it handles residential split-system installs, commercial ducted HVAC fit-outs, and service calls at properties without customer WiFi.' },
  { q: 'Do NSW HVAC technicians need WiFi to take card payments?', a: 'No — Zeller Terminal 1 has built-in Optus SIM connectivity. HVAC technicians at new builds and service calls in regional NSW can take payment without any WiFi connection.' },
  { q: 'What are the card payment fees for HVAC technicians in NSW?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'How quickly do card payments settle for NSW HVAC technicians?', a: 'Zeller settles same-day to a Zeller Transaction Account — NSW HVAC technicians receive funds the same day they complete a job.' },
  { q: 'What licence do HVAC technicians need in NSW?', a: 'HVAC technicians in NSW who perform refrigeration and air conditioning work must hold an ARC refrigerant handling licence from the Australian Refrigeration Council. Electrical work on HVAC systems requires a NSW Fair Trading electrical contractor licence.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for HVAC in New South Wales (2026)', description: 'Best EFTPOS for NSW HVAC technicians — residential split-system installs, commercial ducted fit-outs, and service calls across Sydney and regional NSW.', url: `${SITE}/blog/best-eftpos-hvac-nsw-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-hvac-nsw-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for HVAC in New South Wales (2026)', item: `${SITE}/blog/best-eftpos-hvac-nsw-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for NSW HVAC Technicians', description: 'Best EFTPOS terminal for HVAC technicians across New South Wales.', url: `${SITE}/blog/best-eftpos-hvac-nsw-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'New South Wales' }, { '@type': 'City', name: 'Sydney' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposHVACNSWPost() {
  return (
    <>
      <Meta title="Best EFTPOS for HVAC in New South Wales (2026)" description="Best EFTPOS for NSW HVAC technicians — residential split-system installs, commercial ducted fit-outs, and service calls across Sydney and regional NSW." canonical="/blog/best-eftpos-hvac-nsw-2026" ogType="article" geoRegion="AU-NSW" geoPlacename="New South Wales, Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-hvac-nsw-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>New South Wales</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for HVAC in New South Wales (2026)</h1>
          <p className="hero-sub">Covering residential split-system installs across Sydney, commercial ducted HVAC fit-outs, and service calls in growth corridors from Box Hill to the Central Coast.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">NSW Coverage</a><a href="#licence">Licensing</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for NSW HVAC Technicians</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for NSW HVAC technicians. At 1.4% in-person with SIM connectivity and same-day settlement, it handles split-system installs, ducted HVAC fit-outs, and service calls without relying on customer WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/hvac/nsw" className="text-brand-blue font-medium hover:underline">NSW HVAC guide on TradiePay →</Link>
          <Link to="/blog/best-eftpos-hvac-sydney-2026" className="text-brand-blue font-medium hover:underline">Sydney HVAC city guide →</Link>
          <Link to="/trades/hvac" className="text-brand-blue font-medium hover:underline">National HVAC guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">HVAC work across NSW — what shapes your payment needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Residential split-system installs', body: 'Split-system installs across Sydney suburbs involve customers who prefer to pay by card on completion. SIM connectivity handles payment without needing the homeowner\'s WiFi.' },
              { title: 'New estate ducted systems', body: 'Ducted HVAC installs in Box Hill, Marsden Park, and Jordan Springs occur on new builds with no active internet. SIM connectivity is the only reliable payment option at these jobs.' },
              { title: 'Commercial HVAC fit-outs', body: 'Commercial ducted and VRF system fit-outs across Greater Sydney often involve progress payments on site. SIM connectivity and same-day settlement keep cash flow consistent.' },
              { title: 'Service and maintenance calls', body: 'HVAC service calls across regional NSW — Orange, Wollongong, and Newcastle — involve customers who expect card payment. SIM connectivity handles payment wherever you are.' },
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
          <h2 className="text-2xl font-bold text-brand-dark mb-3">NSW HVAC licensing</h2>
          <p className="text-sm text-slate-600 leading-relaxed">HVAC technicians in NSW who handle refrigerants must hold an <strong>ARC refrigerant handling licence</strong> from the Australian Refrigeration Council. Electrical work on HVAC systems — including wiring split systems — requires a <strong>NSW Fair Trading electrical contractor licence</strong>. Both licences are required to open a merchant account and operate legally as an HVAC contractor in NSW.</p>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — HVAC Technicians in NSW" />
      <RelatedLinks slug="hvac" type="trade" currentState="nsw" />
    </>
  )
}
