import Section from "@/components/Section";
import TextArea from "@/components/TextArea";
import { sections } from "@/lib/content";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <Section id={sections.contact}>
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

        <ContactCard />
      </Section.Body>
    </Section>
  );
}
