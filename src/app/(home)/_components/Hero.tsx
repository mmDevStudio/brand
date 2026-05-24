import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 gap-8 px-8">
      <div className="text-title uppercase font-bold h-fit">
        <h1 className="text-text">your digital presence,</h1>
        <h1 className="text-primary">engineered right</h1>
      </div>
      <div>
        <Image src="/[MM].svg" alt="MM" height={200} width={593} />
      </div>

      <div className="col-span-2 text-lg text-text-subtle leading-10">
        A clinical approach to web development, architecting high-performance
        digital ledgers that prioritize clarity over clutter.
      </div>

      <Button mode="ghost" suffixIcon={<ChevronDownIcon />} className="w-fit">
        WHO WE ARE
      </Button>

      <Button
        mode="filled"
        suffixIcon={<ArrowRightIcon />}
        className="w-fit justify-self-end"
      >
        START NOW
      </Button>
    </section>
  );
}
