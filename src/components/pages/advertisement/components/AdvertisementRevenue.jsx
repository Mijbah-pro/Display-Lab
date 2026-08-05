import Reveal from "@/components/utils/Reveal";

const AdvertisementRevenue = () => {
  const businessBenefits = [
    "Increase brand visibility",
    "Promote products and services",
    "Launch time-sensitive offers",
    "Collect leads with QR campaigns",
    "Reach customers close to purchase",
  ];

  const partnerBenefits = [
    "Revenue-sharing opportunity",
    "Managed campaign scheduling",
    "Category approval controls",
    "Creative and technical support",
    "Better on-site content experience",
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-white">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-400">
            REVENUE AND GROWTH OPPORTUNITY
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Create value for advertisers and display partners.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Display Lab supports both sides of the advertising network with
            flexible tools and managed service.
          </p>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Revenue Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Businesses */}
          <article className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-cyan-400 hover:bg-white/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-3xl">
              📈
            </div>

            <h3 className="text-3xl font-bold">
              For Businesses & Brands
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              Use digital place-based advertising to drive measurable attention
              and customer action.
            </p>

            <ul className="mt-8 space-y-4">
              {businessBenefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Partners */}
          <article className="rounded-3xl border border-emerald-500/20 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-emerald-400 hover:bg-white/10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-3xl">
              💰
            </div>

            <h3 className="text-3xl font-bold">
              For Display & Venue Partners
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              Monetize screen space while continuing to promote your own
              business and provide engaging content for visitors.
            </p>

            <ul className="mt-8 space-y-4">
              {partnerBenefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementRevenue;