import Reveal from "@/components/utils/Reveal";

const AdvertisementVibrantBand = () => {
  const impactStats = [
    {
      value: "4.3M+",
      label: "Potential monthly ad impressions",
    },
    {
      value: "250+",
      label: "Venue and screen opportunities",
    },
    {
      value: "15K+",
      label: "Estimated monthly QR interactions",
    },
    {
      value: "24/7",
      label: "Campaign visibility and scheduling",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B5F8B] via-[#18A7C7] to-[#6B4FD6] py-24 text-white">
      {/* Decorative Blurs */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-yellow-300/30 blur-sm" />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-orange-400/30 blur-sm" />
      <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5">
        <Reveal props={"w-full"} >
          {/* Heading */}
          <div className="mb-12 max-w-4xl">
            <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-100">
              BUILT TO CREATE ATTENTION
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Turn every screen into a vibrant brand experience.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50">
              Use bold motion content, targeted placement, and campaign
              scheduling to connect with customers when they are ready to act.
            </p>
          </div>
        </Reveal>
        <Reveal props={"w-full"} >
          {/* Stats */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
              >
                <h3 className="text-4xl font-extrabold">{item.value}</h3>

                <p className="mt-3 text-sm leading-6 text-cyan-50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementVibrantBand;