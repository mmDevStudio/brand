import Hero from "./_components/Hero";
import Identity from "./_components/Identity";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Identity />
    </div>
  );
}
