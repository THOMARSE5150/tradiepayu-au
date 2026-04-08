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
  { label: 'Best EFTPOS for Carpenters in Adelaide (2026)' },
]
const faqs = [
  { q: 'What is the best EFTPOS for carpenters in Adelaide?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Adelaide carpenters. At 1.4% in-person with same-day settlement, it covers Hills heritage joinery, northern suburbs new estate framing, and custom timber work across Greater Adelaide.' },
  { q: 'Does Zeller work in Adelaide?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Adelaide including the Hills, Northern Suburbs growth corridors in Gawler and Angle Vale, and the Fleurieu Peninsula.' },
  { q: 'What card payment fees do carpenters pay in Adelaide?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.' },
  { q: 'Do I need a licence to accept card payments as a carpenter in SA?', a: 'No payment licence is required. You need your building work contractor\'s licence from Consumer and Business Services (CBS) and an ABN to open a merchant account.' },
  { q: 'How quickly do card payments settle for carpenters in Adelaide?', a: 'Zeller settles same-day to a Zeller Transaction Account — Adelaide carpenters can order timber and hardware the same afternoon a deposit is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Carpenters in Adelaide (2026)', description: 'Best EFTPOS for Adelaide carpenters — Hills heritage joinery, northern suburbs new estate framing, and custom timber work.', url: `${SITE}/blog/best-eftpos-carpenters-adelaide-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-carpenters-adelaide-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Carpenters in Adelaide (2026)', item: `${SITE}/blog/best-eftpos-carpenters-adelaide-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for Adelaide Carpenters', description: 'Best EFTPOS terminal for carpenters in Adelaide, South Australia.', url: `${SITE}/blog/best-eftpos-carpenters-adelaide-2026`, areaServed: [ { '@type': 'City', name: 'Adelaide' }, { '@type': 'AdministrativeArea', name: 'South Australia' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposCarpentersAdelaide() {
  return (
    <>
      <Meta title="Best EFTPOS for Carpenters in Adelaide (2026)" description="Best EFTPOS for Adelaide carpenters — Hills heritage joinery, northern suburbs new estate framing, and custom timber work." canonical="/blog/best-eftpos-carpenters-adelaide-2026" ogType="article" geoRegion="AU-SA" geoPlacename="Adelaide, South Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-carpenters-adelaide-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Adelaide, SA</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Carpenters in Adelaide (2026)</h1>
          <p className="hero-sub">Covering Adelaide Hills heritage joinery in Stirling and Aldgate, new estate framing in Gawler and Angle Vale, and custom timber fit-out across Greater Adelaide.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#context">Why Adelaide</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Carpenters in Adelaide</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for Adelaide carpenters. At 1.4% in-person with no monthly fee and same-day settlement, it covers Hills heritage joinery, new estate framing in northern growth corridors, and custom timber work without relying on site WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/blog/best-eftpos-carpenters-sa-2026" className="text-brand-blue font-medium hover:underline">Best EFTPOS for Carpenters in South Australia →</Link>
          <Link to="/trades/carpenters/sa" className="text-brand-blue font-medium hover:underline">South Australia carpenters guide →</Link>
          <Link to="/trades/carpenters" className="text-brand-blue font-medium hover:underline">National carpenters guide →</Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Why Adelaide Carpenters need SIM connectivity</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Adelaide Hills heritage joinery', body: 'Heritage joinery in Stirling, Aldgate, and Hahndorf involves premium hardwood and bespoke work in areas with limited NBN. SIM connectivity handles payment at job completion without customer WiFi.' },
              { title: 'New estate framing', body: 'New estate framing in Gawler, Angle Vale, and Munno Para operates on sites without utilities. SIM connectivity is the only reliable option for collecting progress payments at frame stage.' },
              { title: 'Custom joinery deposit collection', body: 'Adelaide carpenters collecting deposits before ordering custom cabinetry or structural timber use Zeller payment links (1.7%) — clients pay via SMS before materials arrive.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — timber and hardware can be ordered the same afternoon the deposit clears.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Carpenters in Adelaide" />
      <RelatedLinks slug="carpenters" type="trade" currentState="sa" />
    </>
  )
}
