import cn from "@/lib/cn";

type SectionProps = {
  className?: string;
  contentClassName?: string;
  title: string;
} & React.ComponentProps<"section">;

export default function Section({
  className,
  contentClassName,
  title,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("flex flex-col gap-8 scroll-mt-20", className)}
      {...props}
    >
      <header className="flex items-center gap-2.5">
        <hr className="w-5.5 border-t border-dashed border-border shrink-0" />
        <h2 className="text-primary font-bold uppercase font-heading text-xl shrink-0">
          {title}
        </h2>
        <hr className="flex-1 border-t border-dashed border-border" />
      </header>

      <div className={cn("pb-8 px-8", contentClassName)}>{children}</div>
    </section>
  );
}
