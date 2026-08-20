import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for THEONEHUMAN LTD — how we collect, use and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-cream/50">Last updated: 20 August 2026</p>
      </header>

      <div className="space-y-8 text-sm leading-relaxed text-cream/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-cream [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:text-cream/60 [&_table]:w-full [&_table]:text-left [&_th]:border-b [&_th]:border-border [&_th]:pb-2 [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-cream/50 [&_td]:border-b [&_td]:border-border/50 [&_td]:py-3">

        <h2>Who we are</h2>
        <p>
          <strong>THEONEHUMAN LTD</strong> is the data controller for the personal data
          described here.
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li>Company number: 16680790</li>
          <li>Registered office: Apartment 88 Quartz Building, 7 Stanley Street, Salford, M3 5EX, England</li>
          <li>Contact: hello@josyote.com</li>
        </ul>

        <h2>What we collect</h2>

        <h3>If you buy a ticket</h3>
        <p>Name, email address, phone number, how you heard about the event (if you tell us), and payment confirmation details.</p>
        <p>We do <strong>not</strong> receive or store your card number. Payments are handled by Stripe.</p>

        <h3>If you buy artwork or a print</h3>
        <p>Name, email address, delivery address, and phone number where needed for delivery.</p>

        <h3>If you join our mailing list</h3>
        <p>Email address, and your name if you give it.</p>

        <h3>If you email us</h3>
        <p>Your email address and whatever you choose to tell us.</p>

        <h3>When you visit the site</h3>
        <p>
          Basic technical data — pages viewed, approximate location, device and browser type.
          This is aggregated and does not identify you individually.
        </p>

        <h2>Why we use it, and our lawful basis</h2>
        <table>
          <thead>
            <tr>
              <th>What we do</th>
              <th>Lawful basis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Issue your ticket and admit you to the event</td><td>Performance of a contract</td></tr>
            <tr><td>Take payment and prevent fraud</td><td>Contract, and legitimate interests</td></tr>
            <tr><td>Fulfil and deliver an artwork order</td><td>Performance of a contract</td></tr>
            <tr><td>Email you about an event you booked</td><td>Performance of a contract</td></tr>
            <tr><td>Send you our mailing list</td><td>Consent</td></tr>
            <tr><td>Keep accounting and tax records</td><td>Legal obligation</td></tr>
            <tr><td>Protect the safety of guests, staff and artwork</td><td>Legitimate interests</td></tr>
            <tr><td>Understand how the site is used</td><td>Legitimate interests</td></tr>
          </tbody>
        </table>

        <h2>Who we share it with</h2>
        <p>We use these providers to run the business. Each processes data on our behalf.</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Stripe</strong> — payment processing. Stripe is a separate data controller for payment data.</li>
          <li><strong>Resend</strong> — email delivery and mailing list.</li>
          <li><strong>Vercel</strong> — website hosting.</li>
          <li><strong>Zoho</strong> — our business email.</li>
          <li>Delivery partners and print providers, where needed to fulfil an artwork order.</li>
        </ul>
        <p>We do <strong>not</strong> sell your data, and we do not share it for anyone else&rsquo;s marketing.</p>

        <h2>International transfers</h2>
        <p>
          Some providers process data outside the UK. Where they do, transfers are protected by
          appropriate safeguards such as UK International Data Transfer Agreements or adequacy
          decisions.
        </p>

        <h2>How long we keep it</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Ticket and order records</strong> — 6 years, as required for accounting and tax</li>
          <li><strong>Mailing list</strong> — until you unsubscribe</li>
          <li><strong>Enquiry emails</strong> — 2 years</li>
          <li><strong>Safety or safeguarding records</strong> — as long as necessary for that purpose</li>
        </ul>

        <h2>Your rights</h2>
        <p>Under UK GDPR you have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>ask for a copy of the data we hold about you</li>
          <li>have inaccurate data corrected</li>
          <li>ask us to delete data, where we have no continuing lawful reason to keep it</li>
          <li>object to or restrict how we use it</li>
          <li>receive your data in a portable format</li>
          <li>withdraw consent at any time, where consent is the basis</li>
        </ul>
        <p>To exercise any of these, email <strong>hello@josyote.com</strong>. We respond within one month.</p>

        <h2>Marketing</h2>
        <p>
          We only send marketing emails to people who asked for them. Every email has an
          unsubscribe link. Unsubscribing from marketing does not stop emails about a ticket or
          order you have already placed.
        </p>

        <h2>Cookies</h2>
        <p>
          We use only what is necessary to make the site work and to understand basic usage. We
          do not use advertising or cross-site tracking cookies.
        </p>

        <h2>Children</h2>
        <p>
          Our events are 18+ and this site is not aimed at children. We do not knowingly collect
          data from anyone under 18.
        </p>

        <h2>Security</h2>
        <p>
          We use HTTPS across the site, restrict access to personal data to those who need it,
          and keep credentials out of our published code. No system is perfectly secure, but we
          take reasonable steps to protect your data and will tell you and the ICO if a breach
          occurs that requires it.
        </p>

        <h2>Complaints</h2>
        <p>
          Tell us first — <strong>hello@josyote.com</strong> — and we will try to put it right.
        </p>
        <p>
          You also have the right to complain to the <strong>Information Commissioner&rsquo;s
          Office</strong>: ico.org.uk, or 0303 123 1113.
        </p>

        <h2>Changes</h2>
        <p>We may update this policy. The date at the top shows when it last changed.</p>
      </div>
    </div>
  );
}
