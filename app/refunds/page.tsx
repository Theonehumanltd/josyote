import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refunds & Cancellations",
  description:
    "Refund and cancellation policy for event tickets, artwork and prints from THEONEHUMAN LTD.",
};

export default function RefundsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          Refunds &amp; Cancellations
        </h1>
        <p className="mt-4 text-sm text-cream/50">Last updated: 20 August 2026</p>
      </header>

      <div className="space-y-8 text-sm leading-relaxed text-cream/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-cream [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:text-cream/60 [&_table]:w-full [&_table]:text-left [&_th]:border-b [&_th]:border-border [&_th]:pb-2 [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-cream/50 [&_td]:border-b [&_td]:border-border/50 [&_td]:py-3 [&_a]:text-cream [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-cream/70">

        <p>
          We sell two different things, and the law treats them differently. Find the section
          that applies to you. Any questions: <strong>hello@josyote.com</strong>
        </p>

        <h2>Event tickets</h2>

        <h3>The short version</h3>
        <table>
          <thead>
            <tr>
              <th>Situation</th>
              <th>What happens</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>You cancel more than 7 days before the event</td><td>Full refund</td></tr>
            <tr><td>You cancel within 7 days of the event</td><td>No refund — but you can transfer your ticket</td></tr>
            <tr><td>You transfer your ticket to someone else</td><td>Free, up to 24 hours before</td></tr>
            <tr><td>We cancel the event</td><td>Full refund</td></tr>
            <tr><td>We move the event to a new date or venue</td><td>Full refund if you don&rsquo;t want to attend</td></tr>
            <tr><td>We cancel your ticket on safeguarding grounds</td><td>Full refund</td></tr>
            <tr><td>We refuse entry on the night for conduct or ID</td><td>No refund</td></tr>
          </tbody>
        </table>

        <h3>Your right to cancel</h3>
        <p>
          Tickets to a dated leisure event are exempt from the statutory 14-day right to cancel
          under regulation 28(1)(h) of the Consumer Contracts Regulations 2013. We offer the
          refund window above as our own goodwill policy.
        </p>

        <h3>How to request a refund</h3>
        <p>
          Email <strong>hello@josyote.com</strong> with the name and email used at checkout, and
          your order or ticket reference. We will confirm within <strong>5 working days</strong>{" "}
          and process approved refunds within <strong>10 working days</strong>, back to your
          original payment method.
        </p>

        <h3>Transferring your ticket</h3>
        <p>
          This is usually the better option if you can&rsquo;t make it. Up to{" "}
          <strong>24 hours</strong> before the event, email us with the new attendee&rsquo;s full
          name and email address. We will cancel your ticket and issue a new one to them. There
          is no charge.
        </p>
        <p>
          The new attendee must meet the same conditions — including our 18+ policy — and agrees
          to our <Link href="/terms">Terms &amp; Conditions</Link> by attending.
        </p>

        <h3>If we cancel or change the event</h3>
        <p>
          If we cancel the event, you get a full refund automatically. If we change the date or
          venue significantly, we will email you. You can attend on the new terms or request a
          full refund.
        </p>
        <p>We are not responsible for travel, accommodation, childcare or other costs you incur.</p>

        <h3>If we cancel your ticket</h3>
        <p>
          We may cancel a ticket before the event on the safeguarding grounds set out in section
          5.8 of our <Link href="/terms">Terms &amp; Conditions</Link>. If we cancel your ticket
          in advance, you receive a full refund.
        </p>

        <h3>If we refuse entry on the night</h3>
        <p>
          If you are refused entry, or asked to leave, because of your conduct, because you
          cannot provide ID when asked, or because you have breached our terms,{" "}
          <strong>no refund is given</strong>.
        </p>

        <h2>Artwork and prints</h2>

        <h3>Where did you buy it?</h3>
        <table>
          <thead>
            <tr>
              <th>Where you bought it</th>
              <th>Can you cancel?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>In person — at an event, or directly from the artist</td><td>No cancellation right. Sales are final.</td></tr>
            <tr><td>Online — through this website</td><td>14-day cancellation right applies</td></tr>
          </tbody>
        </table>

        <h3>In-person sales</h3>
        <p>
          If you bought a piece at one of our events, the sale is <strong>final</strong>. You
          inspected the work in person before purchasing, so distance selling rules do not apply.
          This does not affect your rights if the item turns out to be faulty or not as described.
        </p>

        <h3>Online sales — your 14-day right to cancel</h3>
        <p>
          If you bought artwork or a print through this website, you have a legal right to cancel
          within <strong>14 days of receiving it</strong>, for any reason.
        </p>
        <p>
          To cancel, email <strong>hello@josyote.com</strong> with your order reference and a
          clear statement that you are cancelling. You then have a further 14 days to send the
          item back.
        </p>

        <h3>Condition</h3>
        <p>
          Items must be returned <strong>unused, unhung, unframed and in their original condition
          and packaging</strong>, with any certificate of authenticity included.
        </p>
        <p>
          If it comes back marked, scuffed, dented, faded, hung, mounted, framed, or with
          packaging destroyed, we will reduce your refund to reflect the loss in value — and for
          an original one-of-a-kind work, that reduction may be substantial or total.
        </p>

        <h3>Return postage</h3>
        <p>
          You pay return postage unless the item arrived faulty, damaged or not as described.
          Original artwork should be returned with tracking and appropriate insurance.
        </p>

        <h3>Your refund</h3>
        <p>
          We refund within <strong>14 days</strong> of receiving the item back, to your original
          payment method. This includes the standard delivery cost you paid — but not any extra
          you paid for a faster option.
        </p>

        <h3>Damaged on arrival</h3>
        <p>
          Tell us within <strong>48 hours</strong> of delivery, with photographs of the item and
          its packaging. We will arrange a replacement or a full refund including postage both
          ways.
        </p>

        <h3>What isn&rsquo;t covered</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Commissioned work.</strong> Made to your specification, so exempt from the 14-day right.</li>
          <li><strong>Slight variation.</strong> Colour, texture and finish vary from screen images. This is the nature of original work, not a fault.</li>
        </ul>

        <h2>Still stuck?</h2>
        <p>
          Email <strong>hello@josyote.com</strong>. We respond within 5 working days.
        </p>
        <p>
          If we can&rsquo;t resolve it, you may be able to take it further with Citizens Advice
          or the relevant alternative dispute resolution scheme.
        </p>

        <div className="mt-12 border-t border-border pt-8 text-xs text-cream/40">
          <p>
            <strong>THEONEHUMAN LTD</strong> &middot; Company number 16680790 &middot; Registered
            in England and Wales
          </p>
          <p>Apartment 88 Quartz Building, 7 Stanley Street, Salford, M3 5EX, England</p>
        </div>
      </div>
    </div>
  );
}
