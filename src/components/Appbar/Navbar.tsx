"use client";

import { useEffect, useRef } from "react";
import { SECTION_ID } from "@/config/content";
import Appbar from "../Appbar";

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const bodyStyle = getComputedStyle(document.body);
    const naturalLeft = -parseFloat(bodyStyle.paddingLeft) + 0.25;

    const sync = () => {
      const rect = el.getBoundingClientRect();
      const currentTop = window.scrollY + rect.top;

      const scroll = window.scrollY;

      const bgY = scroll >= currentTop ? -scroll : -currentTop;

      el.style.backgroundPositionX = `${naturalLeft}px`;
      el.style.backgroundPositionY = `${bgY}px`;
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
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
      <Appbar
        title="MMDEV_STUDIO"
        navItems={[
          { href: `/#${SECTION_ID.IDENTITY}`, name: "identity" },
          { href: `/#${SECTION_ID.PRODUCTS}`, name: "products" },
          { href: `/#${SECTION_ID.SHOWCASE}`, name: "showcase" },
          { href: `/#${SECTION_ID.CONTACT}`, name: "build now" },
        ]}
        isNav
      />
    </div>
  );
}
