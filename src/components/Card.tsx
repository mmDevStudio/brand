import { Children } from "react";
import cn from "@/utils/cn";

type CardProps = {
  className?: string;
} & React.ComponentProps<"article">;

export default function Card({ className, children, ...props }: CardProps) {
  const sections = Children.toArray(children);
  return (
    <article
      className={cn(
        "p-3 flex flex-col border border-border-subtle gap-2 bg-bg bg-stripes",
        className,
      )}
      {...props}
    >
      {sections.map((section, i) => (
        <>
          {i > 0 && <Divider />}
          {section}
        </>
      ))}
    </article>
  );
}

function Divider() {
  return (
    <div className="-mx-3 my-1.5 h-0 border-t border-dashed border-border" />
  );
}
