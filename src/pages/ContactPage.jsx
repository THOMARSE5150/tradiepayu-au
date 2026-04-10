import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, X,
  Shield, RefreshCw, AlertCircle, Clock,
  Briefcase, MessageSquare, Zap, CheckCheck, FileSearch,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { haptic } from '../utils/haptic'
import { trackFormStart, trackFormSubmit } from '../utils/analytics'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
]

const TOPICS = [
  { value: '', label: 'Select a topic…' },
  { value: 'Rate correction', label: 'Rate correction' },
  { value: 'Data error', label: 'Data error' },
  { value: 'Partnership', label: 'Partnership enquiry' },
  { value: 'General', label: 'General question' },
]
const MAX_MSG = 1000

const WORKER_URL = 'https://tradiepay-contact-form.5p5ccbcgnr.workers.dev'

const NEXT_STEPS = [
  { label: 'Compare all providers', href: '/providers', note: 'Zeller, Square, Stripe, Tyro, Shift4' },
  { label: 'EFTPOS cost calculator', href: '/calculator', note: 'See real monthly costs at your volume' },
  { label: 'Zeller vs Square vs Stripe', href: '/blog/zeller-vs-square-vs-stripe-eftpos-tradies-2026', note: '3-way comparison with real cost tables' },
]

const TRUST_SIGNALS = [
  'Independent platform',
  'Corrections welcomed',
  'Updated regularly',
  'Fast review',
]

const CONTACT_TOPICS = [
  {
    icon: AlertCircle,
    colour: 'bg-amber-50 text-amber-500 border-amber-100',
    title: 'Rate correction',
    desc: "If a provider's transaction rate, surcharge cap, or hardware price looks wrong, let us know. A source helps but isn't required.",
    value: 'Rate correction',
  },
  {
    icon: FileSearch,
    colour: 'bg-red-50 text-red-500 border-red-100',
    title: 'Data error',
    desc: 'Incorrect feature listings, availability changes, or outdated product info — we verify and update promptly.',
    value: 'Data error',
  },
  {
    icon: Briefcase,
    colour: 'bg-blue-50 text-brand-blue border-blue-100',
    title: 'Partnership enquiry',
    desc: 'Commercial, affiliate, or content partnership discussions. Our editorial independence is non-negotiable.',
    value: 'Partnership',
  },
  {
    icon: MessageSquare,
    colour: 'bg-slate-100 text-slate-500 border-slate-200',
    title: 'General question',
    desc: 'Questions about how the site works, how we research, or anything else. Happy to help.',
    value: 'General',
  },
]

// ── Success modal ─────────────────────────────────────────────────────────────

