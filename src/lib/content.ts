const section = (id: string) => ({ id, href: `/#${id}` });

export const sections = {
  hero: section("hero"),
  identity: section("identity"),
  products: section("products"),
  showcase: section("showcase"),
  contact: section("contact"),
} as const;

export const routes = {
  imprint: "/imprint",
  privacyPolicy: "/privacy-policy",
} as const;
