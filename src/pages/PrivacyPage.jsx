import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Privacy Policy' },
]

const SITE = 'https://tradiepayau.directory'
const LAST_UPDATED = 'April 2026'

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-brand-dark mb-3">{title}</h2>
      <div className="space-y-3 text-sm text-slate-600 leading-relaxed">{children}</div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <Meta
        title="Privacy Policy — TradiePay AU"
        description="Privacy Policy for TradiePay AU. How we collect, use, and protect information."
        canonical="/privacy"
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
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mt-3">Privacy Policy</h1>
          <p className="hero-sub">How TradiePay AU handles your information.</p>
        </div>
      </header>

      <section className="section container-page">
        <div className="max-w-2xl">
          <p className="text-sm text-slate-500 mb-8">Last updated: {LAST_UPDATED}. This policy applies to the TradiePay AU website at <span className="text-brand-blue">{SITE}</span>.</p>

          <Section title="1. Who we are">
            <p>TradiePay AU is an independent comparison website for mobile card payment systems for Australian tradies and small business owners. TradiePay AU is operated by QUICKFIXCREATIVE (ABN 77 133 011 874), an Australian registered business. We are not a financial adviser, broker, or representative of any payment provider.</p>
          </Section>

          <Section title="2. Information we collect">
            <p><strong className="text-brand-dark">Contact form submissions:</strong> If you use our contact form, we collect your name, email address, and message content. This information is used solely to respond to your enquiry and is not shared with third parties.</p>
            <p><strong className="text-brand-dark">Analytics:</strong> We may collect anonymous usage data (pages visited, time on site, browser type, device type) to understand how the site is used and improve it. This data does not identify individual users.</p>
            <p><strong className="text-brand-dark">Cookies:</strong> We may use cookies for analytics purposes. You can disable cookies in your browser settings without affecting your ability to use the site.</p>
            <p><strong className="text-brand-dark">We do not collect:</strong> payment information, health information, or any sensitive personal information as defined under the Privacy Act 1988 (Cth).</p>
          </Section>

          <Section title="3. How we use your information">
            <p>Information collected is used to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to contact form enquiries</li>
              <li>Understand site usage and improve content</li>
              <li>Maintain the security and operation of the site</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Affiliate links and referrals">
            <p>TradiePay AU may include affiliate or referral links to payment providers. If you click a link and sign up to a provider, we may receive a commission. This does not affect your price or terms with the provider.</p>
            <p>Where affiliate links are present, this will be disclosed on the relevant page. Our rankings and recommendations are not influenced by affiliate arrangements — see our <a href="/about" className="text-brand-blue hover:underline">About page</a> for our methodology.</p>
          </Section>

          <Section title="5. Third-party services">
            <p>This site may use the following third-party services, each subject to their own privacy policies:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Formspree (contact form processing)</li>
              <li>Analytics providers (anonymous site usage data)</li>
            </ul>
          </Section>

          <Section title="6. Data retention">
            <p>Contact form submissions are retained only as long as necessary to respond to your enquiry. Anonymous analytics data may be retained for up to 2 years to identify long-term usage trends.</p>
          </Section>

          <Section title="7. Your rights">
            <p>Under the Privacy Act 1988 (Cth), you have the right to access personal information we hold about you and to request correction of inaccurate information. To make a request, contact us via the <a href="/contact" className="text-brand-blue hover:underline">contact page</a>.</p>
          </Section>

          <Section title="8. Security">
            <p>We take reasonable steps to protect information from misuse, loss, and unauthorised access. The site is served over HTTPS. Contact form data is transmitted to Formspree using encrypted connections.</p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>We may update this policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of the site after any changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact">
            <p>For privacy-related questions or to exercise your rights under the Privacy Act 1988, please use our <a href="/contact" className="text-brand-blue hover:underline">contact page</a>.</p>
          </Section>
        </div>
      </section>
    </>
  )
}
