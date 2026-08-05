import Reveal from "@/components/utils/Reveal";

const AdvertisementAnalytics = () => {
  const metrics = [
    {
      label: "Impressions",
      value: "186K",
    },
    {
      label: "QR Scans",
      value: "4,820",
    },
    {
      label: "Locations",
      value: "24",
    },
  ];

  const features = [
    "Screen playback reporting",
    "Estimated impressions",
    "QR scans and engagement",
    "Location-level performance",
    "Creative comparison",
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal props={"w-full"} >
          {/* Left Content */}
          <div>
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">
              LIVE CAMPAIGN INSIGHTS
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              See how your campaign is performing.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Use campaign reporting to review screen delivery, estimated
              impressions, QR activity, and performance by location.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-medium text-slate-700"
                >
                  <span className="text-lg text-emerald-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>

          <Reveal props={"w-full"} >
          {/* Analytics Panel */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 p-7 shadow-2xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                Campaign Performance
              </h3>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                LIVE
              </span>
            </div>

            {/* Metrics */}
            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-5"
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

            {/* Fake Chart */}
            <div className="relative mt-8 h-56 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {/* Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px]" />

              {/* Area Chart */}
              <svg
                viewBox="0 0 500 220"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="chartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 180 C70 170 90 100 150 120 C210 140 240 60 300 80 C360 100 400 30 500 45 L500 220 L0 220 Z"
                  fill="url(#chartFill)"
                />

                <path
                  d="M0 180 C70 170 90 100 150 120 C210 140 240 60 300 80 C360 100 400 30 500 45"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementAnalytics;