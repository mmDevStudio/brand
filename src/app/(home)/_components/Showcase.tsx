"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Tabs from "@/components/Tabs";

export default function Showcase() {
  return (
    <Section title="03 / showcase" contentClassName="flex flex-col gap-8">
      <div className="text-text-subtle leading-10">
        Explore some of our recent contract work. As an indie studio, we pride
        ourselves on delivering custom-tailored websites that cut through the
        noise.
      </div>

      <Tabs>
        <Tabs.Tab
          key="pixel forge"
          title="pixel forge"
          subtitle="indie game studio"
        >
          <div></div>
        </Tabs.Tab>
        <Tabs.Tab
          key="curst & crumb"
          title="curst & crumb"
          subtitle="local bakery"
        >
          <div></div>
        </Tabs.Tab>
        <Tabs.Tab
          key="apex legal partners"
          title="apex legal partners"
          subtitle="corporate law firm"
        >
          <div></div>
        </Tabs.Tab>
        <Tabs.Tab
          key="luminar gear"
          title="luminar gear"
          subtitle="technical equipments"
        >
          <div></div>
        </Tabs.Tab>
      </Tabs>

      <Button mode="ghost" className="w-fit" suffixIcon={<ChevronDownIcon />}>
        Book your website
      </Button>
    </Section>
  );
}
