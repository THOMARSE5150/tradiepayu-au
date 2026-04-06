import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'
import FaqSection from '../../components/FaqSection'
import RelatedLinks from '../../components/RelatedLinks'

import siteMeta from '../../data/site-meta.json'

const SITE = 'https://tradiepayau.directory'
const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Best EFTPOS for Roofers in Sydney' },
]
const faqs = [
  {
    q: 'What is the best EFTPOS for roofers in Sydney?',
    a: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Sydney roofers. At 1.4% in-person with same-day settlement, it covers Sydney\'s inner-west storm-damage work and Western Sydney new estate roofing without relying on site WiFi.'
  },
  {
    q: 'Does Zeller work in Sydney?',
    a: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Sydney\'s metro area including the inner west, Western Sydney, the Hills District, and the Northern Beaches. Same-day settlement is available to a Zeller Transaction Account.'
  },
  {
    q: 'What card payment fees do roofers pay in Sydney?',
    a: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee on standard plans. The SIM plan costs $15/month on top of the $99 terminal hardware.'
  },
  {
    q: 'Do I need a licence to accept card payments as a roofer in New South Wales?',
    a: 'No payment-specific licence is required. You need your trade licence (NSW Fair Trading) and an ABN to open a merchant account with Zeller, Square, or Stripe.'
  },
  {
    q: 'How quickly do card payments settle for roofers in Sydney?',
    a: 'Zeller settles same-day to a Zeller Transaction Account. For Sydney roofers who purchase materials after collecting a deposit, same-day funds mean no waiting overnight. Square settles next business day; Stripe settles in 2 business days.'
  }
]
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best EFTPOS for Roofers in Sydney (2026)',
    description: 'Best EFTPOS for Sydney roofers — storm-damage insurance claims, terrace reroofing in the inner west, and new estate tile work across Western Sydney.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-roofers-sydney-2026',
    datePublished: '2026-04-02',
    dateModified: siteMeta.lastVerified,
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
      url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&fit=crop&crop=center&q=80',
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
        name: 'Best EFTPOS for Roofers in Sydney',
        item: 'https://tradiepayau.directory/blog/best-eftpos-roofers-sydney-2026'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TradiePay AU — EFTPOS Guides for Sydney Roofers',
    description: 'Best EFTPOS terminal for roofers in Sydney, New South Wales.',
    url: 'https://tradiepayau.directory/blog/best-eftpos-roofers-sydney-2026',
    areaServed: [
      {
        '@type': 'City',
        name: 'Sydney'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'New South Wales'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best EFTPOS for roofers in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller Terminal 1 with the Optus SIM plan is the top pick for Sydney roofers. At 1.4% in-person with same-day settlement, it covers Sydney\'s inner-west storm-damage work and Western Sydney new estate roofing without relying on site WiFi.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Zeller work in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Zeller Terminal 1\'s Optus SIM covers all of Sydney\'s metro area including the inner west, Western Sydney, the Hills District, and the Northern Beaches. Same-day settlement is available to a Zeller Transaction Account.'
        }
      },
      {
        '@type': 'Question',
        name: 'What card payment fees do roofers pay in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller charges 1.4% for in-person tap/chip/swipe — the lowest flat rate in Australia. No monthly fee on standard plans. The SIM plan costs $15/month on top of the $99 terminal hardware.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need a licence to accept card payments as a roofer in New South Wales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No payment-specific licence is required. You need your trade licence (NSW Fair Trading) and an ABN to open a merchant account with Zeller, Square, or Stripe.'
        }
      },
      {
        '@type': 'Question',
        name: 'How quickly do card payments settle for roofers in Sydney?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zeller settles same-day to a Zeller Transaction Account. For Sydney roofers who purchase materials after collecting a deposit, same-day funds mean no waiting overnight. Square settles next business day; Stripe settles in 2 business days.'
        }
      }
    ]
  }
]
export default function BestEftposRoofersSydney() {
  return (
    <>
      <Meta
        title="Best EFTPOS for Roofers in Sydney (2026)"
        description="Best EFTPOS for Sydney roofers — storm-damage insurance claims, terrace reroofing in the inner west, and new estate tile work across Western Sydney."
        canonical="/blog/best-eftpos-roofers-sydney-2026"
        ogType="article"
        geoRegion="AU-NSW"
        geoPlacename="Sydney, New South Wales"
        jsonLd={jsonLd}
      />
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src={`https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&h=560&fit=crop&crop=center&q=80`} alt="" fetchPriority="high" className="w-full h-full object-cover" onError={e => { e.currentTarget.style.opacity = '0' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">City Guide</span>
            <span>·</span><span>Sydney, NSW</span>
            <span>·</span><span>Updated {siteMeta.lastVerifiedDisplay}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Best EFTPOS for Roofers in Sydney (2026)</h1>
          <p className="hero-sub">Covering storm-damage insurance work, inner-west terrace reroofing, and new estate tile work across Western Sydney.</p>
          <nav className="jump-links">
            <a href="#verdict">Top Pick</a>
            <a href="#context">Why Sydney</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>
      <section id="verdict" className="section container-page">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
          Best EFTPOS for Roofers in Sydney
        </motion.h2>
        <div className="infobox mb-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>Zeller Terminal 1</strong> is the top pick for Sydney roofers. Zeller Terminal 1 is the top pick for Sydney roofers. At 1.4% in-person with no monthly fee and same-day settlement, it covers storm-damage insurance jobs in the inner west and new estate tile work across Western Sydney.
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
          <Link to="/trades/roofers/nsw" className="text-brand-blue font-medium hover:underline">
            NSW Roofers guide →
          </Link>
          <Link to="/blog/best-eftpos-roofers-nsw-2026" className="text-brand-blue font-medium hover:underline">
            Best EFTPOS for Roofers in NSW →
          </Link>
          <Link to="/trades/roofers" className="text-brand-blue font-medium hover:underline">
            National roofers guide →
          </Link>
        </div>
      </section>
      <section id="context" className="section section-alt">
        <div className="container-page">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-2xl font-bold text-brand-dark mb-4">
            Why Sydney Roofers need SIM connectivity
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Storm-damage insurance work', body: 'Sydney storm season drives large insurance claim jobs — deposits are often collected before materials are ordered. Same-day Zeller settlement means the deposit is available to cover roof tile orders the same morning.' },
              { title: 'Inner-west terrace reroofing', body: 'Heritage terrace reroofing in Newtown, Leichhardt, and Glebe involves large per-job values ($15,000+). Payment links let you collect the deposit before scaffolding goes up.' },
              { title: 'Western Sydney new estates', body: 'New estate roofing in Marsden Park and Box Hill operates on sites without utilities. A Zeller SIM terminal is the only reliable payment option on site.' },
              { title: 'Same-day settlement', body: 'Zeller settles to your Zeller Transaction Account same day — deposit funds available to cover same-day tile and materials orders.' }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="lg-light rounded-2xl p-5">
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={faqs} title={`FAQ — Roofers in Sydney`} />
      <RelatedLinks slug="roofers" type="trade" currentState="nsw" />
    </>
  )
}
