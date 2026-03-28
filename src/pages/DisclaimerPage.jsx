import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Disclaimer' },
]

const LAST_UPDATED = 'March 2026'

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-brand-dark mb-3">{title}</h2>
      <div className="space-y-3 text-sm text-slate-600 leading-relaxed">{children}</div>
    </div>
  )
}

export default function DisclaimerPage() {
  return (
    <>
      <Meta
        title="Disclaimer — TradiePay AU"
        description="Important disclaimer for TradiePay AU. General information only — not financial advice. Affiliate disclosure."
        canonical="/disclaimer"
      />

      <header className="hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-slate-900" />
        </div>
        <div className="container-page relative z-10">
          <Breadcrumb crumbs={crumbs} />
          <div className="hero-meta">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-white/70 rounded text-xs font-semibold">Legal</span>
            <span>·</span>
            <span>Updated {LAST_UPDATED}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Disclaimer</h1>
          <p className="hero-sub">Important information about the content on TradiePay AU.</p>
        </div>
      </header>

      <section className="section container-page">
        <div className="max-w-2xl">
          <div className="infobox px-5 py-4 rounded-2xl mb-8 text-sm text-brand-blue font-medium leading-relaxed">
            <strong>Summary:</strong> TradiePay AU provides general information only. Nothing on this site is financial advice. Always verify rates with providers before signing up.
          </div>

          <Section title="General information only">
            <p>The content published on TradiePay AU is provided for general informational purposes only. It is not intended to constitute financial advice, legal advice, or any other professional advice.</p>
            <p>TradiePay AU does not hold an Australian Financial Services Licence (AFSL) and is not authorised to provide financial product advice. The information on this site should not be relied upon as the basis for any financial decision.</p>
            <p>Before choosing a payment provider, you should assess your own circumstances and, if appropriate, seek independent financial advice.</p>
          </Section>

          <Section title="Accuracy of information">
            <p>We make reasonable efforts to ensure the accuracy of information published on this site, including provider fees, hardware pricing, and product features. However:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provider fees and product features change without notice</li>
              <li>Published rates may differ from rates available to your specific business</li>
              <li>Some providers require a direct quote for their in-person rates</li>
            </ul>
            <p>All rates and fees should be verified directly with the relevant provider before you sign up or make any financial commitment. The "Updated" date on each page reflects when we last verified the information — not a guarantee of current accuracy.</p>
          </Section>

          <Section title="Referral link disclosure">
            <p>Some links on this site may be referral links. If you sign up to a provider through one, we may receive a small commission from that provider. Any amount received goes entirely toward the cost of running this site — hosting, research, and keeping provider data up to date. Where this is the case:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>The commission is paid by the provider, not by you</li>
              <li>Your pricing and terms with the provider are not affected</li>
              <li>Referral links are disclosed on the relevant page</li>
            </ul>
            <p>Our rankings and editorial content are produced independently of any referral arrangements. Providers cannot pay to improve their ranking or editorial treatment. See our <a href="/about" className="text-brand-blue hover:underline">methodology</a> for details.</p>
          </Section>

          <Section title="Third-party links">
            <p>This site contains links to external provider websites. TradiePay AU has no control over the content of those sites and is not responsible for their accuracy, availability, or content. Linking to an external site does not constitute endorsement of that site beyond what is stated in our reviews.</p>
          </Section>

          <Section title="Surcharging and legal compliance">
            <p>Information about surcharging, card payment regulations, and Australian Consumer Law is provided for general reference only. Payment regulations in Australia are subject to change. Consult the ACCC, ASIC, or a qualified adviser for current regulatory guidance specific to your business.</p>
          </Section>

          <Section title="Limitation of liability">
            <p>To the extent permitted by law, TradiePay AU excludes all liability for any loss or damage (including direct, indirect, incidental, or consequential loss) arising from your use of, or reliance on, information published on this site or any linked external site.</p>
          </Section>

          <Section title="Changes to this disclaimer">
            <p>This disclaimer may be updated from time to time. The "Last updated" date at the top of this page reflects the most recent revision.</p>
          </Section>

          <Section title="Questions">
            <p>For questions about this disclaimer or the information on this site, use our <a href="/contact" className="text-brand-blue hover:underline">contact page</a>.</p>
          </Section>
        </div>
      </section>
    </>
  )
}
