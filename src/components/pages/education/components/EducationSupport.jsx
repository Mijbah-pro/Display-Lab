export default function EducationSupport() {
  const useCases = [
    {
      icon: "🏫",
      title: "K-12 Schools",
      description:
        "Display announcements, lunch menus, activities, safety alerts, celebrations, and family information.",
    },
    {
      icon: "🎓",
      title: "Colleges and Universities",
      description:
        "Manage multi-building communication, campus events, directories, departments, and student services.",
    },
    {
      icon: "📖",
      title: "Libraries",
      description:
        "Promote programs, hours, services, digital resources, community events, and visitor guidance.",
    },
    {
      icon: "🧑‍🏫",
      title: "Training Centers",
      description:
        "Share course schedules, room assignments, certification updates, notices, and learning content.",
    },
    {
      icon: "🏀",
      title: "Athletic Facilities",
      description:
        "Show game schedules, scores, team information, sponsor content, and venue directions.",
    },
    {
      icon: "🍽",
      title: "Cafeterias",
      description:
        "Display digital menus, nutrition information, meal schedules, promotions, and allergy notices.",
    },
    {
      icon: "🧪",
      title: "Labs and Departments",
      description:
        "Publish specialized schedules, safety instructions, project updates, and department messaging.",
    },
    {
      icon: "🎭",
      title: "Auditoriums and Events",
      description:
        "Share event schedules, speaker details, sponsor messaging, directions, and live announcements.",
    },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
            Education Use Cases
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Support every part of the learning environment.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Use digital signage across classrooms, hallways, libraries,
            cafeterias, offices, and event spaces.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-4xl">{item.icon}</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}