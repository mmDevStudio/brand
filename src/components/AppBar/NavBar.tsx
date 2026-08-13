import { sections } from "@/lib/content";
import AppBar from "./AppBar";

export default function NavBar() {
  return (
    <div className="sticky px-px -my-px top-0 z-10 bg-bg bg-stripes bg-fixed border-b border-border">
      <span className="pointer-events-none absolute -bottom-px left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-border" />
      <span className="pointer-events-none absolute left-0 bottom-0 translate-y-1/2 h-[200vh] border-l border-dashed border-border" />
      <span className="pointer-events-none absolute right-0 bottom-0 translate-y-1/2 h-[200vh] border-r border-dashed border-border" />
      <AppBar>
        <AppBar.Logo href="/">MMDEV_STUDIO</AppBar.Logo>
        <AppBar.Item href={sections.identity.href}>identity</AppBar.Item>
        <AppBar.Item href={sections.products.href}>products</AppBar.Item>
        <AppBar.Item href={sections.showcase.href}>showcase</AppBar.Item>
        <AppBar.Item
          href={sections.contact.href}
          className="font-bold text-primary px-3"
        >
          build now
        </AppBar.Item>
      </AppBar>
    </div>
  );
}
