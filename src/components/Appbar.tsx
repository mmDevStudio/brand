import Link from "next/link";
import React from "react";
import cn from "@/utils/cn";
import Button from "./Button";

type NavItem = { href: string; name: string };

export default function Appbar({
  title,
  NAV_ITEMS,
  lastHighlighted = false,
  children,
}: {
  title: string;
  NAV_ITEMS: NavItem[];
  lastHighlighted?: boolean;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>; // ts-type: classname exists
}) {
  return React.cloneElement(
    children,
    {
      className: cn(
        "px-6 py-3 flex gap-6 items-center font-heading",
        children.props.className,
      ),
    },
    <>
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
    </>,
  );
}
