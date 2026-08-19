import type { Metadata } from "next";
import { EventCountdown } from "@/components/event-countdown";

export const metadata: Metadata = {
  title: "Events — Hosted by Josy",
  description:
    "Hosted by Josy — curated art events, exhibitions and gatherings in Manchester and beyond. Next event: 11 September 2026.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <header className="mb-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Curated events
        </p>
        <h1 className="mt-2 font-display text-5xl italic sm:text-6xl">
          Hosted by Josy
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/60">
          Intimate art events, exhibitions and gatherings. The idea is simple:
          bring people together around art and conversation in spaces that feel
          warm and unhurried.
        </p>
      </header>

      {/* Countdown */}
      <section className="mb-20 border border-border p-10 sm:p-16">
        <EventCountdown
          targetDate="2026-09-11T19:00:00"
          eventName="Different Parts, Vol. II"
        />
        <p className="mt-8 text-center text-sm text-cream/50">
          11 September 2026 &middot; Manchester
        </p>
      </section>

      {/* Two column: About + Signup/Follow */}
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — about the events */}
        <div className="space-y-6 text-lg leading-relaxed text-cream/80">
          <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
            What to expect
          </h2>
          <p>
            Past events have included intimate exhibition openings, live painting
            sessions and collaborative evenings where the line between artist and
            audience fades. Each gathering is designed to feel less like a show
            and more like an invitation.
          </p>
          <p>
            Every event is a chance to experience art up close — to see the
            texture, hear the story behind each piece, and connect with the
            people who make it.
          </p>
        </div>

        {/* Right — signup, follow, collaborate */}
        <div className="space-y-10">
          {/* Mailing list */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Be the first to know
            </h2>
            <p className="text-sm leading-relaxed text-cream/60">
              Get notified when new events are announced. No spam, just
              invitations.
            </p>
            <form
              action="https://instagram.com/hostedbyjosy"
              target="_blank"
              className="flex gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-border bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 border border-cream/80 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-dark"
              >
                Notify me
              </button>
            </form>
          </div>

          {/* Follow */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Follow
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/hostedbyjosy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @hostedbyjosy
              </a>
              <a
                href="https://instagram.com/josy.ote"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @josy.ote
              </a>
            </div>
          </div>

          {/* Collaborate */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Collaborate
            </h2>
            <p className="text-sm leading-relaxed text-cream/60">
              If you have a venue, a concept or just an idea for something that
              could work together, get in touch.
            </p>
            <a
              href="mailto:hello@josyote.com?subject=Events collaboration"
              className="mt-2 inline-block border border-cream/80 px-8 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-cream hover:text-dark"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
