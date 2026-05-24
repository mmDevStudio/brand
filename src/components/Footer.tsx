import Appbar from "./Appbar";

export default function Footer() {
  return (
    <Appbar
      as="footer"
      title="MADE_WITH_💜️/2026"
      NAV_ITEMS={[
        { href: "", name: "contact@mmdev.studio" },
        { href: "", name: "privacy policy" },
        { href: "", name: "imprint" },
      ]}
    />
  );
}
