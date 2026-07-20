import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Hosted by Josy — curated art events, exhibitions and gatherings in Manchester and beyond.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Curated events
        </p>
        <h1 className="mt-2 font-display text-4xl italic sm:text-5xl">
          Hosted by Josy
        </h1>
      </header>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6 text-lg leading-relaxed text-cream/80">
          <p>
            Hosted by Josy is a series of curated art events, exhibitions and
            gatherings. The idea is simple: bring people together around art and
            conversation in spaces that feel warm and unhurried.
          </p>
          <p>
            Past events have included intimate exhibition openings, live
            painting sessions and collaborative evenings where the line between
            artist and audience fades. Each gathering is designed to feel less
            like a show and more like an invitation.
          </p>
          <p>
            If you want to stay in the loop for upcoming events, follow
            along on Instagram.
          </p>
        </div>

        <div className="space-y-8">
          {/* Upcoming */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Upcoming
            </h2>
            <p className="text-sm text-cream/40">
              Nothing announced yet. Follow for updates.
            </p>
          </div>

          {/* Connect */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Follow
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/hostedbyjosy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                @hostedbyjosy
              </a>
              <a
                href="https://instagram.com/josy.ote"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
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
              If you have a venue, a concept or just an idea for something
              that could work together, get in touch.
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
