"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import { CONTACT_SCHEMA } from "@/config/contact-schema";
import { PACKAGES } from "@/config/content";

export default function ContactCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(CONTACT_SCHEMA),
  });

  return (
    <Card asChild>
      <form onSubmit={handleSubmit(console.log)}>
        <Card.Body className="flex flex-col gap-8">
          <label
            htmlFor="product-package"
            className="uppercase text-text text-sm flex flex-col gap-2.5"
          >
            Product Package
            <Controller
              name="package"
              control={control}
              render={({ field }) => (
                <Select
                  placeholder="Select a package"
                  className="w-full"
                  onValueChange={field.onChange}
                  {...field}
                >
                  {PACKAGES.map((pkg) => (
                    <Select.Option key={pkg.id} value={pkg.id}>
                      {pkg.title}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
            {errors.package && (
              <span className="text-red-500 truncate">
                {errors.package.message}
              </span>
            )}
          </label>

          <label
            htmlFor="email"
            className="uppercase text-text text-sm flex flex-col gap-2.5"
          >
            Email Address
            <Input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full"
              {...register("emailAddress")}
            />
            {errors.emailAddress && (
              <span className="text-red-500 truncate">
                {errors.emailAddress.message}
              </span>
            )}
          </label>

          <label
            htmlFor="details"
            className="uppercase text-text text-sm flex flex-col gap-2.5"
          >
            Additional Details
            <TextArea
              id="details"
              placeholder="Tell us more about your project..."
              className="w-full min-h-25"
              {...register("description")}
            />
            {errors.description && (
              <span className="text-red-500 truncate">
                {errors.description.message}
              </span>
            )}
          </label>
        </Card.Body>

        <Card.Footer>
          <Button type="submit" className="size-full">
            Send request
          </Button>
        </Card.Footer>
      </form>
    </Card>
  );
}
