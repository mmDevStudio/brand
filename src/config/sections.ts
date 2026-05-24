export const SECTION_ID = {
  HERO: "hero",
  IDENTITY: "identity",
  PRODUCTS: "products",
  SHOWCASE: "showcase",
  CONTACT: "contact",
} as const;

export type SectionKey = keyof typeof SECTION_ID;

export type SectionValue = (typeof SECTION_ID)[keyof typeof SECTION_ID];

export const SECTION_HREF = Object.fromEntries(
  Object.entries(SECTION_ID).map(([key, value]) => [key, `/#${value}`]),
) as Record<SectionKey, string>;
