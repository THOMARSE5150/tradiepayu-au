import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'
import siteMeta from '../../data/site-meta.json'
import { blogHeroUrl, blogOgUrl } from '../../utils/blogImage'

const SITE = 'https://tradiepayau.directory'
const crumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Best EFTPOS for Tilers in Western Australia (2026)' }]
const faqs = [
  { q: 'What is the best EFTPOS for tilers in Western Australia?', a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for WA tilers. At 1.4% in-person with same-day settlement, it covers Perth new estate bathroom tiling, luxury coastal home work, and remote mining accommodation tiling.' },
  { q: 'Does Zeller work across Western Australia?', a: 'Yes — Zeller Terminal 1\'s Optus SIM covers Perth metro and most regional WA centres. For remote Pilbara and Kimberley sites, Square Terminal\'s offline mode handles payments when signal returns.' },
  { q: 'What card payment fees do tilers pay in WA?', a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan adds $15/month on top of the $99 terminal.' },
  { q: 'Do I need a licence to accept card payments as a tiler in WA?', a: 'No payment licence is required. WA tilers require a building contractor licence from the Building Services Board (under Building and Energy) for work over the threshold. An ABN is sufficient to open a merchant account.' },
  { q: 'How quickly do card payments settle for tilers in WA?', a: 'Zeller settles same-day to a Zeller Transaction Account — WA tilers can order tiles the same afternoon a deposit is collected.' },
]
const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best EFTPOS for Tilers in Western Australia (2026)', description: 'Best EFTPOS for WA tilers — Perth new estate bathroom tiling, luxury coastal home work, and remote mining accommodation tiling.', url: `${SITE}/blog/best-eftpos-tilers-wa-2026`, datePublished: '2026-04-06', dateModified: siteMeta.lastVerified, author: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE }, image: { '@type': 'ImageObject', url: blogOgUrl('best-eftpos-tilers-wa-2026'), width: 1200, height: 630 } },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` }, { '@type': 'ListItem', position: 3, name: 'Best EFTPOS for Tilers in Western Australia (2026)', item: `${SITE}/blog/best-eftpos-tilers-wa-2026` } ] },
  { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TradiePay AU — EFTPOS Guides for WA Tilers', description: 'Best EFTPOS terminal for tilers across Western Australia.', url: `${SITE}/blog/best-eftpos-tilers-wa-2026`, areaServed: [ { '@type': 'AdministrativeArea', name: 'Western Australia' }, { '@type': 'City', name: 'Perth' } ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
]
export default function BestEftposTilersWAPost() {
  return (
    <>
      <Meta title="Best EFTPOS for Tilers in Western Australia (2026)" description="Best EFTPOS for WA tilers — Perth new estate bathroom tiling, luxury coastal home work, and remote mining accommodation tiling." canonical="/blog/best-eftpos-tilers-wa-2026" ogType="article" geoRegion="AU-WA" geoPlacename="Perth, Western Australia" jsonLd={jsonLd} />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={blogHeroUrl('best-eftpos-tilers-wa-2026')} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">State Guide</span>
            <span>·</span><span>Western Australia</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Tilers in Western Australia (2026)</h1>
          <p className="hero-sub">Covering Perth new estate bathroom tiling, luxury coastal home work in Cottesloe and Scarborough, and remote Pilbara mining accommodation tiling.</p>
          <nav className="jump-links"><a href="#verdict">Top Pick</a><a href="#coverage">Coverage</a><a href="#faq">FAQ</a></nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">Best EFTPOS for Tilers in Western Australia</motion.h2>
        <div className="infobox mb-6"><p className="text-sm text-slate-700 leading-relaxed"><strong>Zeller Terminal 1</strong> is the top pick for WA tilers. At 1.4% in-person with SIM connectivity via Optus and same-day settlement, it covers Perth new estate tiling, luxury coastal bathroom work, and remote Pilbara mining accommodation jobs.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[ { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' }, { label: 'Hardware', value: '$99', note: 'Outright, no rental' }, { label: 'Settlement', value: 'Same day', note: 'To Zeller account' } ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p><p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p><p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/tilers/wa" className="text-brand-blue font-medium hover:underline">WA Tilers guide on TradiePay →</Link>
          <Link to="/trades/tilers" className="text-brand-blue font-medium hover:underline">National tilers guide →</Link>
        </div>
      </section>
      <section id="coverage" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Coverage in Western Australia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Perth new estate bathroom tiling', body: 'New estate bathroom and wet area tiling in Ellenbrook, Baldivis, and Harrisdale operates on sites without utilities. SIM connectivity handles payment at practical completion without customer WiFi.' },
              { title: 'Luxury coastal home tiling', body: 'Luxury bathroom and alfresco tiling in Cottesloe, Scarborough, and Claremont involves high-value tiles in occupied homes without shared WiFi. SIM connectivity handles payment at job completion.' },
              { title: 'Remote mining accommodation', body: 'WA tilers working on Pilbara mining accommodation in Karratha and Newman face remote sites with no WiFi. Zeller\'s Optus SIM covers most mining town areas; Square\'s offline mode handles isolated sites.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — specialty tiles and adhesive can be ordered the same afternoon a deposit is collected.' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 lg-light rounded-2xl p-5">
            <h3 className="font-semibold text-brand-dark mb-2 text-sm">Licensing &amp; regulatory body</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Tilers in Western Australia require a <strong>building contractor licence from the Building Services Board</strong> (under Building and Energy) for work over the threshold. An ABN is sufficient to open a merchant account.</p>
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title="FAQ — Tilers in Western Australia" />
      <RelatedLinks slug="tilers" type="trade" currentState="wa" />
    </>
  )
}
