import { routes, sections } from "@/lib/content";
import AppBar from "./AppBar";

export default function Footer() {
  return (
    <AppBar as="footer">
      <AppBar.Logo asChild>
        <span>MADE_WITH_💜️/2026</span>
      </AppBar.Logo>
      <AppBar.Item href={`/#${sections.contact}`}>
        contact@mmdev.studio
      </AppBar.Item>
      <AppBar.Item href={routes.privacyPolicy}>privacy policy</AppBar.Item>
      <AppBar.Item href={routes.imprint}>imprint</AppBar.Item>
    </AppBar>
  );
}
