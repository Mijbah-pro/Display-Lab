function GrocerySimpleSetup() {
  const steps = [
  {
    number: "1",
    title: "Plan Your Screen Locations",
    description:
      "Choose entrances, aisles, departments, checkout areas, and pickup zones.",
  },
  {
    number: "2",
    title: "Create and Schedule Content",
    description:
      "Use templates or upload your own branded promotions and product messaging.",
  },
  {
    number: "3",
    title: "Publish and Manage Remotely",
    description:
      "Push updates to one screen or every store from the Display Lab CMS.",
  },
];

    return (
         <section className="py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 before:h-[2px] before:w-8 before:bg-cyan-600 before:content-['']">
            Simple Setup
          </span>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Launch your grocery signage in three clear steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Background Number */}
              <span className="absolute right-6 top-4 text-6xl font-extrabold text-slate-100">
                {step.number.padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100 text-xl font-bold text-cyan-700">
                {step.number}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
    );
}

export default GrocerySimpleSetup;