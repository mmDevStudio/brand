import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { SECTION_ID } from "@/config/content";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 gap-8 px-8" id={SECTION_ID.HERO}>
      <div className="text-title uppercase font-bold h-fit">
        <h1 className="text-text">your digital presence,</h1>
        <h1 className="text-primary">engineered right</h1>
      </div>
      <div>
        <Image
          className="select-none"
          src="/[MM].svg"
          alt="MM"
          height={200}
          width={593}
          loading="eager"
        />
      </div>

      <div className="col-span-2 text-lg text-text-subtle leading-10">
        A clinical approach to web development, architecting high-performance
        digital ledgers that prioritize clarity over clutter.
      </div>

      <Button
        asChild
        mode="ghost"
        suffixIcon={<ChevronDownIcon />}
        className="w-fit"
      >
        <Link href={`/#${SECTION_ID.IDENTITY}`}>WHO WE ARE</Link>
      </Button>

      <Button
        asChild
        mode="filled"
        suffixIcon={<ArrowRightIcon />}
        className="w-fit justify-self-end"
      >
        <Link href={`/#${SECTION_ID.CONTACT}`}>Start now</Link>
      </Button>
    </section>
  );
}
