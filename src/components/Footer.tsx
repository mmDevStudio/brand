import Appbar from "./Appbar";

type NavItem = { href: string; name: string };
const NAV_ITEMS: NavItem[] = [
  { href: "", name: "contact@mmdev.studio" },
  { href: "", name: "privacy policy" },
  { href: "", name: "imprint" },
];

export default function Navbar() {
  return (
    <Appbar title="MADE_WITH_💜️/2026" NAV_ITEMS={NAV_ITEMS} lastHightlighted>
      <nav />
    </Appbar>
  );
}
