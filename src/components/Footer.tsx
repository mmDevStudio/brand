import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border w-full">
      <div className="container px-6 py-3 flex justify-between items-center font-heading mx-auto border-x border-border">
        <h2 className="text-text text-2xl font-bold">MADE WITH 💜️ / 2026</h2>
        <div className="flex gap-6 items-center text-base">
          {["CONTACT@MMDEV.STUDIO", "PRIVACY POLICY", "IMPRINT"].map((e) => (
            <Link href="" key={e}>
              {e}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
