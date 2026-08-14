import cn from "@/utils/cn";

function Header({
  children,
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header className={cn("flex items-center gap-2.5", className)} {...props}>
      <hr className="w-5.5 border-t border-dashed border-border shrink-0" />
      <h2 className="text-primary font-bold uppercase font-heading text-xl shrink-0">
        {children}
      </h2>
      <hr className="flex-1 border-t border-dashed border-border" />
    </header>
  );
}

function Body({ children, className, ...props }: React.ComponentProps<"main">) {
  return (
    <main className={cn("pb-8 px-8", className)} {...props}>
      {children}
    </main>
  );
}

export default function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("flex flex-col gap-8 scroll-mt-20", className)}
      {...props}
    >
      {children}
    </section>
  );
}

Section.Header = Header;
Section.Body = Body;
