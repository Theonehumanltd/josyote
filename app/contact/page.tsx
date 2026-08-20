import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Josy Ote — commissions, buying work, prints, events or anything else.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Get in touch
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Contact</h1>
      </header>

      <p className="mb-10 text-lg leading-relaxed text-cream/70">
        Enquiries are usually answered within a few days. If you&rsquo;d rather
        use your own email client, write to{" "}
        <a
          href="mailto:hello@josyote.com"
          className="text-cream/90 underline underline-offset-4 transition-colors hover:text-cream"
        >
          hello@josyote.com
        </a>
        .
      </p>

      <ContactForm showEnquiryType />
    </div>
  );
}
