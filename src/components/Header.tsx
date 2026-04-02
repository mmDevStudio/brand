import Link from "next/link";

const NAV_LINKS = [
  { name: "IDENTITY", href: "" },
  { name: "PRODUCTS", href: "" },
  { name: "SHOWCASE", href: "" },
];

export default function Header() {
  return (
    <>
      {/* spacing */}
      <div className="h-50 mx-auto container border-border border-x" />

      {/* bottom line */}
      <header className="border-b border-border w-full sticky top-0 z-50">
        {/* side lines */}
        {/* TODO: lined background is scuffed */}
        <div className="container mx-auto flex px-6 py-3 border-border border-x w-full justify-between items-center bg-bg bg-lines">
          {/* title */}
          <span className="font-heading text-2xl font-bold">MMDEV_STUDIO</span>
          {/* nav links */}
          <nav className="text-base flex items-center gap-6">
            {NAV_LINKS.map(({ name, href }) => (
              <Link href={href} key={name}>
                {name}
              </Link>
            ))}
            <Link href="" className="text-primary font-bold">
              BUILD NOW
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
