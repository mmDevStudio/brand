import * as Slot from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type React from "react";
import cn from "@/utils/cn";

const buttonStyles = cva(
  "flex items-center w-fit text-action cursor-pointer transition select-none",
  {
    variants: {
      mode: {
        filled: "bg-primary text-foreground hover:bg-primary/80",
        ghost: "bg-transparent text-primary highlight hover-highlight",
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
  const content = asChild ? (
    children
  ) : (
    <span className="flex-1 truncate">{children}</span>
  );

  return (
    <Comp className={cn(buttonStyles({ mode, size }), className)} {...props}>
      {prefixIcon && <span className="shrink-0">{prefixIcon}</span>}

      <Slot.Slottable>{content}</Slot.Slottable>

      {suffixIcon && <span className="shrink-0">{suffixIcon}</span>}
    </Comp>
  );
}
