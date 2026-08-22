import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { SECTION_ID } from "@/config/content";

export default function Hero() {
  return (
    <Section id={SECTION_ID.HERO}>
      <Section.Body className="grid grid-cols-2 gap-8">
        <h1 className="text-title uppercase font-bold w-fit self-center">
          <span className="text-text">your digital presence,</span>
          <br />
          <span className="text-primary">engineered right</span>
        </h1>

        <div className="relative min-h-50 max-w-150 w-full justify-self-end overflow-visible">
          <Image
            className="select-none absolute min-w-fit w-fit -translate-y-1/2 top-1/2"
            src="/[MM].svg"
            alt="MM Dev Studio Logo"
            height={200}
            width={593}
            loading="eager"
          />
        </div>

        <p className="col-span-2 text-xl text-text-subtle leading-10">
          A clinical approach to web development, architecting high-performance
          digital ledgers that prioritize clarity over clutter.
        </p>

        <Button
          asChild
          mode="ghost"
          className="hidden lg:flex"
          suffixIcon={<ChevronDownIcon />}
        >
          <Link href={`/#${SECTION_ID.IDENTITY}`}>WHO WE ARE</Link>
        </Button>

        <Button
          asChild
          mode="filled"
          suffixIcon={<ArrowRightIcon />}
          className="lg:justify-self-end"
        >
          <Link href={`/#${SECTION_ID.CONTACT}`}>Start now</Link>
        </Button>
      </Section.Body>
    </Section>
  );
}
