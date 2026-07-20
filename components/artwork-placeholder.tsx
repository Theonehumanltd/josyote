export function ArtworkPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex aspect-[3/4] w-full items-center justify-center bg-dark-warm">
      <span className="px-4 text-center font-display text-sm italic text-cream/20">
        {title}
      </span>
    </div>
  );
}
