import Link from "next/link";
import cn from "@/utils/cn";
import StickyNavWrapper from "./Appbar/StickyNavWrapper";
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
  const Tag = isNav ? "nav" : "footer";
  const content = (
    <Tag className="px-6 py-3 flex gap-6 items-center font-heading">
      <h1 className="flex-1 text-text font-bold text-2xl">
        {isNav ? <Link href="/">{title}</Link> : title}
      </h1>{" "}
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
            <Link href={l.href}>{l.name}</Link>
          </Button>
        );
      })}
    </Tag>
  );

  return isNav ? <StickyNavWrapper>{content}</StickyNavWrapper> : content;
}
