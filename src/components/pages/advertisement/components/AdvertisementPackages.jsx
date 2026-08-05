import Reveal from "@/components/utils/Reveal";

const AdvertisementPackages = () => {
  const packages = [
    {
      title: "Local Starter",
      price: "Custom",
      suffix: "quote",
      description:
        "For local businesses testing digital place-based advertising.",
      features: [
        "Selected local venues",
        "Image or short video creative",
        "Standard scheduling",
        "Campaign delivery summary",
      ],
      button: "Request Pricing",
      featured: false,
    },
    {
      title: "Growth Campaign",
      price: "Custom",
      suffix: "quote",
      description:
        "For brands targeting multiple venues or audience segments.",
      features: [
        "Multi-location campaign",
        "Multiple creative rotations",
        "Daypart scheduling",
        "Enhanced campaign reporting",
      ],
      button: "Build My Campaign",
      featured: true,
      badge: "MOST POPULAR",
    },
    {
      title: "Enterprise Network",
      price: "Custom",
      suffix: "quote",
      description:
        "For agencies and brands requiring broad reach and custom management.",
      features: [
        "Regional or multi-market reach",
        "Custom screen and venue groups",
        "Dedicated campaign support",
        "Custom reporting and integrations",
      ],
      button: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-600">
            FLEXIBLE CAMPAIGN PACKAGES
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Choose the reach that fits your advertising goal.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Final pricing can vary by location count, screen type, duration,
            and campaign frequency.
          </p>
        </div>
        </Reveal>

        <Reveal props={"w-full"} >
        {/* Packages */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <article
              key={index}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.featured
                  ? "border-cyan-500 bg-white shadow-2xl scale-105"
                  : "border-slate-200 bg-white shadow-lg"
              }`}
            >
              {/* Badge */}
              {pkg.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  {pkg.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-3xl font-bold text-slate-900">
                {pkg.title}
              </h3>

              {/* Price */}
              <div className="mt-6">
                <span className="text-5xl font-extrabold text-cyan-600">
                  {pkg.price}
                </span>
                <span className="ml-2 text-lg text-slate-500">
                  {pkg.suffix}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 leading-7 text-slate-600">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="mt-8 flex-1 space-y-4">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-600">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className={`mt-10 inline-flex items-center justify-center rounded-xl px-6 py-4 text-center font-semibold transition ${
                  pkg.featured
                    ? "bg-cyan-500 text-white hover:bg-cyan-600"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {pkg.button}
              </a>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementPackages;