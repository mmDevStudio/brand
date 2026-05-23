import Appbar from "./Appbar";

type NavItem = { href: string; name: string };
const NAV_ITEMS: NavItem[] = [
  { href: "", name: "identity" },
  { href: "", name: "products" },
  { href: "", name: "showcase" },
  { href: "", name: "build now" },
];

export default function Navbar() {
  return (
    <Appbar title="MMDEV_STUDIO" NAV_ITEMS={NAV_ITEMS} lastHightlighted>
      <nav />
    </Appbar>
  );
}
