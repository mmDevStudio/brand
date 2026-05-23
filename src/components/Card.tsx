import cn from "@/utils/cn";
import Button from "./Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

type CardProps = {
  className?: string;
  buttonTitle: string;
} & React.ComponentProps<"article">;

export default function Card({
  className,
  buttonTitle,
  children,
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        "p-3 flex flex-col border border-border-subtle gap-2 bg-bg bg-stripes",
        className,
      )}
      {...props}
    >
      <div className="flex-1">{children}</div>

      <div className="-mx-3 my-1.5 h-0 border-t border-dashed border-border" />

      <Button mode="filled" size="sm" suffixIcon={<ArrowRightIcon />}>
        {buttonTitle}
      </Button>
    </article>
  );
}
