export default function EducationSetup() {
  const steps = [
    {
      number: "01",
      title: "Plan your screen network",
      description:
        "Identify campuses, buildings, screen locations, departments, and communication needs.",
    },
    {
      number: "02",
      title: "Connect your displays",
      description:
        "Use compatible existing screens or install Display Lab hardware and media players.",
    },
    {
      number: "03",
      title: "Create and schedule content",
      description:
        "Build playlists for announcements, events, alerts, directories, and educational messaging.",
    },
    {
      number: "04",
      title: "Publish and manage",
      description:
        "Control content from the cloud and update selected screens, buildings, or campuses.",
    },
  ];

  return (
    <section
      id="setup"
      className="bg-gradient-to-br from-slate-900 to-sky-900 py-20 text-white lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
            Simple Setup
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            Launch your education signage in four steps.
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Display Lab supports planning, hardware, content setup, training,
            and ongoing management.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/10"
            >
              <small className="text-sm font-bold tracking-[0.18em] text-cyan-400">
                {step.number}
              </small>

              <h3 className="mt-4 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}