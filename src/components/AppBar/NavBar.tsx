"use client";

import React from "react";
import { sections } from "@/lib/content";
import AppBar from "./AppBar";

export default function NavBar() {
  const containerRef = React.useRef<HTMLElement>(null);
  const [isStuck, setIsStuck] = React.useState(false);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [root] = entries;
        setIsStuck(!root.isIntersecting);
      },
      {
        rootMargin: "-1px 100% 100% 100%",
        threshold: [1],
      },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppBar asChild>
      <nav
        ref={containerRef}
        className={`sticky isolate -my-px top-0 z-10 transition-all ${isStuck ? "bg-bg/50 backdrop-blur-md" : "bg-transparent"}`}
      >
        <span className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-border" />
        <span className="pointer-events-none absolute left-0 bottom-0 translate-y-1/2 h-[200vh] border-l border-dashed border-border" />
        <span className="pointer-events-none absolute right-0 bottom-0 translate-y-1/2 h-[200vh] border-r border-dashed border-border" />

        <AppBar.Logo className="mr-auto" href={sections.hero.href}>
          MMDEV_STUDIO
        </AppBar.Logo>

        <AppBar.Item href={sections.identity.href}>identity</AppBar.Item>
        <AppBar.Item href={sections.products.href}>products</AppBar.Item>
        <AppBar.Item href={sections.showcase.href}>showcase</AppBar.Item>

        <AppBar.Item
          href={sections.contact.href}
          className="font-bold text-primary"
        >
          build now
        </AppBar.Item>
      </nav>
    </AppBar>
  );
}
