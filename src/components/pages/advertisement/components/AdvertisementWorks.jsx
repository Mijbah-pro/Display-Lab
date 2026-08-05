import Reveal from "@/components/utils/Reveal";

const AdvertisementWorks = () => {
  const steps = [
    {
      step: "STEP 01",
      title: "Choose your audience",
      description:
        "Select industries, venue types, locations, and campaign goals.",
    },
    {
      step: "STEP 02",
      title: "Select placements",
      description:
        "Choose window displays, kiosks, indoor screens, menu boards, or outdoor units.",
    },
    {
      step: "STEP 03",
      title: "Upload your creative",
      description:
        "Submit image or video ads, or request creative support from Display Lab.",
    },
    {
      step: "STEP 04",
      title: "Go live and track",
      description:
        "Approve the schedule, launch the campaign, and review delivery reports.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-5">
        <Reveal props={"mx-auto"} >
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-600">
            HOW IT WORKS
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Launch your campaign in four simple steps.
          </h2>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:bg-white hover:shadow-2xl"
            >
              {/* Step Badge */}
              <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-8 h-1 w-12 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementWorks;