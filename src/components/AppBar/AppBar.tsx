import { Slot } from "@radix-ui/react-slot";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps, HTMLAttributes, ReactNode } from "react";
import cn from "@/lib/cn";

type AppBarProps = HTMLAttributes<HTMLElement> & {
  as?: "nav" | "footer";
};

export default function AppBar({
  as: Comp = "nav",
  className,
  ...props
}: AppBarProps) {
  return (
    <Comp
      className={cn(
        "px-6 py-3 flex gap-6 items-center font-heading",
        className,
      )}
      {...props}
    />
  );
}

type ItemProps =
  | ({
      asChild: true;
      children: ReactNode;
      className?: string;
    } & Omit<ComponentProps<"a">, "children" | "className">)
  | ({
      asChild?: false;
      children: ReactNode;
      className?: string;
    } & LinkProps);

function Item(props: ItemProps) {
  const itemClassName = cn(
    "flex items-center text-action cursor-pointer transition select-none bg-transparent text-primary highlight hover-highlight px-0 py-2 gap-2 text-body font-normal text-text-subtle",
    props.className,
  );

  if (props.asChild) {
    const { asChild: _, className: __, ...slotProps } = props;
    return <Slot className={itemClassName} {...slotProps} />;
  }

  const { asChild: _, className: __, ...linkProps } = props;
  return <Link className={itemClassName} {...linkProps} />;
}

function Logo(props: ItemProps) {
  return (
    <Item
      {...props}
      className={cn(
        "flex-1 text-text font-bold text-2xl py-0 before:hidden",
        props.className,
      )}
    />
  );
}

AppBar.Item = Item;
AppBar.Logo = Logo;
