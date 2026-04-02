import cn from "@/utils/cn";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div">;

export default function Section({
  title,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <>
      {title && <SectionTitle title={title} />}
      <div className={cn("flex flex-col gap-8 px-8", className)} {...props}>
        {children}
      </div>
    </>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-8">
      <div className="border-border border-t w-5.5 border-dashed" />
      <h1 className="text-action text-primary shrink-0">{title}</h1>
      <div className="border-border border-t w-full border-dashed" />
    </div>
  );
}
