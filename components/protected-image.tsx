"use client";

import Image from "next/image";

interface ProtectedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export function ProtectedImage({
  src,
  alt,
  fill,
  priority,
  sizes,
  className,
}: ProtectedImageProps) {
  return (
    <div
      className="absolute inset-0 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ WebkitUserSelect: "none", userSelect: "none" }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`${className ?? ""} pointer-events-none`}
        draggable={false}
      />
      {/* Transparent overlay blocks drag/save/right-click */}
      <div className="absolute inset-0 z-10" />
    </div>
  );
}
