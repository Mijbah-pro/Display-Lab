import Reveal from "@/components/utils/Reveal";

const AdvertisementPlatform = () => {
  const features = [
    "Campaign and creative management",
    "Venue and screen grouping",
    "Approval and scheduling workflows",
    "Playback and delivery reporting",
  ];

  const metrics = [
    { label: "Active Screens", value: "48" },
    { label: "Locations", value: "24" },
    { label: "Scheduled Ads", value: "16" },
  ];

  const campaigns = [
    {
      title: "Brand Awareness Creative",
      schedule: "9:00 AM to 2:00 PM",
      status: "LIVE",
      color: "bg-cyan-500",
      badge: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Weekend Offer",
      schedule: "Friday to Sunday",
      status: "SCHEDULED",
      color: "bg-orange-500",
      badge: "bg-amber-100 text-amber-700",
    },
  ];

  return (
    <section id="platform" className="bg-white py-24">
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal props={"w-full"} >
          {/* Dashboard */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
                  D
                </div>

                <div className="h-10 w-52 rounded-full bg-slate-200" />
              </div>

              <div className="h-10 w-10 rounded-full bg-slate-300" />
            </div>

            <div className="flex">
              {/* Sidebar */}
              <aside className="hidden w-20 flex-col items-center gap-5 border-r border-slate-200 bg-slate-50 py-6 md:flex">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-10 w-10 rounded-xl bg-slate-300"
                  />
                ))}
              </aside>

              {/* Main */}
              <div className="flex-1 p-6">
                {/* Title */}
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Advertising Campaign
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      Summer Brand Promotion
                    </h3>
                  </div>

                  <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
                    Publish
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid gap-4 md:grid-cols-3">
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        {metric.label}
                      </p>

                      <h4 className="mt-2 text-3xl font-bold text-slate-900">
                        {metric.value}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Campaign Rows */}
                <div className="mt-8 space-y-4">
                  {campaigns.map((campaign, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-14 w-14 rounded-xl ${campaign.color}`}
                        />

                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {campaign.title}
                          </h4>

                          <p className="text-sm text-slate-500">
                            {campaign.schedule}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-xs font-bold ${campaign.badge}`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </Reveal>
          <Reveal props={"w-full"} >
          {/* Right Content */}
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-600">
              CAMPAIGN MANAGEMENT
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Manage every advertising campaign from one dashboard.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Control creative files, campaign schedules, screen groups, venue
              approvals, and delivery reporting without managing each screen
              manually.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-600">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementPlatform;