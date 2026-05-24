import P from "@/config/pages";
import { SECTION_HREF } from "@/config/sections";
import Appbar from "../Appbar";

export default function Footer() {
  return (
    <Appbar
      as="footer"
      title="MADE_WITH_💜️/2026"
      navItems={[
        { href: SECTION_HREF.CONTACT, name: "contact@mmdev.studio" },
        { href: P.PRIVACY_POLICY, name: "privacy policy" },
        { href: P.IMPRINT, name: "imprint" },
      ]}
    />
  );
}
