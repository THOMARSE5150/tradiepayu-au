import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const IMG = 'photo-1558618666-fcd25c85cd64'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Glaziers in New South Wales (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for glaziers in New South Wales?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for NSW glaziers. At 1.4% in-person with same-day settlement, it covers Sydney emergency glass replacement, new estate window installation, and commercial glazing fit-out.' },
  { q: 'Does Zeller work across New South Wales?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Sydney metro and most regional NSW areas. Glaziers on emergency callouts and renovation sites have no site WiFi — SIM connectivity handles payment on the spot.' },
  { q: 'What card payment fees do glaziers pay in NSW?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'Do I need a licence to accept card payments as a glazier in NSW?', a: 'No payment licence is required. NSW glaziers performing glass work in homes may require a home building contractor licence from NSW Fair Trading for work over the threshold. An ABN is sufficient to open a merchant account.' },
  { q: 'How quickly do card payments settle for glaziers in NSW?', a: 'Zeller settles same-day to a Zeller Transaction Account — NSW glaziers can order replacement glass the same afternoon a payment is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Glaziers in New South Wales (2026)', description: 'Best EFTPOS for NSW glaziers — Sydney emergency glass replacement, new estate window installation, and commercial glazing fit-out.', url: `${SITE}/blog/best-eftpos-glaziers-nsw-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: `https://images.unsplash.com/${IMG}?w=1200&h=630&fit=crop&crop=entropy&q=80`, width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Glaziers in New South Wales (2026)', item: `${SITE}/blog/best-eftpos-glaziers-nsw-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for NSW Glaziers', description: 'Best EFTPOS terminal for glaziers across New South Wales.', url: `${SITE}/blog/best-eftpos-glaziers-nsw-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'New South Wales' }, { '@type': 'City', name: 'Sydney' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposGlaziersNSWPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Glaziers in New South Wales (2026)" description="Best EFTPOS for NSW glaziers — Sydney emergency glass replacement, new estate window installation, and commercial glazing fit-out." canonical="/blog/best-eftpos-glaziers-nsw-2026" ogType="article" geoRegion="AU-NSW" geoPlacename="Sydney, New South Wales" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/${IMG}?w=900&h=560&fit=crop&crop=entropy&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>New South Wales</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Glaziers in New South Wales (2026)</h1>
          <p className="hero-sub">Covering Sydney emergency glass replacement, new estate window installation in growth corridors, and commercial glazing fit-out across NSW — no site WiFi required.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">Coverage</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Glaziers in New South Wales</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for NSW glaziers. At 1.4% in-person with SIM connectivity via Optus and same-day settlement, it handles emergency callouts, new estate window installation, and commercial glazing fit-out without relying on site WiFi.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/glaziers/nsw" className="text-brand-blue font-medium hover:underline">NSW Glaziers guide on TradiePay →</Link>
          <Link to="/trades/glaziers" className="text-brand-blue font-medium hover:underline">National glaziers guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in New South Wales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Emergency glass replacement', body: 'Emergency glass replacement across Sydney involves same-day callouts to homes and businesses with no access to customer WiFi. SIM connectivity handles payment on the spot at job completion.' },
              { title: 'New estate window installation', body: 'New estate window installation in Box Hill, Marsden Park, and Jordan Springs operates on sites without utilities. SIM connectivity handles payment at practical completion without customer WiFi.' },
              { title: 'Commercial glazing fit-out', body: 'Commercial glazing in Sydney CBD, Parramatta, and Chatswood involves restricted site access and no resident WiFi during construction. SIM connectivity is essential for payment collection.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — replacement glass can be ordered the same afternoon a payment is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">NSW glaziers performing glass work in homes may require a <strong>home building contractor licence from NSW Fair Trading</strong> for work over the threshold. An ABN is sufficient to open a merchant account with Zeller, Square, or Stripe.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Glaziers in New South Wales" />
      <RelatedLinks slug="glaziers" type="trade" currentState="nsw" />
    </>
  )
}
