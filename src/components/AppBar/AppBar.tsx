import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import type { ComponentProps } from "react";
import cn from "@/lib/cn";

const itemClassName =
  "flex items-center text-action cursor-pointer transition select-none bg-transparent text-primary highlight hover-highlight px-0 py-2 gap-2 text-body font-normal text-text-subtle";

type AppBarProps = ComponentProps<"nav"> & {
  asChild: true;
};

export default function AppBar({ asChild, className, ...props }: AppBarProps) {
  return (
    <Slot
      className={cn(
        "px-8 py-3 flex gap-6 items-center font-heading",
        className,
      )}
      {...props}
    />
  );
}

type ItemProps = ComponentProps<typeof Link> & {
  asChild?: boolean;
};

function Item({ asChild, className, ...props }: ItemProps) {
  const Comp = asChild ? Slot : Link;

  return <Comp className={cn(itemClassName, className)} {...props} />;
}

function Logo({ className, ...props }: ItemProps) {
  return (
    <Item
      className={cn("text-text font-bold text-2xl py-0 mr-auto", className)}
      {...props}
    />
  );
}

AppBar.Item = Item;
AppBar.Logo = Logo;
