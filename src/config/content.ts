export type Package = {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: number;
};

export const PACKAGES = [
  {
    id: "postcard",
    title: "Postcard",
    description: "The multi-page standard.",
    features: [
      "Up to 5 sub-pages",
      "Content Management",
      "Analytics Dashboard",
      "User Role Management",
    ],
    price: 20,
  },
  {
    id: "letter",
    title: "Letter",
    description: "The multi-page standard.",
    features: [
      "Up to 5 sub-pages",
      "Content Management",
      "Analytics Dashboard",
      "User Role Management",
    ],
    price: 40,
  },
  {
    id: "parcel",
    title: "Parcel",
    description: "The multi-page standard.",
    features: [
      "Up to 5 sub-pages",
      "Content Management",
      "Analytics Dashboard",
      "User Role Management",
    ],
    price: 80,
  },
] as const satisfies Package[];

export const SECTION_ID = {
  HERO: "hero",
  IDENTITY: "identity",
  PRODUCTS: "products",
  SHOWCASE: "showcase",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export default {
  HOME: "/",
  IMPRINT: "/imprint",
  PRIVACY_POLICY: "/privacy-policy",
} as const;
