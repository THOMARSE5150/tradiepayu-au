import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { haptic } from '../utils/haptic'

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
const FORM_ID = 'xjgpglnz'

const NEXT_STEPS = [
  { label: 'Compare all providers', href: '/providers', note: 'Zeller, Square, Stripe, Tyro, Shift4' },
  { label: 'EFTPOS cost calculator', href: '/calculator', note: 'See real monthly costs at your volume' },
  { label: 'Zeller vs Square', href: '/compare/zeller-vs-square', note: 'The most common tradie question' },
]

function SuccessModal({ onClose }) {
  // Close on Escape
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" />

      {/* Sheet */}
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.34, 1.1, 0.64, 1] }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={15} className="text-slate-500" />
        </button>

        {/* Header */}
        <div className="px-6 pt-8 pb-6 text-center border-b border-slate-100">
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: [0.34, 1.5, 0.64, 1] }}
            className="w-14 h-14 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle2 size={26} className="text-green-500" />
          </motion.div>
          <h2 className="text-xl font-bold text-brand-dark mb-1">Message sent</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We&apos;ll respond within 2 business days. Keep an eye on your inbox — we reply from hello@tradiepayau.directory.
          </p>
        </div>

        {/* Next steps */}
        <div className="px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">While you wait</p>
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

const fieldCls = "w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-brand-dark text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"

function Field({ id, name, label, placeholder, type = 'text', inputMode, autoComplete, autoCapitalize, autoCorrect, spellCheck, enterKeyHint, error }) {
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
        onFocus={() => haptic('light')}
        className={fieldCls}
      />
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  )
}

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [fieldErrors, setFieldErrors] = useState({})
  const [msgLen, setMsgLen] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const textareaRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    if (status === 'success') { haptic('success'); setShowModal(true) }
  }, [status])
  useEffect(() => { if (status === 'error') haptic('error') }, [status])

  async function handleSubmit(e) {
    e.preventDefault()
    haptic('light')
    setStatus('submitting')
    setFieldErrors({})

    const data = Object.fromEntries(new FormData(e.target))

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
        setMsgLen(0)
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
    setMsgLen(e.target.value.length)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 300)}px`
  }

  const submitting = status === 'submitting'

  return (
    <>
      <Meta
        title="Contact TradiePay AU"
        description="Get in touch — rate corrections, data errors, or partnership enquiries."
        canonical="/contact"
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=560&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/93 via-brand-dark/80 to-slate-900/70" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="flex flex-wrap gap-2 mt-3 mb-3">
            {TOPICS.filter(t => t.value).map(t => (
              <span key={t.value} className="inline-block px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs tracking-wide">{t.label}</span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">Get in touch</h1>
          <p className="hero-sub">
            We respond within 2 business days. Or email us directly at{' '}
            <a href="mailto:hello@tradiepayau.directory" className="text-brand-blue hover:underline">hello@tradiepayau.directory</a>.
          </p>
        </div>
      </header>

      <section className="section section-alt">
        <div className="container-page">
          <div className="max-w-lg mx-auto">
            <motion.form
              ref={formRef}
              action={`https://formspree.io/f/${FORM_ID}`}
              method="POST"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 space-y-4 shadow-sm"
            >
              <Field
                id="name" name="name" label="Full name"
                placeholder="Jane Smith"
                autoComplete="name" autoCapitalize="words"
                enterKeyHint="next" error={fieldErrors.name}
              />

              <Field
                id="email" name="email" label="Email address"
                placeholder="jane@example.com.au"
                type="email" inputMode="email"
                autoComplete="email" autoCapitalize="none"
                autoCorrect="off" spellCheck={false}
                enterKeyHint="next" error={fieldErrors.email}
              />

              {/* Topic — native select triggers iOS picker wheel */}
              <div>
                <label htmlFor="topic" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  onFocus={() => haptic('light')}
                  className={`${fieldCls} appearance-none cursor-pointer`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: '40px' }}
                >
                  {TOPICS.map(t => (
                    <option key={t.value} value={t.value} disabled={!t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

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
                    placeholder="What would you like to tell us?"
                    enterKeyHint="send"
                    autoComplete="off"
                    onInput={handleTextareaInput}
                    onFocus={() => haptic('light')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-dark text-sm placeholder-slate-400 resize-none focus:outline-none focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all pb-7"
                  />
                  <span className={`absolute bottom-2.5 right-3.5 text-[11px] select-none transition-colors ${msgLen > MAX_MSG * 0.9 ? 'text-amber-500' : 'text-slate-300'}`}>
                    {msgLen}/{MAX_MSG}
                  </span>
                </div>
                {fieldErrors.message && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.message}</p>}
              </div>

              {status === 'error' && Object.keys(fieldErrors).length === 0 && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                >
                  Something went wrong — please try again or email us directly.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-blue-600 active:bg-blue-700 text-white font-semibold rounded-xl py-3.5 px-6 text-sm transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>Send message <ArrowRight size={15} strokeWidth={2.5} /></>
                )}
              </motion.button>

              <p className="text-[11px] text-slate-400 text-center">We don&apos;t share your details with anyone.</p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Success modal */}
      <AnimatePresence>
        {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  )
}
