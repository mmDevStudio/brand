import type { SectionValue } from "@/config/sections";
import cn from "@/utils/cn";

type SectionProps = {
  className?: string;
  contentClassName?: string;
  title: string;
  sectionId: SectionValue;
} & Omit<React.ComponentProps<"section">, "id">;

export default function Section({
  className,
  contentClassName,
  title,
  children,
  sectionId,
  ...props
}: SectionProps) {
  return (
    <section
      id={sectionId}
      className={cn("flex flex-col gap-8", className)}
      {...props}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-5.5 h-0 border-t border-dashed border-border shrink-0" />
        <h2 className="text-primary font-bold uppercase font-heading text-xl shrink-0">
          {title}
        </h2>
        <div className="flex-1 h-0 border-t border-dashed border-border" />
      </div>

      <div className={cn("pb-8 px-8", contentClassName)}>{children}</div>
    </section>
  );
}
