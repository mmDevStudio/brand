import Link from "next/link";
import type { ElementType } from "react";
import cn from "@/utils/cn";
import Button from "./Button";

type AppbarProps<T extends ElementType> = {
  title: string;
  navItems: { href: string; name: string }[];
  lastHighlighted?: boolean;
  as?: T;
};

export default function Appbar<T extends ElementType = "nav">({
  title,
  navItems,
  lastHighlighted = false,
  as,
}: AppbarProps<T>) {
  const Tag = as ?? "nav";
  return (
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
            <Link className="uppercase" href={l.href}>
              {l.name}
            </Link>
          </Button>
        );
      })}
    </Tag>
  );
}
