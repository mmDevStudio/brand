import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps, Fragment } from "react";
import cn from "@/lib/cn";

type CardProps = ComponentProps<"article"> & {
  asChild?: boolean;
};

export default function Card({
  className,
  children,
  asChild,
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "article";

  return (
    <Comp
      className={cn(
        "p-3 flex flex-col border border-border gap-2 bg-bg bg-stripes",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <Fragment>
      <header className={className} {...props} />
      <Divider />
    </Fragment>
  );
}

function Body(props: ComponentProps<"section">) {
  return <section {...props} />;
}

function Footer({ className, ...props }: ComponentProps<"footer">) {
  return (
    <Fragment>
      <Divider />
      <footer className={className} {...props} />
    </Fragment>
  );
}

function Divider() {
  return (
    <div className="-mx-3 my-1.5 h-0 border-t border-dashed border-border" />
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