function SuccessModal({ onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.34, 1.1, 0.64, 1] }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={15} className="text-slate-500" />
        </button>

        <div className="px-6 pt-8 pb-6 text-center border-b border-slate-100">
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: [0.34, 1.5, 0.64, 1] }}
            className="w-14 h-14 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle2 size={26} className="text-green-500" />
          </motion.div>
          <h2 className="text-xl font-bold text-brand-dark mb-1">Confirmation sent</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Check your inbox — we&apos;ve sent a confirmation with your message details. We&apos;ll review it and follow up as soon as possible.
          </p>
        </div>

        <div className="px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Explore while we review</p>
          <div className="space-y-2">
            {NEXT_STEPS.map(step => (
              <Link
                key={step.href}
                to={step.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-brand-blue/30 rounded-2xl transition-all group"
              >
                <div>
                  <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{step.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{step.note}</p>
                </div>
                <ArrowRight size={15} className="text-slate-300 group-hover:text-brand-blue transition-colors flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-brand-dark text-sm font-semibold transition-colors"
          >
            Done
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Field ─────────────────────────────────────────────────────────────────────

const fieldCls = "w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-brand-dark text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"

function Field({ id, name, label, placeholder, type = 'text', inputMode, autoComplete, autoCapitalize, autoCorrect, spellCheck, enterKeyHint, error, onFocus }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        enterKeyHint={enterKeyHint}
        placeholder={placeholder}
        required
        onFocus={() => { haptic('light'); onFocus?.() }}
        className={fieldCls}
      />
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const location = useLocation()
  const [status, setStatus]           = useState('idle')
  const [fieldErrors, setFieldErrors] = useState({})
  const [msgLen, setMsgLen]           = useState(0)
  const [showModal, setShowModal]     = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(() => {
    const param = new URLSearchParams(location.search).get('topic') ?? ''
    return TOPICS.some(t => t.value && t.value === param) ? param : ''
  })
  const textareaRef    = useRef(null)
  const submitRef      = useRef(null)
  const formRef        = useRef(null)
  const formStartedRef = useRef(false)

  const handleFirstInteraction = useCallback(() => {
    if (!formStartedRef.current) {
      formStartedRef.current = true
      trackFormStart('contact')
    }
  }, [])

  const clearError = useCallback(() => {
    if (status === 'error') { setStatus('idle'); setFieldErrors({}) }
  }, [status])

  useEffect(() => {
    if (status === 'success') { haptic('success'); setShowModal(true) }
  }, [status])
  useEffect(() => { if (status === 'error') haptic('error') }, [status])

  const scrollToSubmit = useCallback(() => {
    setTimeout(() => {
      submitRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 350)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    haptic('light')
    setStatus('submitting')
    setFieldErrors({})

    const data     = Object.fromEntries(new FormData(e.target))
    const endpoint = WORKER_URL

    try {
      const res  = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (res.ok) {
        trackFormSubmit('contact', { topic: data.topic })
        setStatus('success')
        formRef.current?.reset()
        setMsgLen(0)
        setSelectedTopic('')
        if (textareaRef.current) textareaRef.current.style.height = ''
      } else {
        if (json.errors) {
          const errs = {}
          json.errors.forEach(err => { if (err.field) errs[err.field] = err.message })
          setFieldErrors(errs)
        }
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handleTextareaInput(e) {
    clearError()
    setMsgLen(e.target.value.length)
    const el = e.target
    el.style.height = 'auto'
    const isMobile = window.innerWidth < 640
    el.style.height = `${Math.min(el.scrollHeight, isMobile ? 160 : 260)}px`
  }

  const submitting = status === 'submitting'

  return (
    <>
      <Meta
        title="Contact TradiePay AU — Corrections, Questions & Partnerships"
        description="Found an error in our data? Have a partnership enquiry or general question? Use the form for the fastest response — we review every message."
        canonical="/contact"
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/85 to-slate-900/75" />
        </div>

        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />

          <p className="text-xs font-semibold text-brand-blue/80 uppercase tracking-widest mt-4 mb-2">
            Independent EFTPOS Comparison · TradiePay AU
          </p>

          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight max-w-2xl">
            Corrections, questions,<br className="hidden sm:block" /> and partnerships
          </h1>

          <p className="hero-sub max-w-xl">
            Found an error in our data? Have a question about how we work, or a partnership to discuss?
            Use the form — we review every message and confirm instantly.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 sm:mt-5">
            {TRUST_SIGNALS.map(signal => (
              <span key={signal} className="flex items-center gap-1.5 text-sm text-white/65">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                {signal}
              </span>
            ))}
          </div>

          <a
            href="mailto:hello@tradiepayau.directory"
            className="inline-flex items-center gap-1.5 mt-2 sm:mt-4 text-sm text-white/55 hover:text-white/80 transition-colors"
          >
            Prefer email? <ArrowRight size={13} strokeWidth={2} />
          </a>
        </div>
      </header>

      {/* ── Form section ──────────────────────────────────────────────────── */}
      <section className="section-alt pt-6 sm:pt-14 pb-10 sm:pb-14">
        <div className="container-page">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-start">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Send us a message</p>
                <h2 className="text-xl font-bold text-brand-dark">We review every submission</h2>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Rate corrections and data updates are verified and applied promptly.
                </p>
              </div>

              {/* Compact pre-form trust strip */}
              <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4 px-0.5">
                {[
                  { icon: Zap,        text: 'Instant confirmation' },
                  { icon: Clock,      text: 'Same-day review' },
                  { icon: CheckCheck, text: 'Corrections applied' },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Icon size={12} className="text-brand-blue flex-shrink-0" />
                    {text}
                  </span>
                ))}
              </div>

              <motion.form
                ref={formRef}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleSubmit}
                onChange={clearError}
                className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-7 space-y-4 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    id="name" name="name" label="Full name"
                    placeholder="Jane Smith"
                    autoComplete="name" autoCapitalize="words"
                    enterKeyHint="next" error={fieldErrors.name}
                    onFocus={handleFirstInteraction}
                  />
                  <Field
                    id="email" name="email" label="Email address"
                    placeholder="jane@example.com.au"
                    type="email" inputMode="email"
                    autoComplete="email" autoCapitalize="none"
                    autoCorrect="off" spellCheck={false}
                    enterKeyHint="next" error={fieldErrors.email}
                    onFocus={handleFirstInteraction}
                  />
                </div>

                {/* Topic */}
                <div>
                  <label htmlFor="topic" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={selectedTopic}
                    onChange={e => setSelectedTopic(e.target.value)}
                    onFocus={() => { haptic('light'); handleFirstInteraction() }}
                    className={`${fieldCls} appearance-none cursor-pointer`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      paddingRight: '40px',
                    }}
                  >
                    {TOPICS.map(t => (
                      <option key={t.value} value={t.value} disabled={!t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      ref={textareaRef}
                      required
                      rows={4}
                      maxLength={MAX_MSG}
                      placeholder="What would you like to tell us? The more detail, the faster we can act."
                      enterKeyHint="send"
                      autoComplete="off"
                      onInput={handleTextareaInput}
                      onFocus={() => { haptic('light'); scrollToSubmit(); handleFirstInteraction() }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-dark text-sm placeholder-slate-400 resize-none focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all pb-7"
                      style={{ minHeight: '96px', maxHeight: '160px' }}
                    />
                    <span className={`absolute bottom-2.5 right-3.5 text-[11px] select-none transition-colors ${msgLen > MAX_MSG * 0.9 ? 'text-amber-500' : 'text-slate-300'}`}>
                      {msgLen}/{MAX_MSG}
                    </span>
                  </div>
                  {fieldErrors.message && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.message}</p>}
                </div>

                {status === 'error' && Object.keys(fieldErrors).length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl px-4 py-3.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-red-700 leading-tight">Submission failed</p>
                        <p className="text-xs text-red-600 mt-1 leading-relaxed">
                          Your details are still in the form — hit the button below to try again. If the problem persists,{' '}
                          <a
                            href="mailto:hello@tradiepayau.directory"
                            className="underline underline-offset-2 font-medium hover:text-red-700"
                          >
                            email us directly
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  ref={submitRef}
                  type="submit"
                  disabled={submitting}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-xl py-3.5 px-6 text-sm transition-colors duration-150 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 4px 16px rgba(0,106,255,0.25)' }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : status === 'error' && Object.keys(fieldErrors).length === 0 ? (
                    <>Try again <RefreshCw size={14} strokeWidth={2.5} /></>
                  ) : (
                    <>Send message <ArrowRight size={15} strokeWidth={2.5} /></>
                  )}
                </motion.button>

                <p className={`text-xs text-center leading-relaxed transition-colors ${submitting ? 'text-brand-blue font-medium' : 'text-slate-400'}`}>
                  {submitting ? 'Sending your message — please wait…' : "Instant confirmation to your inbox. We don\u2019t share your details with anyone."}
                </p>
              </motion.form>
            </div>

            {/* Context panel — 2 cols, desktop only */}
            <div className="hidden lg:block lg:col-span-2 lg:sticky lg:top-24 space-y-4 mt-14">

              {/* What happens next */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">After you submit</p>
                <ol className="space-y-3">
                  {[
                    { n: 1, text: 'Instant confirmation sent to your inbox' },
                    { n: 2, text: 'We review your message — usually same day' },
                    { n: 3, text: 'We follow up directly by email' },
                  ].map(({ n, text }) => (
                    <li key={n} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
                      <span className="text-sm text-slate-600 leading-snug">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Topic guide */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-4">Choose the right topic</p>
                <ul className="space-y-3">
                  {[
                    { topic: 'Rate correction', note: 'Wrong fee, rate, or pricing' },
                    { topic: 'Data error', note: 'Incorrect product or feature info' },
                    { topic: 'Partnership', note: 'Commercial or affiliate enquiry' },
                    { topic: 'General', note: 'Anything else' },
                  ].map(({ topic, note }) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50 flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-brand-dark leading-tight">{topic}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Independence note */}
              <div className="bg-brand-dark/[0.03] border border-slate-200 rounded-2xl p-4">
                <div className="flex items-start gap-2.5">
                  <Shield size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Provider payments do not affect our rankings or editorial decisions. Corrections are always welcomed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── What you can contact us about ─────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Contact topics</p>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-dark">What you can contact us about</h2>
            <p className="text-sm text-slate-500 mt-1.5 max-w-xl">
              Each topic goes to the right reviewer. Select the closest match when filling in the form.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACT_TOPICS.map(({ icon: Icon, colour, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colour}`}>
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark mb-1">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Editorial integrity + quick links ─────────────────────────────── */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Editorial integrity */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">How we work</p>
              <h2 className="text-lg font-bold text-brand-dark mb-4">Independent by design</h2>
              <div className="space-y-3">
                {[
                  { icon: Shield,    text: 'Provider payments do not affect rankings or editorial content.' },
                  { icon: RefreshCw, text: 'Rate and pricing data is verified and updated when changes occur.' },
                  { icon: CheckCheck,text: 'Corrections submitted via the contact form are reviewed and applied promptly.' },
                  { icon: Zap,       text: 'Affiliate commissions from outbound links fund the site — they do not influence rankings.' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-blue/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-brand-blue" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Explore</p>
              <h2 className="text-lg font-bold text-brand-dark mb-4">While you wait for a reply</h2>
              <div className="space-y-2">
                {NEXT_STEPS.map(step => (
                  <Link
                    key={step.href}
                    to={step.href}
                    className="flex items-center justify-between px-4 py-3.5 bg-white hover:bg-blue-50 border border-slate-200 hover:border-brand-blue/30 rounded-2xl transition-all group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{step.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{step.note}</p>
                    </div>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-brand-blue transition-colors flex-shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Response expectations strip ───────────────────────────────────── */}
      <div className="bg-brand-dark py-6">
        <div className="container-page">
          <div className="flex flex-wrap gap-6 sm:gap-10 justify-center sm:justify-start">
            {[
              { icon: Zap,   label: 'Instant confirmation', sub: 'Email sent on submit' },
              { icon: Clock, label: 'Same-day review',      sub: 'Usually within hours' },
              { icon: CheckCheck, label: 'Direct follow-up', sub: 'By email, on topic' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{label}</p>
                  <p className="text-xs text-white/45 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  )
}
