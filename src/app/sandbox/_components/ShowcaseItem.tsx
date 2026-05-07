import cn from "@/utils/cn";

type ShowcaseItemProps = React.ComponentProps<"div"> & {
  label: string;
};

export default function ShowcaseItem({
  label,
  children,
  className,
  ...props
}: ShowcaseItemProps) {
  return (
    <div
      className={cn("space-y-1 border border-border-subtle p-2", className)}
      {...props}
    >
      <dt className="uppercase truncate font-heading text-sm text-text-subtle">
        {label}
      </dt>

      <dd>{children}</dd>
    </div>
  );
}
