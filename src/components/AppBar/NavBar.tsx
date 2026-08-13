"use client";

import { useEffect, useRef } from "react";
import { sections } from "@/lib/content";
import AppBar from "./AppBar";

export default function NavBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const syncBackground = () => {
      const bodyStyle = getComputedStyle(document.body);
      const rect = element.getBoundingClientRect();
      const naturalTop = window.scrollY + rect.top;
      const backgroundY =
        window.scrollY >= naturalTop ? -window.scrollY : -naturalTop;

      element.style.backgroundPosition = `${-parseFloat(bodyStyle.paddingLeft) + 0.25}px ${backgroundY}px`;
    };

    syncBackground();
    window.addEventListener("scroll", syncBackground, { passive: true });
    window.addEventListener("resize", syncBackground, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncBackground);
      window.removeEventListener("resize", syncBackground);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="sticky px-px -my-px top-0 z-10 bg-bg bg-stripes border-b border-border"
    >
      <span className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-border" />
      <span className="pointer-events-none absolute left-0 bottom-0 translate-y-1/2 h-[200vh] border-l border-dashed border-border" />
      <span className="pointer-events-none absolute right-0 bottom-0 translate-y-1/2 h-[200vh] border-r border-dashed border-border" />
      <AppBar>
        <AppBar.Logo href="/#">MMDEV_STUDIO</AppBar.Logo>
        <AppBar.Item href={`/#${sections.identity}`}>identity</AppBar.Item>
        <AppBar.Item href={`/#${sections.products}`}>products</AppBar.Item>
        <AppBar.Item href={`/#${sections.showcase}`}>showcase</AppBar.Item>
        <AppBar.Item
          href={`/#${sections.contact}`}
          className="font-bold text-primary px-3"
        >
          build now
        </AppBar.Item>
      </AppBar>
    </div>
  );
}
