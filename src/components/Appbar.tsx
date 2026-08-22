"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import cn from "@/utils/cn";
import Button from "./Button";

type AppbarProps = {
  title: string;
  navItems: { href: string; name: string }[];
  isNav?: boolean;
};

export default function Appbar({
  title,
  navItems,
  isNav = false,
}: AppbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Tag = isNav ? "nav" : "footer";
  return (
    <Tag
      className={cn(
        "px-6 py-3 flex justify-between items-center lg:flex-row gap-4 lg:gap-0",
        isNav ? "" : "flex-col",
      )}
    >
      {/* Title */}
      <h1
        className={cn(
          "text-text font-bold text-2xl font-heading",
          isNav ? "" : "w-full lg:w-fit",
        )}
      >
        {isNav ? <Link href="/">{title}</Link> : title}
      </h1>

      {/* Mobile Toggle Button */}
      {isNav && (
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className={"text-text lg:hidden p-2"}
          mode="ghost"
        >
          {isOpen ? (
            <Cross1Icon height={32} width={32} />
          ) : (
            <HamburgerMenuIcon height={32} width={32} />
          )}
        </Button>
      )}

      {/* Mobile Dropdown Menu */}
      {isNav && isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg bg-stripes border-border border flex flex-col p-4 gap-6 lg:hidden">
          {navItems.map((l, i) => {
            const highlight = i === navItems.length - 1 && isNav;

            return (
              <Button
                asChild
                mode="ghost"
                size="sm"
                className={cn(
                  "justify-start w-full",
                  !highlight && "font-normal text-text-subtle",
                )}
                key={l.name}
              >
                <Link href={l.href} onClick={() => setIsOpen(false)}>
                  {l.name}
                </Link>
              </Button>
            );
          })}
        </div>
      )}

      {/* Desktop */}
      <div
        className={cn(
          "lg:gap-6",
          isNav
            ? "hidden lg:flex"
            : "flex flex-wrap flex-col lg:flex-row items-start lg:items-center lg:w-fit w-full",
        )}
      >
        {navItems.map((l, i) => {
          const highlight = i === navItems.length - 1 && isNav;

          return (
            <Button
              asChild
              mode="ghost"
              size="sm"
              className={cn(!highlight && "font-normal text-text-subtle px-0")}
              key={l.name}
            >
              <Link onClick={() => setIsOpen(false)} href={l.href}>
                {l.name}
              </Link>
            </Button>
          );
        })}
      </div>
    </Tag>
  );
}
