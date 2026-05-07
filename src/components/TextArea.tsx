import { cva } from "class-variance-authority";
import React from "react";
import cn from "@/utils/cn";
import { inputContainerStyles, inputStyles } from "./Input";

const textareaContainerStyles = cva("items-start");

const textareaStyles = cva("items-start min-h-6 min-w-0");

type TextAreaProps = React.ComponentProps<"textarea"> & {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
};

export default function TextArea({
  prefixIcon,
  suffixIcon,
  className,
  id,
  rows = 1,
  ...props
}: TextAreaProps) {
  const fallbackId = React.useId();
  id ||= fallbackId;

  return (
    <label
      className={cn(
        inputContainerStyles(),
        textareaContainerStyles(),
        className,
      )}
      htmlFor={id}
    >
      {prefixIcon && (
        <span className="shrink-0 h-6 flex items-center text-text-subtle">
          {prefixIcon}
        </span>
      )}

      <textarea
        id={id}
        className={cn(inputStyles(), textareaStyles())}
        rows={rows}
        {...props}
      />

      {suffixIcon && (
        <span className="shrink-0 h-6 flex items-center text-text-subtle">
          {suffixIcon}
        </span>
      )}
    </label>
  );
}
