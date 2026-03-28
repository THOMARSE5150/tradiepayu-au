import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Search, RefreshCw, AlertCircle } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About TradiePay AU' },
]

const SITE = 'https://tradiepayau.directory'
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About TradiePay AU',
  description: 'TradiePay AU is an independent comparison site for mobile card payment systems for Australian tradies.',
  url: `${SITE}/about`,
  publisher: { '@type': 'Organization', name: 'TradiePay AU', url: SITE },
}

const pillars = [
  {
    icon: Shield,
    title: 'No paid placements',
    body: 'Providers cannot pay to improve their ranking. Our top picks are determined by criteria that matter on the job site — fees, connectivity, offline capability, and settlement speed — not by commercial relationships.',
  },
  {
    icon: Search,
    title: 'Independent research',
    body: 'Rates and features are sourced directly from provider websites and verified against published pricing. Where rates are ambiguous or require a quote (e.g. Tyro), we note this explicitly rather than present a number.',
  },
  {
    icon: RefreshCw,
    title: 'Regularly updated',
    body: 'Payment provider pricing changes. We review and update all provider data on a rolling basis. The "Updated" date on each page reflects the last verified check — not a set-and-forget publication date.',
  },
  {
    icon: AlertCircle,
    title: 'General information only',
    body: 'TradiePay AU provides general information to help tradies understand their options. We are not a financial adviser and nothing on this site constitutes financial advice. Always verify current rates with providers before signing up.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About TradiePay AU — Independent EFTPOS Comparison for Tradies"
        description="TradiePay AU is an independent comparison site for mobile card payment systems for Australian tradies. No sponsored rankings, no financial advice — just honest comparison."
        canonical="/about"
        jsonLd={jsonLd}
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">About</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">About TradiePay AU</h1>
          <p className="hero-sub">Independent comparison of mobile card payment systems for Australian tradies. No sponsored rankings. No financial advice. Just honest, practical information.</p>
        </div>
      </header>

      <section className="section container-page">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-4"
          >
            What is TradiePay AU?
          </motion.h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              TradiePay AU exists because tradie payment options are genuinely confusing — and most "comparison" sites are just affiliate farms that push whoever pays the highest commission.
            </p>
            <p>
              We built this site to answer a simple question honestly: <strong className="text-brand-dark">which EFTPOS setup actually works on a tradie's job site?</strong> That means looking at connectivity (SIM vs WiFi), offline capability for dead zones, settlement speed for cash flow, and real fees — not promotional rates buried in footnotes.
            </p>
            <p>
              The site covers 5 major Australian providers and 12 trades with specific payment challenges. Every page is written from the perspective of the tradie, not the provider.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            How we rank providers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="lg-light rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <p.icon size={16} className="text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{p.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container-page">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-4"
          >
            Ranking criteria
          </motion.h2>
          <p className="text-slate-600 mb-4 leading-relaxed">Providers are ranked by overall value for Australian tradie use cases. The criteria, in order of weight:</p>
          <ol className="space-y-3">
            {[
              { n: '1', title: 'In-person transaction rate', body: 'The flat percentage fee for card-present payments. Lower is better. We use the standard published rate, not introductory offers.' },
              { n: '2', title: 'Connectivity (SIM vs WiFi)', body: 'Can the terminal work without the customer\'s WiFi? SIM-enabled terminals are significantly more practical for most tradie environments.' },
              { n: '3', title: 'Settlement speed', body: 'When does the money hit your account? Same-day settlement directly affects a tradie\'s ability to manage materials cash flow.' },
              { n: '4', title: 'Offline capability', body: 'Can payments be accepted with zero connectivity? Relevant for underground, switchboard rooms, and remote sites.' },
              { n: '5', title: 'Hardware cost and lock-in', body: 'Upfront terminal cost, monthly fees, and contract length — important for sole traders and small operators.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{item.n}</span>
                <div>
                  <h4 className="font-semibold text-brand-dark mb-0.5">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt container-page">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold text-brand-dark mb-4">A note on referral links</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-4">
            Some links on this site may be referral links — if you sign up to a provider through one, we may receive a small commission from that provider. Any amount received goes entirely toward the cost of running this site: hosting, research time, and keeping provider data accurate and up to date.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm mb-4">
            Referral links are always disclosed on the relevant page. They never influence our rankings or editorial content — a provider cannot improve their position by paying us. Our methodology is applied consistently regardless of any commercial arrangement.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            For questions about our methodology, corrections to provider data, or partnership enquiries, use the <Link to="/contact" className="text-brand-blue hover:underline">contact page</Link> or email <a href="mailto:hello@tradiepayau.directory" className="text-brand-blue hover:underline">hello@tradiepayau.directory</a>.
          </p>
        </div>
      </section>
    </>
  )
}
