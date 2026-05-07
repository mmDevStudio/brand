import * as Slot from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";
import cn from "@/utils/cn";

const buttonStyles = cva(
  "flex items-center text-action cursor-pointer transition outline-0 focus:outlined select-none",
  {
    variants: {
      mode: {
        filled:
          "bg-primary text-foreground focus:bg-primary/80 hover:bg-primary/80",
        ghost:
          "bg-transparent text-primary focus:bg-primary/20 hover:bg-primary/20",
      },
      size: {
        md: "px-6 py-3 gap-3 text-lg",
        sm: "px-3 py-2 gap-2 text-body",
      },
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> & {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  mode?: "filled" | "ghost";
  asChild?: boolean;
  size?: "md" | "sm";
};

export default function Button({
  prefixIcon,
  suffixIcon,
  mode = "filled",
  className,
  asChild,
  children,
  size = "md",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  const slottedChildren = React.isValidElement<HTMLElement>(children)
    ? React.cloneElement(
        children,
        children.props,
        <span className="flex-1 truncate">
          {children.props.children as React.ReactNode}
        </span>,
      )
    : children && <span className="flex-1 truncate">{children}</span>;

  return (
    <Comp className={cn(buttonStyles({ mode, size }), className)} {...props}>
      {prefixIcon && <span className="shrink-0">{prefixIcon}</span>}

      <Slot.Slottable>{slottedChildren}</Slot.Slottable>

      {suffixIcon && <span className="shrink-0">{suffixIcon}</span>}
    </Comp>
  );
}
