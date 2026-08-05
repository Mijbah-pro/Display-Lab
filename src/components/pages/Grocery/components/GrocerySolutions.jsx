function GrocerySolutions() {
  const benefits = [
  {
    icon: "%",
    title: "Promote Weekly Deals",
    description:
      "Launch flash discounts, seasonal campaigns, and vendor-sponsored promotions instantly.",
  },
  {
    icon: "$",
    title: "Update Prices Faster",
    description:
      "Replace printed signs with digital pricing that your team can update from anywhere.",
  },
  {
    icon: "◎",
    title: "Guide Product Discovery",
    description:
      "Highlight new products, recipes, nutrition details, and aisle-specific recommendations.",
  },
  {
    icon: "▦",
    title: "Manage Every Location",
    description:
      "Control one store or an entire grocery network from a single secure dashboard.",
  },
];
  return (
 <section id="solutions" className="py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 before:h-[2px] before:w-8 before:bg-cyan-600 before:content-['']">
            Built for Grocery
          </span>

          <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Everything you need to inform shoppers and increase basket size.
          </h2>

          <p className="text-lg text-slate-600">
            Connect promotions, product information, advertising, and in-store
            communication across every customer touchpoint.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-2xl font-bold text-sky-700">
                {benefit.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {benefit.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GrocerySolutions;