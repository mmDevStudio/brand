import { cva } from "class-variance-authority";
import React from "react";
import cn from "@/utils/cn";

export const inputContainerStyles = cva(
  `flex items-center border-border border-1 px-3 py-2 gap-3 bg-bg
  placeholder:text-border text-text text-body font-body w-min transition
  focus-within:bg-bg-accent focus-within:outlined hover:bg-bg-accent`,
);

export const inputStyles = cva("outline-0 flex-1 min-w-0");

type InputProps = React.ComponentProps<"input"> & {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
};

export default function Input({
  prefixIcon,
  suffixIcon,
  className,
  id,
  ...props
}: InputProps) {
  const fallbackId = React.useId();
  id ||= fallbackId;

  return (
    <label className={cn(inputContainerStyles(), className)} htmlFor={id}>
      {prefixIcon && (
        <span className="shrink-0 text-text-subtle">{prefixIcon}</span>
      )}

      <input id={id} className={inputStyles()} {...props} />

      {suffixIcon && (
        <span className="shrink-0 text-text-subtle">{suffixIcon}</span>
      )}
    </label>
  );
}
