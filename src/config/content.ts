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
