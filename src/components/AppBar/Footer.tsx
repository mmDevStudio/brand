import { routes, sections } from "@/lib/content";
import AppBar from "./AppBar";

export default function Footer() {
  return (
    <AppBar asChild>
      <footer>
        <AppBar.Logo href="/#">MADE_WITH_💜️/2026</AppBar.Logo>
        <AppBar.Item href={`/#${sections.contact}`}>
          contact@mmdev.studio
        </AppBar.Item>
        <AppBar.Item href={routes.privacyPolicy}>privacy policy</AppBar.Item>
        <AppBar.Item href={routes.imprint}>imprint</AppBar.Item>
      </footer>
    </AppBar>
  );
}
