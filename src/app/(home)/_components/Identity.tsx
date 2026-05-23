import Button from "@/components/Button";
import Section from "@/components/Section";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Identity() {
  return (
    <Section title="01 / IDENTITY" contentClassName="grid grid-cols-2 gap-8">
      <div className="col-span-2 font-body text-body text-text-subtle">
        We are a development studio building clean, fast, and modern websites.
        We help small businesses and startups establish their online presence
        with zero unnecessary complexity—just results. Our focus is raw
        performance, scalable architecture, and straightforward design.
      </div>

      <Profile name="Mika Reich" title="frontend engineer">
        I’m Mika, a 21-year-old Computer Science student based in Saarbrücken,
        Germany. I’ve been coding websites for 10 years, living and breathing
        modern web development.
      </Profile>

      <Profile name="Marco Zillgen" title="system architect">
        I’m Marco, also 21, and studying Computer Science alongside Mika in
        Saarbrücken. While Mika lives in the browser, my background is heavily
        rooted in low-level programming and IoT (Internet of Things).
      </Profile>

      <Button mode="ghost" suffixIcon={<ChevronDownIcon />} className="w-fit">
        What we offer
      </Button>
    </Section>
  );
}

function Profile({
  name,
  title,
  children,
}: {
  name: string;
  title: string;
  children: string;
}) {
  return (
    <article className="flex flex-col">
      <span className="text-xl text-text font-heading font-bold">{name}</span>
      <span className="text-text-subtle font-heading text-body font-bold mb-3 uppercase">
        {title}
      </span>
      <span className="text-text-subtle leading-10 text-body font-body">
        {children}
      </span>
    </article>
  );
}
