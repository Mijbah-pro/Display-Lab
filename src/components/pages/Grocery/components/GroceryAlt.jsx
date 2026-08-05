function GroceryAlt() {
  const useCases = [
 {
    campaign: "Entrance Campaign",
    headline: "Fresh Savings Start Here",
    title: "Storefront and Entrance",
    description:
      "Attract traffic with weekly specials, event announcements, and brand campaigns.",
    bg: "from-sky-900 to-cyan-400",
  },
  {
    campaign: "Produce Department",
    headline: "Local and Fresh Today",
    title: "Aisles and Departments",
    description:
      "Promote products, recipes, bundles, and nutrition information near the shelf.",
    bg: "from-lime-900 to-lime-400",
  },
  {
    campaign: "Checkout Offer",
    headline: "Join Rewards and Save",
    title: "Checkout and Loyalty",
    description:
      "Increase impulse purchases and promote rewards, coupons, and digital receipts.",
    bg: "from-amber-900 to-amber-400",
  },
];

    return (
          <section className="bg-slate-50 py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 before:h-[2px] before:w-8 before:bg-cyan-600 before:content-['']">
            High-Impact Placements
          </span>

          <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Put the right message where shoppers make decisions.
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            Display Lab helps grocery stores create useful and profitable
            customer touchpoints throughout the shopping journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Visual */}
              <div
                className={`flex h-56 items-end bg-gradient-to-br ${item.bg} p-6`}
              >
                <div className="w-full rounded bg-white p-4 shadow-xl">
                  <small className="block text-sm text-slate-500">
                    {item.campaign}
                  </small>

                  <strong className="mt-1 block text-2xl font-bold text-slate-900">
                    {item.headline}
                  </strong>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    );
}

export default GroceryAlt;