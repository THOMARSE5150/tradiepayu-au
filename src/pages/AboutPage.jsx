import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Search, RefreshCw, AlertCircle, CheckCircle, FileText, Clock } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About TradiePay AU' },
]

const SITE = 'https://tradiepayau.directory'

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'TradiePay AU',
  url: SITE,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE}/favicon.svg`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'editorial',
    email: 'hello@tradiepayau.directory',
    areaServed: 'AU',
    availableLanguage: 'en-AU',
  },
  foundingDate: '2025',
  description: 'Independent comparison of mobile card payment systems for Australian tradies. Rankings are editorially independent — providers cannot pay to improve their position.',
  address: { '@type': 'PostalAddress', addressCountry: 'AU' },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About TradiePay AU — Independent EFTPOS Comparison for Tradies',
    description: 'TradiePay AU is an independent comparison site for mobile card payment systems for Australian tradies. Rankings are editorially independent. Not financial advice.',
    url: `${SITE}/about`,
    datePublished: '2025-01-01',
    dateModified: '2026-03-31',
    publisher: ORG,
    author: ORG,
  },
  {
    '@context': 'https://schema.org',
    ...ORG,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: 'TradiePay AU',
    description: 'Independent comparison of EFTPOS and mobile card payment systems for Australian tradies.',
    publisher: { '@id': `${SITE}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/trades/{search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
]

const pillars = [
  {
    icon: Shield,
    title: 'No paid placements',
    body: 'Providers cannot pay to improve their ranking. Our top picks are determined by criteria that matter on the job site — fees, connectivity, offline capability, and settlement speed. Some outbound links may earn a referral commission, which goes toward running the site; this never affects how providers are ranked.',
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
        description="TradiePay AU independently compares mobile card payment systems for Australian tradies. Rankings are editorially independent — providers cannot pay to improve their position. Not financial advice."
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
          <p className="hero-sub">Independent comparison of mobile card payment systems for Australian tradies. Rankings are editorially independent — providers cannot pay to improve their position. Not financial advice.</p>
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
              TradiePay AU exists because tradie payment options are genuinely confusing — and most "comparison" sites rank providers based on who pays the highest commission, not what works on a job site.
            </p>
            <p>
              We built this site to answer a simple question honestly: <strong className="text-brand-dark">which EFTPOS setup actually works on a tradie's job site?</strong> That means looking at connectivity (SIM vs WiFi), offline capability for dead zones, settlement speed for cash flow, and real fees — not promotional rates buried in footnotes.
            </p>
            <p>
              The site covers 5 major Australian providers and 18 trades with specific payment challenges. Every page is written from the perspective of the tradie, not the provider.
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

      <section className="section container-page">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-4"
          >
            Who runs this site
          </motion.h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              TradiePay AU is run by an Australian small business operator with hands-on experience running field-based service work — including direct use of Zeller Terminal 1, Square Terminal, and Stripe in real job-site conditions across metro and regional areas. Tyro and Shift4 were evaluated through their published documentation, direct sales conversations, and community-sourced tradie feedback.
            </p>
            <p>
              The site launched in 2025 after observing that most EFTPOS comparison content was either written by providers themselves, heavily affiliate-driven, or focused on retail use cases irrelevant to tradies. The tradie context — job-site connectivity, same-day settlement, after-hours call-outs — was consistently ignored.
            </p>
            <p>
              Provider data is reviewed and updated quarterly at minimum. Where rates are ambiguous or require direct negotiation (e.g. Tyro in-person rates), this is stated explicitly rather than presenting an inferred figure.
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Last reviewed</span>
            <span className="text-sm font-bold text-brand-dark">April 2026</span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-page max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-brand-dark mb-6"
          >
            How we verify rate data
          </motion.h2>
          <div className="space-y-4">
            {[
              { icon: Search, title: 'Primary source: provider websites', body: 'All in-person rates, hardware costs, and SIM plan pricing are sourced directly from provider pricing pages. We link to or cite the specific page where each rate is published. If a provider updates their pricing and we catch it, the site is updated within the same review cycle.' },
              { icon: FileText, title: 'Where quotes are required', body: 'Tyro does not publish a single in-person rate — it varies by turnover and card mix. We note this explicitly on the Tyro page rather than present a rate. Shift4\'s merchant agreement terms are not publicly published — we flag this as a transparency risk and advise tradies to request the full contract before signing.' },
              { icon: Clock, title: 'Quarterly review cycle', body: 'All provider data is reviewed at minimum once per quarter. The "Updated" date on each page reflects the date the data was last verified against provider sources — not just a cosmetic date change. Rate change alerts feed into the review schedule between cycles.' },
              { icon: CheckCircle, title: 'What we do not verify', body: 'We do not independently test terminal hardware for every review cycle. Connectivity coverage (Optus SIM range) relies on Optus published coverage maps, which are updated by the carrier. Settlement timing claims are verified through provider documentation and user-reported experience.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="lg-light rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-brand-blue" />
                  </div>
                  <h3 className="font-semibold text-brand-dark text-sm">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
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
            Corrections and updates
          </motion.h2>
          <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
            <p>
              Payment provider pricing changes regularly — sometimes with little public notice. If you spot a rate or feature that appears out of date or incorrect, please <Link to="/contact" className="text-brand-blue hover:underline">let us know via the contact page</Link>. We review all correction requests and update the relevant pages within the next review cycle.
            </p>
            <p>
              We have previously corrected: Zeller's SIM plan pricing after a mid-year update, Square Terminal's offline transaction limits following a policy change, and Stripe's Tap to Pay authorisation fee structure.
            </p>
          </div>
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
