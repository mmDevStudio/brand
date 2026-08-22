import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Identity from "./_components/Identity/Identity";
import Products from "./_components/Products/Products";
import Showcase from "./_components/Showcase";

export default function Home() {
  return (
    <div>
      <Hero />
      <Identity />
      <Products />
      <Showcase />
      <Contact />
    </div>
  );
}
