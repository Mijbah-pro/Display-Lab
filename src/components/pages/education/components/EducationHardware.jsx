export default function EducationHardware() {
  const hardware = [
    {
      label: "CLASSROOM",
      title: "Classroom Displays",
      description:
        "Commercial screens for lessons, announcements, schedules, and classroom communication.",
      gradient: "from-sky-700 to-cyan-500",
      hasBase: false,
      wide: true,
    },
    {
      label: "HALLWAY",
      title: "Hallway Displays",
      description:
        "Portrait and landscape screens for announcements, wayfinding, and campus information.",
      gradient: "from-violet-600 to-indigo-700",
      hasBase: false,
      wide: false,
    },
    {
      label: "DIRECTORY",
      title: "Interactive Directory Kiosks",
      description:
        "Touchscreen kiosks for maps, directories, event information, and visitor assistance.",
      gradient: "from-cyan-600 to-sky-500",
      hasBase: true,
      wide: false,
    },
    {
      label: "OUTDOOR",
      title: "Outdoor Campus Displays",
      description:
        "Weather-ready screens for entrances, pickup areas, sports facilities, and outdoor events.",
      gradient: "from-orange-500 to-amber-500",
      hasBase: true,
      wide: false,
    },
    {
      label: "EVENT",
      title: "Event and Auditorium Displays",
      description:
        "Large-format displays for ceremonies, performances, conferences, and campus programs.",
      gradient: "from-sky-700 to-cyan-500",
      hasBase: false,
      wide: true,
    },
  ];

  return (
    <section id="hardware" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            Flexible Hardware
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Use your existing screens, or let Display Lab provide the full
            setup.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Choose hardware for classrooms, hallways, entrances, outdoor
            areas, and campus events.
          </p>
        </div>

        {/* Hardware Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {hardware.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Visual */}
              <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
                <div className="relative flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center border-8 border-slate-900 bg-gradient-to-br ${item.gradient} text-center shadow-xl ${
                      item.wide ? "h-24 w-40" : "h-36 w-24"
                    }`}
                  >
                    <span className="text-xs font-bold tracking-widest text-white">
                      {item.label}
                    </span>
                  </div>

                  {item.hasBase && (
                    <div className="h-2 w-28 bg-slate-900"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
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