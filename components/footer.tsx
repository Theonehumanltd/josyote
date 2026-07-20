import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <p className="font-display text-sm text-cream/50">
          &copy; {new Date().getFullYear()} Josy Ote
        </p>

        <div className="flex gap-6">
          <a
            href="https://instagram.com/josy.ote"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-cream"
          >
            Instagram
          </a>
          <Link
            href="/events"
            className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-cream"
          >
            Hosted by Josy
          </Link>
        </div>
      </div>
    </footer>
  );
}
