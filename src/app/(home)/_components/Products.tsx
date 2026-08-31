import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { PACKAGES, SECTION_ID } from "@/config/content";
import { PackageCard } from "./PackageCard";

export default function Products() {
  return (
    <Section id={SECTION_ID.PRODUCTS}>
      <Section.Header>02 / our products</Section.Header>

      <Section.Body className="grid grid-cols-3 gap-8">
        <div className="text-text-subtle text-body font-body col-span-3 leading-10">
          We don't do hidden fees, aggressive upselling, or confusing retainers.
          We offer three distinct, highly optimized packages designed to give
          you exactly what your business needs—and absolutely nothing you don't.
        </div>

        {PACKAGES.map((pkg) => (
          <PackageCard
            {...pkg}
            key={pkg.id}
            recommended={pkg.id === "letter"}
          />
        ))}

        <div className="col-span-3 leading-10 text-text-subtle">
          You don’t know yet which package applies to you? Don’t worry, we
          happily advice you what fits best for your use case, even if it’s not
          covered in one of our displayed products.{" "}
          <Link
            href={`/#${SECTION_ID.CONTACT}`}
            className="text-primary underline"
          >
            Just write us!
          </Link>
        </div>

        <Button asChild mode="ghost" suffixIcon={<ChevronDownIcon />}>
          <Link href={`/#${SECTION_ID.SHOWCASE}`}>What customers say</Link>
        </Button>
      </Section.Body>
    </Section>
  );
}
