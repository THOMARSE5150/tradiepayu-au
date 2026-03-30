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

function Field({ id, name, label, type = 'text', inputMode, autoComplete, autoCapitalize, autoCorrect, spellCheck, enterKeyHint, error }) {
  return (
    <div className="relative">
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
        required
        placeholder=" "
        onFocus={() => haptic('light')}
        className="
          peer w-full min-h-[58px]
          bg-white/[0.05] border border-white/[0.10]
          rounded-2xl px-4 pt-6 pb-3
          text-white text-base
          placeholder-transparent
          focus:outline-none focus:border-brand-blue focus:bg-white/[0.08]
          focus:ring-2 focus:ring-brand-blue/20
          transition-all duration-200
        "
      />
      <label
        htmlFor={id}
        className="
          absolute left-4 pointer-events-none
          text-white/40 transition-all duration-200
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm
          peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-brand-blue peer-focus:font-medium
          top-3 translate-y-0 text-[11px] text-white/50 font-medium
        "
      >
        {label}
      </label>
      {error && <p className="text-xs text-red-400 mt-1.5 ml-1">{error}</p>}
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
        // Formspree returns field-level errors under json.errors
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

      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=700&fit=crop&crop=center&q=80"
            alt=""
            fetchPriority="high" className="w-full h-full object-cover"
            onError={e => { e.currentTarget.style.opacity = '0' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/97 via-brand-dark/95 to-brand-dark/98" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-page pt-8 pb-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="flex flex-wrap gap-2 mt-4">
            {TOPICS.map(t => (
              <span key={t} className="inline-block px-3 py-1 bg-white/[0.07] text-white/50 rounded-full text-xs tracking-wide">{t}</span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-1">Get in touch</h1>
          <p className="text-white/50 text-sm">We respond within 2 business days. Or email us directly at{' '}
            <a href="mailto:hello@tradiepayau.directory" className="text-brand-blue hover:underline">hello@tradiepayau.directory</a>.
          </p>
        </div>

        <div className="relative z-10 container-page">
          <div className="w-full max-w-sm mx-auto sm:max-w-md">
            <AnimatePresence mode="wait">

              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.93, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.34, 1.2, 0.64, 1] }}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-12 text-center"
                  style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.18, duration: 0.45, ease: [0.34, 1.5, 0.64, 1] }}
                    className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle2 size={30} className="text-green-400" />
                  </motion.div>
                  <h2 className="text-lg font-bold text-white mb-2">Message sent</h2>
                  <p className="text-white/40 text-sm leading-relaxed">Thanks — we'll be in touch within 2 business days.</p>
                </motion.div>

              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-4"
                  style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
                  noValidate
                >
                  <Field
                    id="name" name="name" label="Full name"
                    autoComplete="name" autoCapitalize="words"
                    enterKeyHint="next" error={fieldErrors.name}
                  />

                  <Field
                    id="email" name="email" label="Email address"
                    type="email" inputMode="email"
                    autoComplete="email" autoCapitalize="none"
                    autoCorrect="off" spellCheck={false}
                    enterKeyHint="next" error={fieldErrors.email}
                  />

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      ref={textareaRef}
                      required
                      rows={4}
                      maxLength={MAX_MSG}
                      enterKeyHint="send"
                      placeholder=" "
                      onInput={handleTextareaInput}
                      onFocus={() => haptic('light')}
                      className="
                        peer w-full min-h-[120px]
                        bg-white/[0.05] border border-white/[0.10]
                        rounded-2xl px-4 pt-6 pb-8
                        text-white text-base
                        placeholder-transparent resize-none
                        focus:outline-none focus:border-brand-blue focus:bg-white/[0.08]
                        focus:ring-2 focus:ring-brand-blue/20
                        transition-all duration-200
                      "
                    />
                    <label
                      htmlFor="message"
                      className="
                        absolute left-4 pointer-events-none
                        text-white/40 transition-all duration-200
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                        peer-focus:top-3 peer-focus:text-[11px] peer-focus:text-brand-blue peer-focus:font-medium
                        top-3 text-[11px] text-white/50 font-medium
                      "
                    >
                      Message
                    </label>
                    <span className={`absolute bottom-3 right-4 text-[11px] select-none transition-colors ${msgLen > MAX_MSG * 0.9 ? 'text-amber-400' : 'text-white/20'}`}>
                      {msgLen}/{MAX_MSG}
                    </span>
                    {fieldErrors.message && <p className="text-xs text-red-400 mt-1.5 ml-1">{fieldErrors.message}</p>}
                  </div>

                  {status === 'error' && Object.keys(fieldErrors).length === 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      Something went wrong — please try again.
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileTap={{ scale: 0.97 }}
                    className="
                      w-full flex items-center justify-center gap-2.5
                      bg-brand-blue hover:bg-blue-600 active:bg-blue-700
                      text-white font-semibold rounded-2xl
                      py-4 px-6 text-sm
                      transition-colors duration-150
                      disabled:opacity-50 disabled:cursor-not-allowed
                      mt-1
                    "
                    style={{ boxShadow: '0 8px 24px rgba(0,106,255,0.35)' }}
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

                  <p className="text-[11px] text-white/20 text-center pt-1">We don't share your details with anyone.</p>
                </motion.form>
              )}

            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
