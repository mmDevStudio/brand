import { routes, sections } from "@/lib/content";
import Appbar from "../Appbar";

export default function Footer() {
  return (
    <Appbar
      title="MADE_WITH_💜️/2026"
      navItems={[
        { href: sections.contact.href, name: "contact@mmdev.studio" },
        { href: routes.privacyPolicy, name: "privacy policy" },
        { href: routes.imprint, name: "imprint" },
      ]}
    />
  );
}
