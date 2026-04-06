import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const IMG = 'photo-1541888946425-d81bb19240f5'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Plasterers in South Australia (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for plasterers in South Australia?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for SA plasterers. At 1.4% in-person with same-day settlement, it covers Adelaide renovation plasterwork, Hills luxury home plastering, and new estate set plaster.' },
  { q: 'Does Zeller work across South Australia?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Adelaide metro and most regional SA areas. Plasterers working inside renovations have no site WiFi — SIM connectivity handles payment without the homeowner\'s network.' },
  { q: 'What card payment fees do plasterers pay in SA?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'Do I need a licence to accept card payments as a plasterer in SA?', a: 'No payment licence is required. SA plasterers require a Building Work Contractors licence from Consumer and Business Services (CBS) for work over the threshold. An ABN is sufficient to open a merchant account.' },
  { q: 'How quickly do card payments settle for plasterers in SA?', a: 'Zeller settles same-day to a Zeller Transaction Account — SA plasterers can order plasterboard and materials the same afternoon a deposit is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Plasterers in South Australia (2026)', description: 'Best EFTPOS for SA plasterers — Adelaide renovation plasterwork, Hills luxury home plastering, and new estate set plaster across greater Adelaide.', url: `${SITE}/blog/best-eftpos-plasterers-sa-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/${IMG}?w=1200&h=630&fit=crop&crop=right&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Plasterers in South Australia (2026)', item: `${SITE}/blog/best-eftpos-plasterers-sa-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for SA Plasterers', description: 'Best EFTPOS terminal for plasterers across South Australia.', url: `${SITE}/blog/best-eftpos-plasterers-sa-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'South Australia' }, { '@type': 'City', name: 'Adelaide' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposPlasterersSAPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Plasterers in South Australia (2026)" description="Best EFTPOS for SA plasterers — Adelaide renovation plasterwork, Hills luxury home plastering, and new estate set plaster across greater Adelaide." canonical="/blog/best-eftpos-plasterers-sa-2026" ogType="article" geoRegion="AU-SA" geoPlacename="Adelaide, South Australia" jsonLd={jsonLd} />
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Plasterers in South Australia (2026)</h1>
          <p className="hero-sub">Covering Adelaide renovation plasterwork, Adelaide Hills luxury home plastering, and new estate set plaster in growth corridors across greater Adelaide.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">Coverage</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Plasterers in South Australia</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for SA plasterers. At 1.4% in-person with SIM connectivity and same-day settlement, it covers Adelaide renovation plasterwork, Hills luxury plastering, and new estate set plaster without relying on site WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/plasterers/sa" className="text-brand-blue font-medium hover:underline">SA Plasterers guide on TradiePay →</Link>
          <Link to="/trades/plasterers" className="text-brand-blue font-medium hover:underline">National plasterers guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in South Australia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Adelaide renovation plasterwork', body: 'Plasterers working inside Adelaide renovations — ceiling replacement, wall sheeting, and cornice work — have no site WiFi. SIM connectivity handles payment at job completion.' },
              { title: 'Adelaide Hills luxury home plastering', body: 'Luxury plasterwork in Stirling, Aldgate, and Crafers involves premium finishes in homes without shared WiFi. SIM connectivity ensures payment collection every time.' },
              { title: 'New estate set plaster', body: 'New estate set plaster in Angle Vale, Munno Para, and Mount Barker operates on sites without utilities. SIM connectivity handles practical completion payments without customer WiFi.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — plasterboard, compound, and cornice can be ordered the same afternoon a deposit is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Plasterers in South Australia require a <strong>Building Work Contractors licence from Consumer and Business Services (CBS)</strong> for work over the threshold. An ABN is sufficient to open a merchant account with Zeller, Square, or Stripe.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Plasterers in South Australia" />
      <RelatedLinks slug="plasterers" type="trade" currentState="sa" />
    </>
  )
}
