"use client";

import { useEffect, useRef } from "react";

export default function StickyNavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const bodyStyle = getComputedStyle(document.body);
    const naturalTop = el.offsetTop;
    const naturalLeft = -parseFloat(bodyStyle.paddingLeft) + 0.25;

    const sync = () => {
      const scroll = window.scrollY;
      el.style.backgroundPositionX = `${naturalLeft}px`;
      el.style.backgroundPositionY = `${-Math.max(naturalTop, scroll)}px`;
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <div
      ref={ref}
      className="sticky px-px -my-px top-0 z-10 bg-bg bg-stripes border-b border-border"
    >
      <span className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-border" />

      <span className="pointer-events-none absolute left-0 bottom-0 translate-y-1/2 h-[200vh] border-l border-dashed border-border" />
      <span className="pointer-events-none absolute right-0 bottom-0 translate-y-1/2 h-[200vh] border-r border-dashed border-border" />
      {children}
    </div>
  );
}
