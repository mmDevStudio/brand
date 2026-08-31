"use client";

import {
  CubeIcon,
  EnvelopeOpenIcon,
  PersonIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Tabs from "@/components/Tabs";
import TextArea from "@/components/TextArea";
import { ThemeModeSwitcher } from "@/components/ThemeSwitcher";
import ShowcaseItem from "./_components/ShowcaseItem";

/** This page is intended to showcase custom ui components. Remove or hide route before release */
export default function SandboxPage() {
  return (
    <main className="container mx-auto py-10 px-3 space-y-10">
      <header className="relative">
        <ThemeModeSwitcher className="absolute top-0 right-0" size="sm">
          Change Theme
        </ThemeModeSwitcher>

        <h1 className="text-title text-text font-heading font-bold mb-2">
          Component Showcase
        </h1>

        <p className="text-text-subtle">
          This page is intended to showcase custom ui components. Remove or hide
          route before release!
        </p>

        <hr className="text-border-subtle" />
      </header>

      <section>
        <h1 className="text-h1 font-heading font-bold text-text">Tabs</h1>

        <dl>
          <ShowcaseItem label="base">
            <Tabs>
              <Tabs.Tab
                key={"1"}
                title="title"
                subtitle="subtitle"
                className=""
              >
                Test
              </Tabs.Tab>
              <Tabs.Tab key={"2"} title="title2" subtitle="subtitle2">
                Test2
              </Tabs.Tab>
              <Tabs.Tab key={"3"} title="title3" subtitle="subtitle3">
                Test3
              </Tabs.Tab>
              <Tabs.Tab key={"4"} title="title4" subtitle="subtitle4">
                Test4
              </Tabs.Tab>
            </Tabs>
          </ShowcaseItem>
        </dl>
      </section>

      <section>
        <h1 className="text-h1 font-heading font-bold text-text">Button</h1>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ShowcaseItem label='mode: "filled", size: "md"'>
            <Button mode="filled" size="md">
              Button
            </Button>
          </ShowcaseItem>

          <ShowcaseItem label='mode: "filled", size: "sm"'>
            <Button mode="filled" size="sm">
              Button
            </Button>
          </ShowcaseItem>

          <ShowcaseItem label='mode: "ghost", size: "md"'>
            <Button mode="ghost" size="md">
              Button
            </Button>
          </ShowcaseItem>

          <ShowcaseItem label='mode: "ghost", size: "sm"'>
            <Button mode="ghost" size="sm">
              Button
            </Button>
          </ShowcaseItem>
        </dl>
      </section>

      <section>
        <h1 className="text-h1 font-heading font-bold text-text">Input</h1>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ShowcaseItem label="base">
            <Input
              prefixIcon={<PersonIcon />}
              placeholder="Input"
              className="w-full"
              suffixIcon={<QuestionMarkCircledIcon />}
            />
          </ShowcaseItem>
        </dl>
      </section>

      <section>
        <h1 className="text-h1 font-heading font-bold text-text">Text Area</h1>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ShowcaseItem label="base">
            <TextArea
              placeholder="Text Area"
              className="w-full"
              prefixIcon={<EnvelopeOpenIcon />}
              suffixIcon={<QuestionMarkCircledIcon />}
            />
          </ShowcaseItem>
        </dl>
      </section>

      <section>
        <h1 className="text-h1 font-heading font-bold text-text">Card</h1>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ShowcaseItem label="base">
            <Card className="w-full text-text">
              <Card.Header>
                <h2 className="font-heading text-h4 font-bold">Card title</h2>
                <p className="text-sm uppercase text-text-subtle">
                  Card subtitle
                </p>
              </Card.Header>
              <Card.Body className="text-text-subtle">
                Card body content demonstrates the compound component layout.
              </Card.Body>
              <Card.Footer>
                <Button size="sm">Card action</Button>
              </Card.Footer>
            </Card>
          </ShowcaseItem>
        </dl>
      </section>

      <section>
        <h1 className="text-h1 font-heading font-bold text-text">Select</h1>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ShowcaseItem label="base">
            <Select placeholder="Select a package" className="w-full">
              <Select.Option value="sm">Package #1</Select.Option>
              <Select.Option value="md">Package #2</Select.Option>
              <Select.Option value="lg">Package #3</Select.Option>
            </Select>
          </ShowcaseItem>

          <ShowcaseItem label="w/ prefix icon">
            <Select
              prefixIcon={<CubeIcon />}
              placeholder="Select a package"
              className="w-full"
            >
              <Select.Option value="sm">Package #1</Select.Option>
              <Select.Option value="md">Package #2</Select.Option>
              <Select.Option value="lg">Package #3</Select.Option>
            </Select>
          </ShowcaseItem>
        </dl>
      </section>
    </main>
  );
}
