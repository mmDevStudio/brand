import { Children, type ElementType, Fragment, isValidElement } from "react";
import cn from "@/utils/cn";

type CardProps<T extends ElementType> = {
  className?: string;
  as?: T;
} & React.ComponentProps<T>;

export default function Card<T extends ElementType = "article">({
  className,
  children,
  as,
  ...props
}: CardProps<T>) {
  const sections = Children.toArray(children);
  const Tag = as ?? "article";
  return (
    <Tag
      className={cn(
        "p-3 flex flex-col border border-border-subtle gap-2 bg-bg bg-stripes",
        className,
      )}
      {...props}
    >
      {sections.map((section, i) => {
        const k = isValidElement(section) ? section.key : i;
        return (
          <Fragment key={k}>
            {i > 0 && <Divider />}
            {section}
          </Fragment>
        );
      })}
    </Tag>
  );
}

function Divider() {
  return (
    <div className="-mx-3 my-1.5 h-0 border-t border-dashed border-border" />
  );
}
