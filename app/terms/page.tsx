import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for THEONEHUMAN LTD, trading as Hosted by Josy and Josy Ote.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-cream/50">Last updated: 20 August 2026</p>
      </header>

      <div className="prose-legal space-y-8 text-sm leading-relaxed text-cream/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-cream [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:text-cream/60 [&_table]:w-full [&_table]:text-left [&_th]:border-b [&_th]:border-border [&_th]:pb-2 [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wider [&_th]:text-cream/50 [&_td]:border-b [&_td]:border-border/50 [&_td]:py-3 [&_a]:text-cream [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-cream/70">

        <h2>1. Who we are</h2>
        <p>
          This website is operated by <strong>THEONEHUMAN LTD</strong>, a company
          registered in England and Wales.
        </p>
        <ul className="list-none space-y-1 pl-0">
          <li>Company number: 16680790</li>
          <li>Registered office: Apartment 88 Quartz Building, 7 Stanley Street, Salford, M3 5EX, England</li>
          <li>Trading as: Hosted by Josy (events) and Josy Ote (artwork)</li>
          <li>Contact: hello@josyote.com</li>
        </ul>
        <p>
          References to &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean THEONEHUMAN LTD.
          References to &ldquo;you&rdquo; mean the person using this site or buying from us.
        </p>

        <h2>2. What we sell</h2>
        <p>We sell two things:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Event tickets</strong> — admission to in-person art and creative events held in Manchester, UK.</li>
          <li><strong>Artwork and prints</strong> — original artwork and limited or open edition prints by the artist.</li>
        </ul>
        <p>Different terms apply to each. Where a section applies to only one, we say so.</p>

        <h2>3. Prices and payment</h2>
        <p>
          All prices are shown in <strong>pounds sterling (GBP)</strong> and include VAT where
          applicable.
        </p>
        <p>
          Payments are processed by <strong>Stripe</strong>. We do not receive or store your full
          card details. By completing a purchase you agree to Stripe&rsquo;s terms as well as ours.
        </p>
        <p>
          If a price is displayed incorrectly due to an obvious error, we may cancel the order
          and refund you in full rather than fulfil it at the wrong price. We will tell you
          before doing so.
        </p>

        <h2>4. Placing an order</h2>
        <p>
          Your order is an offer to buy. A contract is formed when we send you a confirmation
          email — for tickets, this is the email containing your ticket.
        </p>
        <p>If we cannot fulfil an order, we will tell you and refund you in full.</p>

        <h2>5. Event tickets</h2>

        <h3>5.1 Capacity and availability</h3>
        <p>
          Our events are deliberately small. Tickets are limited and sold on a first-come basis.
          Once capacity is reached, no further tickets will be issued.
        </p>

        <h3>5.2 Your ticket</h3>
        <p>
          Each ticket admits <strong>one person</strong>. Your ticket is issued to the name given
          at checkout and is valid only for the event, date and time shown on it.
        </p>
        <p>Please bring your ticket — printed or on your phone — to the door.</p>

        <h3>5.3 Age policy</h3>
        <p>
          Our events are <strong>18+</strong>. Photo ID may be requested on the door. If you
          cannot provide ID when asked, entry may be refused and no refund will be given.
        </p>

        <h3>5.4 Resale</h3>
        <p>
          Tickets must not be resold above face value, or sold through any third-party resale
          platform. Tickets sold in breach of this are void.
        </p>
        <p>You may transfer your ticket to another person free of charge — see section 6.2.</p>

        <h3>5.5 What is included</h3>
        <p>
          The ticket price includes admission and the activities described on the event page.
          Anything described as optional or &ldquo;available on the night&rdquo; is not included.
        </p>

        <h3>5.6 Changes to the event</h3>
        <p>
          We may need to change the venue, timing, running order or featured work. Where a
          change is significant, we will contact you at the email address given at checkout, and
          you may request a full refund.
        </p>

        <h3>5.7 Your conduct at the event</h3>
        <p>
          You agree to behave respectfully toward our team, our guests, the artists, the venue
          and the artwork on display. You must not:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>touch, move or interfere with artwork unless invited to do so</li>
          <li>behave in a way that is abusive, threatening, harassing or discriminatory</li>
          <li>attend while intoxicated to a degree that puts you or others at risk</li>
          <li>bring prohibited items, or breach the venue&rsquo;s own conditions of entry</li>
          <li>record or photograph other guests without their consent</li>
        </ul>
        <p>We may ask you to leave if you breach this section. See section 5.8.</p>

        <h3>5.8 Refusing or cancelling admission</h3>
        <p>
          We take the safety of our guests, our team and the artwork seriously. We may{" "}
          <strong>cancel a ticket before the event</strong>, or{" "}
          <strong>refuse or withdraw admission on the night</strong>, where we reasonably believe that:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>the payment was fraudulent, disputed, or made with a card reported lost or stolen</li>
          <li>the details given at checkout are false, or deliberately conceal the buyer&rsquo;s identity</li>
          <li>the ticket was obtained or transferred in breach of section 5.4</li>
          <li>the person has behaved abusively, threateningly or dishonestly toward our team, our guests or an artist</li>
          <li>there is a credible risk to the safety of people at the event, or to the artwork</li>
          <li>the person is subject to a legal order that would make their attendance unlawful</li>
          <li>the person breaches section 5.3 or 5.7</li>
        </ul>
        <p>
          If we <strong>cancel your ticket before the event</strong>, you receive a{" "}
          <strong>full refund</strong>. If we <strong>refuse or withdraw admission on the night</strong>{" "}
          because of your conduct, ID, or a breach of these terms,{" "}
          <strong>no refund is given</strong>.
        </p>
        <p>
          We will apply this section reasonably, consistently, and only on the grounds listed
          above. If we cancel your ticket we will tell you, and you may ask us to review the
          decision by emailing hello@josyote.com.
        </p>

        <h3>5.9 If we cancel the event</h3>
        <p>
          If we cancel an event entirely, you will receive a <strong>full refund of the ticket
          price</strong>. We are not responsible for travel, accommodation or other costs you incur.
        </p>

        <h2>6. Refunds and cancellations</h2>
        <p>
          Full detail is in our{" "}
          <Link href="/refunds">Refunds &amp; Cancellations policy</Link>. In summary:
        </p>

        <h3>6.1 Tickets</h3>
        <p>
          Because tickets are for a dated leisure event, the statutory 14-day right to cancel
          does not apply. We offer this as a goodwill policy:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Full refund</strong> if you cancel more than <strong>7 days</strong> before the event.</li>
          <li><strong>No refund</strong> within 7 days — but you may transfer your ticket instead.</li>
        </ul>

        <h3>6.2 Transferring a ticket</h3>
        <p>
          You may transfer your ticket to someone else free of charge up to <strong>24
          hours</strong> before the event. Email hello@josyote.com with the new attendee&rsquo;s
          name and email and we will reissue the ticket.
        </p>

        <h3>6.3 Artwork and prints</h3>
        <p>
          <strong>Bought in person:</strong> sales are final. You inspected the work before buying.
        </p>
        <p>
          <strong>Bought online:</strong> you have a statutory right to cancel within{" "}
          <strong>14 days</strong> of receiving it. Returns must be unused, unhung and in original
          condition.
        </p>
        <p>
          See the <Link href="/refunds">Refunds &amp; Cancellations policy</Link> for full
          detail and exclusions.
        </p>

        <h2>7. Artwork, prints and delivery</h2>
        <p>
          Original works are one of a kind. Colour, texture and finish may differ slightly from
          photographs due to screen differences and the nature of the materials used.
        </p>
        <p>
          Delivery timescales are stated at checkout. Risk passes to you on delivery. If an item
          arrives damaged, tell us within <strong>48 hours</strong> with photographs and we will
          arrange a replacement or refund.
        </p>
        <p>
          Commissioned work is made to your specification and is excluded from the 14-day
          cancellation right. Separate terms will be agreed in writing.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          All artwork, images, text, design and code on this site are owned by THEONEHUMAN LTD
          or the artist and are protected by copyright.
        </p>
        <p>
          <strong>Buying an original work or print transfers ownership of the physical item
          only.</strong> Copyright stays with the artist. You may not reproduce, copy, print, sell
          or use the work commercially without written permission.
        </p>

        <h2>9. Photography at events</h2>
        <p>
          We usually photograph and film our events for promotional use. By attending, you agree
          that we may use images or footage in which you appear.
        </p>
        <p>
          If you would rather not appear, tell a member of our team on arrival and we will do
          our best to accommodate you.
        </p>

        <h2>10. Your data</h2>
        <p>
          We handle your personal data as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>11. Our liability</h2>
        <p>
          Nothing in these terms limits our liability for death or personal injury caused by our
          negligence, for fraud, or for anything else that cannot lawfully be limited.
        </p>
        <p>
          Subject to that, our total liability to you in connection with any order is limited to
          the amount you paid for it. We are not liable for losses that were not foreseeable, or
          for losses arising from your own breach of these terms or events outside our reasonable
          control.
        </p>

        <h2>12. Complaints</h2>
        <p>
          If something has gone wrong, email <strong>hello@josyote.com</strong> and we will
          respond within <strong>5 working days</strong>.
        </p>

        <h2>13. Changes to these terms</h2>
        <p>
          We may update these terms. The version that applies to your order is the one published
          when you placed it.
        </p>

        <h2>14. Governing law</h2>
        <p>
          These terms are governed by the law of England and Wales, and the courts of England
          and Wales have jurisdiction. If you live in Scotland or Northern Ireland you may also
          bring proceedings there.
        </p>
      </div>
    </div>
  );
}
