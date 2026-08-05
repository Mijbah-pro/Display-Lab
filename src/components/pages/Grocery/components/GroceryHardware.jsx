function GroceryHardware() {
    const hardwareItems = [
  {
    type: "screen",
    title: "Indoor Promotion Displays",
    description:
      "Commercial screens for aisles, deli counters, bakery sections, and checkout areas.",
  },
  {
    type: "kiosk",
    title: "Self-Service Kiosks",
    description:
      "Interactive touch displays for product lookup, loyalty enrollment, and ordering.",
  },
  {
    type: "window",
    title: "Window Displays",
    description:
      "High-visibility storefront screens for promotions, store hours, and community messages.",
  },
  {
    type: "promo",
    title: "Digital Promotion Kiosks",
    description:
      "Freestanding kiosks for sponsored ads, seasonal campaigns, and loyalty offers.",
  },
  {
    type: "outdoor",
    title: "Outdoor and Pickup Displays",
    description:
      "Weather-ready screens for curbside pickup, entrances, parking, and outdoor messaging.",
  },
];
const deviceStyles = {
  screen: (
    <div className="relative h-24 w-40 bg-slate-900 p-2 shadow-xl">
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-500 to-sky-700 text-xs font-bold text-white">
        FRESH DEALS
      </div>
    </div>
  ),

  kiosk: (
    <div className="relative h-40 w-20 rounded-md bg-slate-900 p-2 shadow-xl">
      <div className="flex h-28 items-center justify-center bg-gradient-to-b from-cyan-500 to-sky-700 text-sm font-bold text-white">
        SHOP
      </div>
    </div>
  ),

  window: (
    <div className="flex h-28 w-40 items-center justify-center border-[10px] border-slate-600 bg-gradient-to-br from-cyan-300 to-sky-700 text-xs font-bold text-white shadow-xl">
      WEEKLY SPECIAL
    </div>
  ),

  promo: (
    <div className="rounded-md bg-slate-900 p-2 shadow-xl">
      <div className="flex h-28 w-16 items-center justify-center bg-gradient-to-b from-amber-300 to-orange-600 text-sm font-bold text-white">
        20% OFF
      </div>
    </div>
  ),

  outdoor: (
    <div className="rounded-md bg-slate-900 p-2 shadow-xl">
      <div className="flex h-28 w-20 items-center justify-center bg-gradient-to-b from-sky-700 to-cyan-400 text-sm font-bold text-white">
        PICKUP
      </div>
    </div>
  ),
};
    return (
    <section id="hardware" className="py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 before:h-[2px] before:w-8 before:bg-cyan-600 before:content-['']">
            Flexible Hardware
          </span>

          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Use your screens, or let Display Lab provide the complete setup.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {hardwareItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                {deviceStyles[item.type]}
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600">
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

export default GroceryHardware;