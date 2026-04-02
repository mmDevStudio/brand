import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import cn from "@/utils/cn";

export const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center",
  {
    variants: {
      mode: {
        filled: "bg-primary text-primary-foreground",
        ghost: "bg-transparent text-primary",
      },
      size: {
        sm: "px-4 py-2 text-base",
        md: "px-6 py-3 text-xl",
      },
    },
    defaultVariants: {
      mode: "filled",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> & {
  mode?: "filled" | "ghost";
  size?: "md" | "sm";
  asChild?: boolean;
};

export default function Button({
  className,
  mode,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      type={asChild ? undefined : props.type || "button"}
      className={cn(buttonVariants({ mode, size, className }))}
      {...props}
    />
  );
}
