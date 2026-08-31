import { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import Card from "@/components/Card";
import type { Package } from "@/config/content";

type PackageCardProps = Package & { recommended?: boolean };

export function PackageCard({
  title,
  description,
  features,
  price,
  recommended,
}: PackageCardProps) {
  return (
    <Card className="min-h-115">
      <Card.Header className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h4 className="text-text font-heading text-h4 font-bold">{title}</h4>
          {recommended && (
            <span className="uppercase font-medium text-primary">
              Recommended
            </span>
          )}
        </div>
        <span className="text-text-subtle text-sm uppercase">
          {description}
        </span>
      </Card.Header>

      <Card.Body className="flex flex-col flex-1 justify-between">
        <ul>
          {features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 text-text leading-10 items-center"
            >
              <CheckCircledIcon className="text-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="font-heading flex gap-2 items-center">
          <span className="text-h4 text-primary font-bold">{price}€</span>
          <span className="uppercase text-text-subtle text-sm pt-1.5">
            per unit
          </span>
        </div>
      </Card.Body>

      <Card.Footer>
        <Button
          className="size-full"
          mode={recommended ? "filled" : "ghost"}
          suffixIcon={<ArrowRightIcon />}
        >
          select {title}
        </Button>
      </Card.Footer>
    </Card>
  );
}
