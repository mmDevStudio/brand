import Appbar from "./Appbar";

export default function Navbar() {
  return (
    <Appbar
      title="MMDEV_STUDIO"
      NAV_ITEMS={[
        { href: "", name: "identity" },
        { href: "", name: "products" },
        { href: "", name: "showcase" },
        { href: "", name: "build now" },
      ]}
      lastHighlighted
    />
  );
}
