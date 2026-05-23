import Hero from "./_components/Hero";
import Identity from "./_components/Identity";
import Products from "./_components/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Hero />
      <Identity />
      <Products />
    </div>
  );
}
