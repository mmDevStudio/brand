import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";

export default function ContactCard() {
  return (
    <Card asChild>
      <form>
        <Card.Body className="flex flex-col gap-8">
          <label
            htmlFor="product-package"
            className="uppercase text-text text-sm flex flex-col gap-2.5"
          >
            Product Package
            <Select placeholder="Select a package" className="w-full">
              <Select.Option value="sm">Package #1</Select.Option>
              <Select.Option value="md">Package #2</Select.Option>
              <Select.Option value="lg">Package #3</Select.Option>
            </Select>
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
  );
}
