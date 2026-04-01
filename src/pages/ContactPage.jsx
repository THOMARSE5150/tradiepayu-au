import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { haptic } from '../utils/haptic'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
]

const TOPICS = ['Rate correction', 'Data error', 'Partnership']
const MAX_MSG = 1000
const FORM_ID = 'xjgpglnz'

function Field({ id, name, label, placeholder, type = 'text', inputMode, autoComplete, autoCapitalize, autoCorrect, spellCheck, enterKeyHint, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
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
        className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-brand-dark text-sm placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all"
      />
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  )
}

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [fieldErrors, setFieldErrors] = useState({})
  const [msgLen, setMsgLen] = useState(0)
  const textareaRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => { if (status === 'success') haptic('success') }, [status])
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
            {TOPICS.map(t => (
              <span key={t} className="inline-block px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs tracking-wide">{t}</span>
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
            <AnimatePresence mode="wait">

              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.2, 0.64, 1] }}
                  className="bg-white rounded-3xl border border-slate-100 p-12 text-center shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.15, duration: 0.4, ease: [0.34, 1.5, 0.64, 1] }}
                    className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle2 size={30} className="text-green-500" />
                  </motion.div>
                  <h2 className="text-lg font-bold text-brand-dark mb-2">Message sent</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">Thanks — we&apos;ll be in touch within 2 business days.</p>
                </motion.div>

              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  action={`https://formspree.io/f/${FORM_ID}`}
                  method="POST"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 space-y-5 shadow-sm"
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

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        ref={textareaRef}
                        required
                        rows={5}
                        maxLength={MAX_MSG}
                        placeholder="What would you like to tell us?"
                        enterKeyHint="send"
                        autoComplete="off"
                        onInput={handleTextareaInput}
                        onFocus={() => haptic('light')}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-brand-dark text-sm placeholder-slate-400 resize-none focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition-all pb-7"
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
                      Something went wrong — please try again.
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
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
