import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge<string, string>({
  extend: {
    theme: {
      text: ["title", "h1", "h2", "h3", "h4", "lg", "body", "sm"],
      font: ["body", "heading"],
    },
    classGroups: {
      "text-action": ["text-action"],
    },
  },
});

/** merges tailwind classes and ensures only the last conflicting class is kept */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
