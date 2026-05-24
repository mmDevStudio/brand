import Link from "next/link";
import type { ElementType } from "react";
import cn from "@/utils/cn";
import Button from "./Button";

type NavItem = { href: string; name: string };

export default function Appbar<T extends ElementType = "nav">({
  title,
  NAV_ITEMS,
  lastHighlighted = false,
  as,
}: {
  title: string;
  NAV_ITEMS: NavItem[];
  lastHighlighted?: boolean;
  as?: T;
}) {
  const Tag = as ?? "nav";
  return (
    <Tag className="px-6 py-3 flex gap-6 items-center font-heading">
      <h1 className="flex-1 text-text font-bold text-2xl">{title}</h1>
      {NAV_ITEMS.map((l, i) => {
        const highlight = i === NAV_ITEMS.length - 1 && lastHighlighted;

        return (
          <Button
            asChild
            mode="ghost"
            size="sm"
            className={cn(!highlight && "font-normal text-text-subtle px-0")}
            key={l.name}
          >
            <Link className="uppercase" href={l.href}>
              {l.name}
            </Link>
          </Button>
        );
      })}
    </Tag>
  );
}
