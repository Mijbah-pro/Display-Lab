function GroceryCMS() {
    const sidebarItems = [
  "Dashboard",
  "Screens",
  "Playlists",
  "Schedules",
  "Analytics",
];

const stats = [
  { value: "24", label: "ACTIVE SCREENS" },
  { value: "8", label: "LIVE CAMPAIGNS" },
  { value: "4", label: "STORE LOCATIONS" },
];

const schedules = [
  { name: "Produce", width: "82%", status: "Live" },
  { name: "Bakery", width: "70%", status: "Live" },
  { name: "Checkout", width: "94%", status: "Live" },
  { name: "Window", width: "62%", status: "Scheduled" },
];

const features = [
  {
    title: "Daypart and date-based scheduling",
    description:
      "Automatically show breakfast, lunch, weekend, or seasonal promotions.",
  },
  {
    title: "Vendor advertising campaigns",
    description:
      "Create paid promotional placements for brands and grocery suppliers.",
  },
  {
    title: "Emergency and operational alerts",
    description:
      "Publish store notices, safety information, and service updates immediately.",
  },
];
    return (
 <section id="cms" className="bg-slate-50 py-20 lg:py-24">
      <div className="container mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:items-center">
        {/* Dashboard */}
        <div className="rounded-3xl bg-sky-950 p-5 shadow-2xl">
          {/* Top */}
          <div className="mb-5 flex items-center justify-between text-white">
            <strong className="text-lg">Display Lab CMS</strong>

            <div className="flex gap-2">
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className="h-2 w-2 rounded-full bg-slate-400"
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[130px_1fr]">
            {/* Sidebar */}
            <div className="rounded-xl bg-sky-900 p-3">
              {sidebarItems.map((item, index) => (
                <div
                  key={item}
                  className={`mb-2 rounded-lg px-3 py-2 text-xs font-medium ${
                    index === 0
                      ? "bg-cyan-600 text-white"
                      : "text-slate-300"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main */}
            <div className="rounded-xl bg-slate-50 p-4">
              {/* Stats */}
              <div className="mb-4 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg bg-white p-4 shadow-sm"
                  >
                    <strong className="block text-xl font-bold text-slate-900">
                      {stat.value}
                    </strong>

                    <small className="text-[10px] uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </small>
                  </div>
                ))}
              </div>

              {/* Schedule */}
              <div className="rounded-lg bg-white p-4 shadow-sm">
                {schedules.map((item) => (
                  <div
                    key={item.name}
                    className="grid grid-cols-[70px_1fr_80px] items-center gap-3 border-b border-slate-100 py-3 last:border-none"
                  >
                    <span className="text-xs font-medium text-slate-700">
                      {item.name}
                    </span>

                    <div className="h-2 overflow-hidden rounded-full bg-cyan-100">
                      <div
                        className="h-full rounded-full bg-cyan-600"
                        style={{ width: item.width }}
                      />
                    </div>

                    <span className="text-right text-xs font-semibold text-slate-700">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 before:h-[2px] before:w-8 before:bg-cyan-600 before:content-['']">
            One Powerful CMS
          </span>

          <h2 className="mb-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Control every grocery display from one place.
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            Build content, schedule promotions, manage screens, and update
            multiple stores without sending staff to each location.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                  ✓
                </div>

                <div>
                  <h4 className="mb-1 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h4>

                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex rounded-md bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800 hover:shadow-lg"
            >
              See the CMS in Action
            </a>
          </div>
        </div>
      </div>
    </section>
    );
}

export default GroceryCMS;