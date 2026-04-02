import cn from "@/utils/cn";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import Button from "./Button";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import Link from "next/link";
import EastSharpIcon from "@mui/icons-material/EastSharp";

type SectionProps = {
  title?: string;
} & ComponentPropsWithoutRef<"div"> &
  SectionFooterProps;

export default function Section({
  title,
  children,
  className,
  actionBtn,
  actionHref,
  scrollBtn,
  scrollHref,
  ...props
}: SectionProps) {
  return (
    <>
      <SectionTitle title={title} />
      <div className={cn("flex flex-col gap-8 px-8", className)} {...props}>
        {children}
      </div>
      <SectionFooter
        actionBtn={actionBtn}
        actionHref={actionHref}
        scrollBtn={scrollBtn}
        scrollHref={scrollHref}
      />
    </>
  );
}

function SectionTitle({ title }: { title?: string }) {
  if (title === undefined) return;

  return (
    <div className="flex items-center gap-2.5 mb-8">
      <div className="border-border border-t w-5.5 border-dashed" />
      <h1 className="text-action text-primary shrink-0">{title}</h1>
      <div className="border-border border-t w-full border-dashed" />
    </div>
  );
}

type SectionFooterProps = {
  actionBtn?: string;
  scrollBtn?: string;
  scrollHref?: string;
  actionHref?: string;
};

function SectionFooter({
  actionBtn,
  actionHref,
  scrollBtn,
  scrollHref,
}: SectionFooterProps) {
  if (actionBtn === undefined && scrollBtn === undefined) return;

  return (
    <div className="flex w-full justify-between px-8 mt-8">
      <Button mode="ghost" asChild>
        <Link href={scrollHref || ""} className="gap-2">
          {scrollBtn} <ExpandMoreSharpIcon />
        </Link>
      </Button>
      <Button asChild>
        <Link href={actionHref || ""} className="gap-2 pr-4">
          {actionBtn}
          <EastSharpIcon />
        </Link>
      </Button>
    </div>
  );
}
