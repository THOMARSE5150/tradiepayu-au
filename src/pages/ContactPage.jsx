import { useState } from 'react'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact' },
]

// Sign up at formspree.io and replace YOUR_FORM_ID with your form endpoint ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Meta
        title="Contact TradiePay AU"
        description="Get in touch with TradiePay AU — corrections to provider data, methodology questions, or partnership enquiries."
        canonical="/contact"
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Contact</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Get in touch</h1>
          <p className="hero-sub">Rate correction? Data error? Partnership enquiry? Use the form below — we aim to respond within 2 business days.</p>
        </div>
      </header>

      <section className="section container-page">
        <div className="max-w-lg">
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg-light rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-xl font-bold text-brand-dark mb-2">Message sent</h2>
              <p className="text-slate-600 text-sm">Thanks — we'll be in touch within 2 business days.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="lg-light rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-1.5">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What's your question or feedback?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary py-3 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <p className="text-xs text-slate-400 text-center">We don't share your details with anyone.</p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  )
}
