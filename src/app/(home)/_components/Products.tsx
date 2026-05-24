import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import {
  ArrowRightIcon,
  CheckCircledIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Products() {
  return (
    <Section
      title="02 / our products"
      contentClassName="grid grid-cols-3 gap-8"
    >
      <div className="text-text-subtle text-body font-body col-span-3 leading-10">
        We don't do hidden fees, aggressive upselling, or confusing retainers.
        We offer three distinct, highly optimized packages designed to give you
        exactly what your business needs—and absolutely nothing you don't.
      </div>

      <PackageCard
        title="Postcard"
        subtitle="The multi-page standard"
        features={[
          "Up to 5 sub-pages",
          "Content Management",
          "Analytics Dashboard",
          "User Role Management",
        ]}
        price={20}
      />
      <PackageCard
        title="Postcard"
        subtitle="The multi-page standard"
        features={[
          "Up to 5 sub-pages",
          "Content Management",
          "Analytics Dashboard",
          "User Role Management",
        ]}
        price={40}
        recommended
      />
      <PackageCard
        title="Parcel"
        subtitle="The multi-page standard"
        features={[
          "Up to 5 sub-pages",
          "Content Management",
          "Analytics Dashboard",
          "User Role Management",
        ]}
        price={80}
      />

      <div className="col-span-3 leading-10 text-text-subtle">
        You don’t know yet which package applies to you? Don’t worry, we happily
        advice you what fits best for your use case, even if it’s not covered in
        one of our displayed products.{" "}
        <Link href="" className="text-primary underline">
          Just write us!
        </Link>
      </div>

      <Button mode="ghost" className="w-fit" suffixIcon={<ChevronDownIcon />}>
        What customers say
      </Button>
    </Section>
  );
}

function PackageCard({
  title,
  subtitle,
  features,
  price,
  recommended = false,
}: {
  title: string;
  subtitle: string;
  features: string[];
  price: number;
  recommended?: boolean;
}) {
  return (
    <Card className="h-115">
      {/* Head */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h4 className="text-text font-heading text-h4 font-bold">{title}</h4>
          {recommended && (
            <span className="uppercase font-medium text-primary">
              Recommended
            </span>
          )}
        </div>
        <span className="text-text-subtle text-sm uppercase">{subtitle}</span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 justify-between">
        <ul>
          {features.map((f) => (
            <li
              key={f}
              className="flex gap-2 text-text leading-10 items-center"
            >
              <CheckCircledIcon className="text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="font-heading flex gap-2 items-center">
          <span className="text-h4 text-primary font-bold">{price}€</span>
          <span className="uppercase text-text-subtle text-sm pt-1.5">
            per unit
          </span>
        </div>
      </div>

      {/* Foot */}
      <Button
        mode={recommended ? "filled" : "ghost"}
        suffixIcon={<ArrowRightIcon />}
      >
        select {title}
      </Button>
    </Card>
  );
}
