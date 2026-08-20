import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Josy Ote (Josiah Otto Ephraim) is a Manchester-based mixed media artist working with acrylic, oil pastel, ink and modelling paste.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <header className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          The artist
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">
          Josy Ote
        </h1>
      </header>

      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        {/* Portrait */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/images/Portrait.jpg"
            alt="Josy Ote portrait"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-8">
          <div className="space-y-6 text-lg leading-relaxed text-cream/80">
            <p>
              Josiah Otto Ephraim &mdash; Josy Ote &mdash; is a mixed media
              artist based in Manchester, UK. His work moves across acrylic, oil
              pastel, ink and modelling paste, building layered surfaces that
              hold weight and quiet at the same time.
            </p>
            <p>
              The paintings explore faith, inner peace and the shared human
              experience. Not grand statements &mdash; more like honest
              questions put down in colour and texture. What does it mean to
              stay? To fall and trust the landing? To move as one body?
            </p>
            <p>
              Each piece starts as a feeling, then becomes a conversation
              between materials. Thick paste builds up, ink bleeds through,
              pastel softens the edges. The process matters as much as the
              result.
            </p>
          </div>

          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Practice
            </h2>
            <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm">
              <dt className="uppercase tracking-[0.15em] text-cream/40">
                Media
              </dt>
              <dd className="text-cream/80">
                Acrylic, oil pastel, ink, modelling paste on canvas
              </dd>

              <dt className="uppercase tracking-[0.15em] text-cream/40">
                Based
              </dt>
              <dd className="text-cream/80">Manchester, UK</dd>

              <dt className="uppercase tracking-[0.15em] text-cream/40">
                Themes
              </dt>
              <dd className="text-cream/80">
                Faith, inner peace, shared human experience
              </dd>
            </dl>
          </div>

          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-cream/50">
              Connect
            </h2>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/josy.ote"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                @josy.ote
              </a>
              <a
                href="mailto:hello@josyote.com"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                hello@josyote.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
