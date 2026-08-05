import Reveal from "@/components/utils/Reveal";

const AdvertisementNetwork = () => {
  const networkFeatures = [
    {
      title: "Location Targeting",
      description:
        "Select specific venues, cities, neighborhoods, regions, or custom location groups.",
      icon: "📍",
    },
    {
      title: "Industry Targeting",
      description:
        "Choose restaurant, grocery, retail, office, education, healthcare, event, or public locations.",
      icon: "🏢",
    },
    {
      title: "Time-Based Scheduling",
      description:
        "Run campaigns by day, date range, daypart, business hours, or promotional period.",
      icon: "🕒",
    },
    {
      title: "Creative Rotation",
      description:
        "Rotate multiple ads, test messaging, and distribute different creatives by screen group.",
      icon: "🎨",
    },
  ];

  return (
    <section
      id="network"
      className="bg-gradient-to-br from-slate-900 via-[#0B2545] to-slate-800 py-24 text-white"
    >
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-400">
            DISPLAY LAB AD NETWORK
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Target by venue, location, audience, and time.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Build a focused local campaign or scale across multiple venue
            categories and markets.
          </p>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {networkFeatures.map((feature, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-300">
                {feature.description}
              </p>

              {/* Accent Line */}
              <div className="mt-8 h-1 w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementNetwork;