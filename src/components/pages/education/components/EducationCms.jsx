import { ArrowRight } from "lucide-react";

export default function EducationCMS() {
  const metrics = [
    {
      label: "Active screens",
      value: "42",
    },
    {
      label: "Campuses",
      value: "6",
    },
    {
      label: "Scheduled posts",
      value: "21",
    },
  ];

  const content = [
    {
      title: "Morning announcements",
      time: "7:30 AM to 10:00 AM",
      status: "LIVE",
      live: true,
      color: "from-sky-700 to-cyan-500",
    },
    {
      title: "Campus event schedule",
      time: "Monday to Friday",
      status: "SCHEDULED",
      live: false,
      color: "from-violet-600 to-indigo-700",
    },
  ];

  const features = [
    "Multi-school and multi-campus management",
    "Screen grouping by building or department",
    "Scheduled announcements and playlists",
    "Emergency alert override",
    "Cloud access for authorized staff",
  ];

  return (
    <section id="cms" className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* Dashboard */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Top */}
          <div className="flex h-14 items-center gap-5 border-b border-slate-200 bg-slate-50 px-5">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-sky-700 font-bold text-white">
              d
            </div>

            <div className="h-2 w-2/5 rounded-full bg-slate-200"></div>

            <div className="ml-auto h-7 w-7 rounded-full bg-slate-300"></div>
          </div>

          {/* Body */}
          <div className="grid min-h-[390px] grid-cols-[70px_1fr]">
            {/* Sidebar */}
            <div className="flex flex-col gap-6 bg-slate-900 p-5">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="h-2 rounded-full bg-white/40"
                ></span>
              ))}
            </div>

            {/* Content */}
            <div className="bg-slate-50 p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">
                    Education campaign
                  </p>

                  <h3 className="text-lg font-bold text-slate-900">
                    Campus Announcements
                  </h3>
                </div>

                <button className="rounded bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600">
                  Publish
                </button>
              </div>

              {/* Metrics */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>

                    <h4 className="mt-1 text-2xl font-bold">
                      {item.value}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Content Rows */}
              <div className="space-y-3">
                {content.map((item) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-[52px_1fr_auto] items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
                  >
                    <div
                      className={`h-10 rounded bg-gradient-to-br ${item.color}`}
                    />

                    <div>
                      <h4 className="text-sm font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-500">
                        {item.time}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                        item.live
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
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
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            Education Content Management
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Manage every campus screen from one simple CMS.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Update announcements, schedules, event information,
            directories, classroom content, and emergency messaging
            without visiting each screen.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="font-medium text-slate-700"
              >
                ✓ {feature}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-700"
          >
            Explore the education CMS
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}