import { ChevronDownIcon } from "@radix-ui/react-icons";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Section from "@/components/Section";
import TextArea from "@/components/TextArea";
import { SECTION_ID } from "@/config/content";

export default function Contact() {
  return (
    <Section id={SECTION_ID.CONTACT}>
      <Section.Header>04 / contact</Section.Header>

      <Section.Body className="grid grid-cols-2 gap-8">
        <div className="text-text-subtle leading-10 col-span-2">
          Select a package and tell us a bit about your goals. Whether you know
          exactly what you need or just want to explore your options, we review
          every request personally and will get back to you with a
          straightforward, no-nonsense plan.
        </div>

        <ul className="text-text-subtle leading-10">
          <li>
            <b className="font-b">Request:</b> You submit your project details
            through the form.
          </li>
          <li>
            <b className="font-b">Align:</b> We define your exact goals and
            finalize the scope.
          </li>
          <li>
            <b className="font-b">Build:</b> We engineer your fast, custom web
            presence.
          </li>
          <li>
            <b className="font-b">Launch:</b> We deploy the site and hand over
            the keys
          </li>
        </ul>

        <Card asChild>
          <form>
            <Card.Body className="flex flex-col gap-8">
              <label
                htmlFor="product-package"
                className="uppercase text-text text-sm flex flex-col gap-2.5"
              >
                Product Package
                {/* TODO: select instead of input */}
                <Input
                  id="product-package"
                  placeholder="Select your package"
                  className="w-full"
                  suffixIcon={<ChevronDownIcon />}
                />
              </label>
              <label
                htmlFor="email"
                className="uppercase text-text text-sm flex flex-col gap-2.5"
              >
                email
                {/* TODO: select instead of input */}
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full"
                />
              </label>

              <label
                htmlFor="details"
                className="uppercase text-text text-sm flex flex-col gap-2.5"
              >
                additional details
                {/* TODO: select instead of input */}
                <TextArea
                  id="details"
                  placeholder="Tell us more about your project..."
                  className="w-full min-h-25"
                />
              </label>
            </Card.Body>

            <Card.Footer>
              <Button className="size-full">Send request</Button>
            </Card.Footer>
          </form>
        </Card>
      </Section.Body>
    </Section>
  );
}
