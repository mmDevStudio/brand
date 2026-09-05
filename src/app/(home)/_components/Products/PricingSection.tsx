import Carousel from "@/components/Carousel";
import PackageCard from "./PackageCard";

const packages = [
  {
    title: "Postcard",
    subtitle: "The multi-page standard",
    features: [
      "Up to 5 sub-pages",
      "Content Management",
      "Analytics Dashboard",
      "User Role Management",
    ],
    price: 20,
  },
  {
    title: "Postcard",
    subtitle: "The multi-page standard",
    features: [
      "Up to 5 sub-pages",
      "Content Management",
      "Analytics Dashboard",
      "User Role Management",
    ],
    price: 40,
    recommended: true,
  },
  {
    title: "Parcel",
    subtitle: "The multi-page standard",
    features: [
      "Up to 5 sub-pages",
      "Content Management",
      "Analytics Dashboard",
      "User Role Management",
    ],
    price: 80,
  },
];

export default function PricingSection() {
  return (
    <div>
      {/* Mobile & Tablet Layout (< lg) */}
      <Carousel
        tabs={packages.map((pkg) => ({
          title: pkg.title,
          panel: <PackageCard {...pkg} className="max-w-100 mx-auto" />,
        }))}
        startTab={1}
        className="lg:hidden w-full"
      />

      {/* Desktop Layout (>= lg) */}
      <div className="hidden lg:flex gap-6 justify-center w-full px-10">
        {packages.map((pkg, idx) => (
          <PackageCard
            key={`${pkg.title}-${idx}`}
            className="w-full"
            {...pkg}
          />
        ))}
      </div>
    </div>
  );
}
