import Link from "next/link";
import type { ElementType } from "react";
import cn from "@/utils/cn";
import StickyNavWrapper from "./Appbar/StickyNavWrapper";
import Button from "./Button";

type AppbarProps<T extends ElementType> = {
  title: string;
  navItems: { href: string; name: string }[];
  lastHighlighted?: boolean;
  sticky?: boolean;
  as?: T;
};

export default function Appbar<T extends ElementType = "nav">({
  title,
  navItems,
  lastHighlighted = false,
  sticky = false,
  as,
}: AppbarProps<T>) {
  const Tag = as ?? "nav";
  const content = (
    <Tag className="px-6 py-3 flex gap-6 items-center font-heading">
      <h1 className="flex-1 text-text font-bold text-2xl">{title}</h1>
      {navItems.map((l, i) => {
        const highlight = i === navItems.length - 1 && lastHighlighted;

        return (
          <Button
            asChild
            mode="ghost"
            size="sm"
            className={cn(!highlight && "font-normal text-text-subtle px-0")}
            key={l.name}
          >
            <Link href={l.href}>{l.name}</Link>
          </Button>
        );
      })}
    </Tag>
  );

  return sticky ? <StickyNavWrapper>{content}</StickyNavWrapper> : content;
}
