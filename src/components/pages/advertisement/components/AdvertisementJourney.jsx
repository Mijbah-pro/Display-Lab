import Reveal from "@/components/utils/Reveal";

const AdvertisementJourney = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Creative",
      description: "Submit your image or video campaign assets.",
    },
    {
      number: "2",
      title: "Choose Locations",
      description: "Select venues, screens, audiences, and markets.",
    },
    {
      number: "3",
      title: "Approve Schedule",
      description: "Confirm dates, dayparts, and campaign frequency.",
    },
    {
      number: "4",
      title: "Go Live",
      description: "Launch across approved Display Lab screens.",
    },
    {
      number: "5",
      title: "Review Results",
      description: "Track delivery, views, scans, and performance.",
    },
  ];

  return (
    <section className="bg-[#0A1F36] py-24 text-white">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300">
            CAMPAIGN JOURNEY
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            From creative idea to live campaign.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Display Lab gives you a clear path to launch, manage, and measure
            your advertising.
          </p>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >

        {/* Journey Steps */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </article>

              {/* Arrow (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 xl:flex items-center justify-center text-3xl font-bold text-cyan-400">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementJourney;