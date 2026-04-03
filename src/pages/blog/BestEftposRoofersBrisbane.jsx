import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Roofers in Brisbane' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in Brisbane?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Brisbane roofers. At 1.4% in-person with same-day settlement, it covers Queenslander restoration, storm-damage insurance work, and outer estate roofing.'
  },
  {
    q: 'Does Zeller work in Brisbane?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Brisbane including the inner suburbs, Ipswich, Logan, and the Sunshine Coast hinterland.'
  },
  {
    q: 'What card payment fees do roofers pay in Brisbane?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.'
  },
  {
    q: 'Do I need a licence to accept card payments as a roofer in Queensland?',
    a: 'No payment-specific licence is required. You need your QBCC trade licence and an ABN to open a merchant account.'
  },
  {
    q: 'How quickly do card payments settle for roofers in Brisbane?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. Brisbane roofers purchasing materials after a storm-damage deposit can access funds the same day.'
  }
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in Brisbane (2026)',
    description: 'Best EFTPOS for Brisbane roofers — Queenslander tin roof restoration, cyclone-prep reroofing, and storm-damage insurance work across Greater Brisbane.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-roofers-brisbane-2026',
    datePublished: '2026-04-02',
    dateModified: '2026-04-02',
    author: {
      '@type': 'Organization',
      name: 'TradiePay AU',
      url: 'https://tradiepayau.directory'
    },
    publisher: {
      '@type': 'Organization',
      name: 'TradiePay AU',
      url: 'https://tradiepayau.directory'
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=center&q=80',
      width: 1200,
      height: 630
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tradiepayau.directory/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://tradiepayau.directory/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Best EFTPOS for Roofers in Brisbane',
        item: 'https://tradiepayau.directory/blog/best-eftpos-roofers-brisbane-2026'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Brisbane Roofers',
    description: 'Best EFTPOS terminal for roofers in Brisbane, Queensland.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-roofers-brisbane-2026',
    areaServed: [
      {
        '@type': 'City',
        name: 'Brisbane'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Queensland'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best EFTPOS for roofers in Brisbane?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Brisbane roofers. At 1.4% in-person with same-day settlement, it covers Queenslander restoration, storm-damage insurance work, and outer estate roofing.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Zeller work in Brisbane?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Greater Brisbane including the inner suburbs, Ipswich, Logan, and the Sunshine Coast hinterland.'
        }
      },
      {
        '@type': 'Question',
        name: 'What card payment fees do roofers pay in Brisbane?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee. The SIM plan costs $15/month on top of the $99 terminal hardware.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a licence to accept card payments as a roofer in Queensland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No payment-specific licence is required. You need your QBCC trade licence and an ABN to open a merchant account.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly do card payments settle for roofers in Brisbane?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller settles same-day to a Zeller Transaction Account. Brisbane roofers purchasing materials after a storm-damage deposit can access funds the same day.'
        }
      }
    ]
  }
]
export default function BestEftposRoofersBrisbane() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in Brisbane (2026)"
        description="Best EFTPOS for Brisbane roofers — Queenslander tin roof restoration, cyclone-prep reroofing, and storm-damage insurance work across Greater Brisbane."
        canonical="/blog/best-eftpos-roofers-brisbane-2026"
        ogType="article"
        geoRegion="AU-QLD"
        geoPlacename="Brisbane, Queensland"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Brisbane, QLD</span>
            <span>·</span><span>Updated April 2026</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in Brisbane (2026)</h1>
          <p className="hero-sub">Covering Queenslander tin roof restoration, cyclone-prep reroofing, and storm-damage insurance claims across Greater Brisbane.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Brisbane</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Roofers in Brisbane
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Brisbane roofers. Zeller Terminal 1 is the top pick for Brisbane roofers. At 1.4% in-person with same-day settlement, it covers Queenslander restoration work, cyclone-season reroofing, and outer estate roofing without relying on site WiFi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Rate', value: '1.4%', note: 'In-person tap/chip' },
            { label: 'Hardware', value: '$99', note: 'Outright, no rental' },
            { label: 'Settlement', value: 'Same day', note: 'To Zeller account' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="lg-light rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-brand-blue">{s.value}</p>
              <p className="text-sm font-semibold text-brand-dark mt-0.5">{s.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link to="/trades/roofers/qld" className="text-brand-blue font-medium hover:underline">
            QLD Roofers guide →
          </Link>
          <Link to="/blog/best-eftpos-roofers-qld-2026" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Roofers in Queensland →
          </Link>
          <Link to="/trades/roofers" className="text-brand-blue font-medium hover:underline">
            National roofers guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Brisbane Roofers need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Queenslander tin roof restoration', body: 'Heritage Queenslander restoration in Paddington, New Farm, and Red Hill involves high values and specialist materials. Payment links allow deposit collection before corrugated iron is ordered.' },
              { title: 'Cyclone-prep and storm-damage', body: 'Brisbane\'s storm season drives large volume insurance claim jobs. Same-day Zeller settlement means deposit funds are available to order replacement materials the same day the deposit is collected.' },
              { title: 'Outer Brisbane new estates', body: 'New estate roofing in Ripley, Flagstone, and North Lakes operates on sites without utilities. A SIM terminal is the only reliable payment option.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — deposit funds available to cover materials on the morning of installation.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Roofers in Brisbane`} />
      <RelatedLinks slug="roofers" type="trade" currentState="qld" />
    </>
  )
}
