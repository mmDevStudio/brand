import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Identity from "./_components/Identity";
import Products from "./_components/Products";
import Showcase from "./_components/Showcase";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Hero />
      <Identity />
      <Products />
      <Showcase />
      <Contact />
    </div>
  );
}
