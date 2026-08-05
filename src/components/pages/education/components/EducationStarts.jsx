export default function EducationStarts() {
  const stats = [
    {
      title: "One dashboard",
      description: "for every campus screen",
    },
    {
      title: "Instant announcements",
      description: "publish updates in real time",
    },
    {
      title: "Emergency messaging",
      description: "share urgent alerts quickly",
    },
    {
      title: "Multi-campus ready",
      description: "manage schools from one account",
    },
  ];

  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`border-white/10 px-7 py-7 ${
              index !== stats.length - 1
                ? "border-b sm:border-r lg:border-b-0"
                : ""
            }`}
          >
            <h3 className="text-base font-bold">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}