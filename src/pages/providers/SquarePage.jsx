import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'
import FaqSection from '../../components/FaqSection'
import ComparisonTable from '../../components/ComparisonTable'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Best EFTPOS for Tradies', href: '/#compare-all' },
  { label: 'Square Review' },
]

const faqs = [
  { q: 'Does Square Terminal work offline?', a: 'Yes — Square Terminal supports offline payments. Cards are accepted with no connectivity and processed when you reconnect within 24 hours. Important: some card types are excluded, and there is a risk of later decline. Not suitable as your primary method, but excellent backup for known dead zones.' },
  { q: 'What is Square\'s in-person rate in Australia?', a: '1.6% for in-person tap, chip, or swipe. No fixed per-transaction fee. Invoice/remote payments are 2.2% with no fixed fee.' },
  { q: 'Does Square Terminal have a SIM card?', a: 'No — Square Terminal is WiFi and Ethernet only. For cellular connectivity you need to use your phone as a hotspot, or an external cellular router. This is the main reason many tradies prefer Zeller Terminal 1 with its built-in SIM plan.' },
  { q: 'When should a tradie choose Square over Zeller?', a: 'Specifically for zero-signal job sites: underground, deep basements, large concrete structures with no Optus coverage. Square\'s offline mode is the only way to take a payment in these environments. For all other scenarios, Zeller\'s lower rate wins.' },
]

export default function SquarePage() {
  return (
    <>
      <Breadcrumb crumbs={crumbs} />

      <header className="hero">
        <div className="container-page">
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Provider Review</span>
            <span>·</span><span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl font-bold text-white leading-tight mt-3">Square for Tradies — Full Review (2026)</h1>
          <p className="hero-sub">Best offline capability in the market. The right backup terminal for tradies who work in dead zones.</p>
          <nav className="jump-links">
            <a href="#fees">Fees</a>
            <a href="#offline">Offline Mode</a>
            <a href="#vs-zeller">vs Zeller</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="section container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'In-person rate', value: '1.6%' },
            { label: 'Invoice rate', value: '2.2%' },
            { label: 'Terminal price', value: '$329' },
            { label: 'Offline mode', value: '✓ Yes', highlight: true },
          ].map((s, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-4 text-center">
              <span className="block text-xs text-slate-500 mb-1">{s.label}</span>
              <span className={`block text-lg font-bold ${s.highlight ? 'text-brand-green' : 'text-brand-dark'}`}>{s.value}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-slate-600 space-y-3">
          <p>Square is a mature, globally trusted platform. For Australian tradies, its standout feature is offline mode — the ability to accept card payments with zero internet connectivity. This is the reason to choose Square Terminal over Zeller for specific job types.</p>
          <p>The trade-off: Square Terminal is $329 (vs Zeller's $99), the in-person rate is higher (1.6% vs 1.4%), and there's no built-in SIM — you depend on WiFi or your phone hotspot.</p>
        </div>
      </section>

      <section id="fees" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Square Fees</h2>
          <ComparisonTable
            headers={['Payment type', 'Rate', 'Notes']}
            rows={[
              { highlight: false, cells: ['In-person (tap/chip/swipe)', '1.6%', 'Terminal, Tap to Pay, or reader'] },
              { cells: ['Invoice / remote', '2.2%', 'No fixed per-transaction fee'] },
              { cells: ['Monthly fee', '$0', 'No monthly account fee'] },
            ]}
          />
        </div>
      </section>

      <section id="offline" className="section container-page">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-4">Offline Mode — How It Works</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6 text-sm">
            <p className="font-semibold text-brand-dark mb-2">When to use it: underground work, concrete basements, switchboard rooms, remote properties beyond Optus coverage.</p>
          </div>
          <ol className="space-y-4">
            {[
              { title: 'Enable offline mode in the Square app', body: 'Toggle offline mode on in the Square app before you lose connectivity. The Terminal will accept payments without internet.' },
              { title: 'Take the payment on site', body: 'Customer taps, inserts, or swipes. The Terminal stores the transaction data locally.' },
              { title: 'Reconnect within 24 hours', body: 'The Terminal must reconnect to Square\'s servers within 24 hours. If you don\'t reconnect in time, transactions will expire.' },
              { title: 'Transactions are processed', body: 'Once reconnected, Square processes the stored transactions. Most will succeed — but there is a risk of later decline if the card was cancelled or had insufficient funds while offline.' },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                <div>
                  <h4 className="font-semibold text-brand-dark text-sm mb-1">{step.title}</h4>
                  <p className="text-sm text-slate-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Important warnings:</strong> Some card types are excluded from offline mode. For high-value jobs in dead zones, consider requesting a deposit payment link before arriving on site (requires connectivity at quote time) and only taking the balance offline.
          </div>
        </div>
      </section>

      <section id="vs-zeller" className="section section-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Square vs Zeller for Tradies</h2>
          <ComparisonTable
            headers={['Feature', 'Zeller Terminal 1 + SIM', 'Square Terminal']}
            rows={[
              { highlight: false, cells: ['In-person rate', <strong className="text-brand-blue">1.4%</strong>, '1.6%'] },
              { cells: ['Hardware cost', <strong className="text-brand-blue">$99</strong>, '$329'] },
              { cells: ['SIM / cellular', <span className="text-green-700 font-semibold">✓ $15/mo (Optus)</span>, '✗ WiFi only'] },
              { cells: ['Offline mode', '✗ No', <span className="text-green-700 font-semibold">✓ Yes (24hr window)</span>] },
              { cells: ['Settlement', <span className="text-green-700 font-semibold">Same day</span>, 'Next day'] },
              { cells: ['Receipt printer', '✓ Terminal 1', '✓ Built-in'] },
              { cells: ['Recommendation', 'Primary for most job sites', 'Backup for dead zones'] },
            ]}
          />
          <div className="mt-5 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
            <strong>The two-device strategy:</strong> Many glaziers, electricians, and plumbers carry both. Zeller Terminal 1 ($99, SIM, 1.4%) as primary. Square Terminal ($329, offline) as backup for known dead zones. Neither has a monthly fee — you only pay when you use them.
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title="Square FAQ" />

      <section className="section section-alt container-page">
        <h2 className="text-xl font-bold text-brand-dark mb-4">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-secondary text-sm">Full provider comparison</Link>
          <Link to="/providers/zeller" className="btn-secondary text-sm">Zeller full review</Link>
          <Link to="/trades/glaziers" className="btn-secondary text-sm">Best EFTPOS for Glaziers</Link>
          <Link to="/trades/electricians" className="btn-secondary text-sm">Best EFTPOS for Electricians</Link>
        </div>
      </section>
    </>
  )
}
