import { SECTION_HREF } from "@/config/sections";
import Appbar from "./Appbar";

export default function Navbar() {
  return (
    <Appbar
      title="MMDEV_STUDIO"
      navItems={[
        { href: SECTION_HREF.IDENTITY, name: "identity" },
        { href: SECTION_HREF.PRODUCTS, name: "products" },
        { href: SECTION_HREF.SHOWCASE, name: "showcase" },
        { href: SECTION_HREF.CONTACT, name: "build now" },
      ]}
      lastHighlighted
    />
  );
}
