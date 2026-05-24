import Appbar from "./Appbar";

export default function Navbar() {
  return (
    <Appbar
      title="MMDEV_STUDIO"
      navItems={[
        { href: "", name: "identity" },
        { href: "", name: "products" },
        { href: "", name: "showcase" },
        { href: "", name: "build now" },
      ]}
      lastHighlighted
    />
  );
}
