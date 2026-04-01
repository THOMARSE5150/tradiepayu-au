import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const QUESTIONS = [
  {
    id: 'wifi',
    q: 'How often do you work somewhere without reliable WiFi?',
    options: [
      { value: 'always', label: 'All the time', sub: 'New estates, plant rooms, remote sites' },
      { value: 'sometimes', label: 'Sometimes', sub: 'A few jobs a week, mostly fine' },
      { value: 'rarely', label: 'Rarely', sub: 'Established buildings, always WiFi available' },
    ],
  },
  {
    id: 'signal',
    q: 'Do you ever work in total dead zones — no mobile signal at all?',
    options: [
      { value: 'yes', label: 'Yes', sub: 'Underground, remote rural, deep basements' },
      { value: 'no', label: 'No', sub: 'Always have some mobile coverage' },
    ],
  },
  {
    id: 'volume',
    q: 'What is your monthly card revenue (roughly)?',
    options: [
      { value: 'low',  label: 'Under $5,000', sub: 'Part-time or just starting out' },
      { value: 'mid',  label: '$5,000–$20,000', sub: 'Full-time sole trader or small team' },
      { value: 'high', label: 'Over $20,000', sub: 'Larger operation or multiple staff' },
    ],
  },
]

function recommend(answers) {
  const { wifi, signal, volume } = answers

  // Total dead zone → Square offline mode is essential
  if (signal === 'yes') {
    return {
      id: 'square',
      name: 'Square Terminal',
      tag: 'Best for dead zones',
      tagColour: 'bg-slate-700',
      reason: 'Your sites have true zero-signal areas — Square Terminal is the only mainstream option with offline payment mode. Cards are stored locally and processed when you reconnect.',
      href: '/providers/square',
      secondary: { label: 'Also consider Zeller + SIM for non-dead-zone jobs', href: '/compare/zeller-vs-square' },
    }
  }

  // Frequent WiFi issues but not zero signal → Zeller SIM
  if (wifi === 'always' || wifi === 'sometimes') {
    if (volume === 'high') {
      return {
        id: 'zeller',
        name: 'Zeller Terminal 1 + SIM',
        tag: 'Best overall',
        tagColour: 'bg-brand-blue',
        reason: "High volume + connectivity issues: Zeller\u2019s 1.4% rate saves significantly at your scale, and the Optus SIM plan handles variable WiFi without relying on customer internet.",
        href: '/providers/zeller',
        secondary: { label: 'High volume? Request a Tyro quote too', href: '/providers/tyro' },
      }
    }
    return {
      id: 'zeller',
      name: 'Zeller Terminal 1 + SIM',
      tag: 'Best overall',
      tagColour: 'bg-brand-blue',
      reason: "The SIM plan ($15/mo) eliminates WiFi dependency on job sites \u2014 no need for the customer\u2019s password or a hotspot. Lowest rate (1.4%) and same-day settlement.",
      href: '/providers/zeller',
      secondary: { label: 'Compare Zeller vs Square', href: '/compare/zeller-vs-square' },
    }
  }

  // Good WiFi, high volume → Zeller still wins on rate, but Tyro worth quoting
  if (volume === 'high') {
    return {
      id: 'zeller',
      name: 'Zeller Terminal 1',
      tag: 'Best for your volume',
      tagColour: 'bg-brand-blue',
      reason: "At high volume, Zeller\u2019s 1.4% rate is the cheapest published option. You also have the option to contact Tyro for a negotiated in-person rate that may come in lower.",
      href: '/providers/zeller',
      secondary: { label: 'High volume? Request a Tyro quote', href: '/providers/tyro' },
    }
  }

  // Good WiFi, normal volume → Zeller standard (no need for SIM)
  return {
    id: 'zeller',
    name: 'Zeller Terminal 1',
    tag: 'Best overall',
    tagColour: 'bg-brand-blue',
      reason: "You have reliable WiFi and a normal volume — Zeller's 1.4% in-person rate, $99 hardware, and same-day settlement make it the most cost-effective pick.",
    href: '/providers/zeller',
    secondary: { label: 'Run the cost calculator for your exact numbers', href: '/calculator' },
  }
}

export default function ProviderFinder() {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(null)

  const currentQ = QUESTIONS[step]
  const answered = answers[currentQ?.id]

  function select(value) {
    const next = { ...answers, [currentQ.id]: value }
    setAnswers(next)
    if (step < QUESTIONS.length - 1) {
      setStep(s => s + 1)
    } else {
      setResult(recommend(next))
    }
  }

  function reset() {
    setAnswers({})
    setStep(0)
    setResult(null)
  }

  return (
    <div className="bg-brand-dark rounded-2xl overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-blue-400 to-blue-600" />
      <div className="px-6 py-6 sm:px-8 sm:py-8">

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-0.5">Provider Finder</p>
            <h2 className="text-lg font-bold text-white">Which EFTPOS suits you?</h2>
          </div>
          {(step > 0 || result) && (
            <button onClick={reset} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Start over
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
            >
              {/* Progress dots */}
              <div className="flex gap-1.5 mb-5">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i < step ? 'bg-brand-blue flex-1' :
                      i === step ? 'bg-brand-blue flex-[2]' :
                      'bg-white/15 flex-1'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm font-semibold text-white mb-4">{currentQ.q}</p>
              <div className="space-y-2">
                {currentQ.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => select(opt.value)}
                    className="w-full text-left px-4 py-3 rounded-xl border border-white/10 hover:border-brand-blue/60 hover:bg-brand-blue/10 transition-all group"
                  >
                    <span className="block text-sm font-medium text-white group-hover:text-brand-blue transition-colors">{opt.label}</span>
                    <span className="block text-xs text-white/40 mt-0.5">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white ${result.tagColour}`}>
                  {result.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">{result.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{result.reason}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={result.href}
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-500 text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-colors"
                >
                  Full review →
                </Link>
                <Link
                  to={`/calculator?monthly=${{ low: 3000, mid: 10000, high: 25000 }[answers.volume] || 5000}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white/70 hover:text-white font-medium rounded-xl px-5 py-2.5 text-sm transition-colors"
                >
                  Calculate your exact cost →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}
