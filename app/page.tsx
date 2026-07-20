import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="flex max-w-2xl flex-col items-center gap-8 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cream/50">
          Mixed Media Artist
        </p>

        <h1 className="font-display text-5xl leading-tight tracking-wide sm:text-7xl">
          Josy Ote
        </h1>

        <p className="max-w-md text-lg leading-relaxed text-cream/70">
          Acrylic, oil pastel, ink and modelling paste. Exploring faith, inner
          peace and the things we share.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/gallery"
            className="border border-cream/80 px-8 py-3 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-dark"
          >
            Enter Gallery
          </Link>
          <Link
            href="/works"
            className="border border-border px-8 py-3 text-xs uppercase tracking-[0.2em] text-cream/60 transition-colors hover:border-cream/40 hover:text-cream"
          >
            View Works
          </Link>
        </div>
      </div>
    </div>
  );
}
