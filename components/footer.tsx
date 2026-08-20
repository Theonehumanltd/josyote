import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
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

        {/* Legal links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 border-t border-border/50 pt-6 sm:justify-start">
          <Link
            href="/terms"
            className="text-[11px] uppercase tracking-[0.15em] text-cream/30 transition-colors hover:text-cream/60"
          >
            Terms &amp; Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-[11px] uppercase tracking-[0.15em] text-cream/30 transition-colors hover:text-cream/60"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refunds"
            className="text-[11px] uppercase tracking-[0.15em] text-cream/30 transition-colors hover:text-cream/60"
          >
            Refunds &amp; Cancellations
          </Link>
        </div>

        <p className="mt-4 text-center text-[10px] text-cream/20 sm:text-left">
          THEONEHUMAN LTD &middot; Company No. 16680790 &middot; Registered in England and Wales
        </p>
      </div>
    </footer>
  );
}
