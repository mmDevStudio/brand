"use client";

import { useLayoutEffect, useRef } from "react";
import { sections } from "@/lib/content";
import AppBar from "./AppBar";

export default function NavBar() {
  const navBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const navBar = navBarRef.current;
    if (!navBar) return;

    let animationFrame: number | null = null;

    const updateBackground = () => {
      animationFrame = null;
      const { left, top } = navBar.getBoundingClientRect();

      navBar.style.backgroundPosition = `${-(left + window.scrollX)}px ${-(top + window.scrollY)}px`;
    };

    const requestUpdate = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updateBackground);
    };

    updateBackground();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <AppBar asChild>
      <nav
        ref={navBarRef}
        className="sticky isolate -my-px top-0 z-10 border-b border-border bg-bg bg-stripes"
      >
        <span className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-border" />
        <span className="pointer-events-none absolute left-0 bottom-0 translate-y-1/2 h-[200vh] border-l border-dashed border-border" />
        <span className="pointer-events-none absolute right-0 bottom-0 translate-y-1/2 h-[200vh] border-r border-dashed border-border" />

        <AppBar.Logo className="mr-auto" href="/#">
          MMDEV_STUDIO
        </AppBar.Logo>

        <AppBar.Item href={`/#${sections.identity}`}>identity</AppBar.Item>
        <AppBar.Item href={`/#${sections.products}`}>products</AppBar.Item>
        <AppBar.Item href={`/#${sections.showcase}`}>showcase</AppBar.Item>

        <AppBar.Item
          href={`/#${sections.contact}`}
          className="font-bold text-primary"
        >
          build now
        </AppBar.Item>
      </nav>
    </AppBar>
  );
}
