import P, { SECTION_ID } from "@/config/content";
import Appbar from "../Appbar";

export default function Footer() {
  return (
    <Appbar
      title="MADE_WITH_💜️/2026"
      navItems={[
        { href: `/#${SECTION_ID.CONTACT}`, name: "contact@mmdev.studio" },
        { href: P.PRIVACY_POLICY, name: "privacy policy" },
        { href: P.IMPRINT, name: "imprint" },
      ]}
    />
  );
}
