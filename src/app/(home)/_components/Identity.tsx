import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { SECTION_HREF, SECTION_ID } from "@/config/sections";
import Profile from "./Profile";

export default function Identity() {
  return (
    <Section
      title="01 / IDENTITY"
      contentClassName="grid grid-cols-2 gap-8"
      sectionId={SECTION_ID.IDENTITY}
    >
      <div className="col-span-2 font-body text-body text-text-subtle leading-10">
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
        <Link href={SECTION_HREF.PRODUCTS}>What we offer</Link>
      </Button>
    </Section>
  );
}
