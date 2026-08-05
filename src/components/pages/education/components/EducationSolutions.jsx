export default function EducationSolutions() {
  const features = [
    {
      icon: "📢",
      title: "Campus announcements",
      description:
        "Share daily updates, deadlines, policy reminders, news, and important notices.",
    },
    {
      icon: "🚨",
      title: "Emergency alerts",
      description:
        "Override regular content and publish urgent safety information across selected screens.",
    },
    {
      icon: "📅",
      title: "Schedules and events",
      description:
        "Display classes, exams, meetings, sports, activities, and campus event schedules.",
    },
    {
      icon: "🧭",
      title: "Wayfinding and directories",
      description:
        "Help visitors find buildings, classrooms, offices, departments, and event locations.",
    },
    {
      icon: "🏆",
      title: "Student achievements",
      description:
        "Celebrate awards, academic success, sports results, projects, and community contributions.",
    },
    {
      icon: "📚",
      title: "Educational content",
      description:
        "Share learning materials, digital posters, reminders, awareness campaigns, and helpful resources.",
    },
  ];

  return (
    <section id="solutions" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            Built for Education
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Improve communication across the entire campus.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Deliver timely information to students, families, staff, and
            visitors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-8 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}