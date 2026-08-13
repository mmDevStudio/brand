import {
  Children,
  type ComponentPropsWithoutRef,
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
} from "react";
import cn from "@/utils/cn";

type CardProps = {
  className?: string;
  children: ReactNode;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"article">;

export default function Card({
  className,
  children,
  asChild,
  ...props
}: CardProps) {
  const sections = Children.toArray(children);
  const baseClasses = cn(
    "p-3 flex flex-col border border-border-subtle gap-2 bg-bg bg-stripes",
    className,
  );

  const content = sections.map((section, i) => {
    const k = isValidElement(section) ? section.key : i;
    return (
      <Fragment key={k}>
        {i > 0 && <Divider />}
        {section}
      </Fragment>
    );
  });

  if (asChild) {
    if (!isValidElement<ComponentPropsWithoutRef<"article">>(children)) {
      throw new Error(
        "Card with 'asChild' expects a single valid React element as a child.",
      );
    }

    return cloneElement(children, {
      ...props,
      className: cn(baseClasses, children.props.className),
    });
  }

  return (
    <article className={baseClasses} {...props}>
      {content}
    </article>
  );
}

function Head({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

function Main({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

function Foot({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex flex-col gap-1", className)} {...props} />;
}

function Divider() {
  return (
    <div className="-mx-3 my-1.5 h-0 border-t border-dashed border-border" />
  );
}

Card.Head = Head;
Card.Main = Main;
Card.Foot = Foot;
