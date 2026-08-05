import Reveal from "@/components/utils/Reveal";

const AdvertisementTestimonial = () => {
  const testimonials = [
    {
      quote:
        "Our weekend promotion received strong attention across multiple neighborhood screens and generated more QR activity than our previous print campaign.",
      author: "Local Restaurant Group",
      role: "Multi-location campaign",
    },
    {
      quote:
        "Vendor advertising gave us a new way to promote brands inside the store while keeping our own weekly deals visible.",
      author: "Independent Grocery Market",
      role: "Venue partner",
    },
    {
      quote:
        "The campaign dashboard made it easy to organize creative, locations, and schedules without managing each screen separately.",
      author: "Retail Marketing Team",
      role: "Regional promotion",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-600">
            CAMPAIGN IMPACT
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Advertising designed to support real business goals.
          </h2>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Testimonial Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="group relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-6xl font-bold leading-none text-cyan-500 opacity-30">
                “
              </div>

              {/* Quote */}
              <p className="mb-8 text-lg leading-8 text-slate-600">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-slate-200" />

              {/* Author */}
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.author}
                </h3>

                <p className="mt-1 text-sm font-medium text-cyan-600">
                  {item.role}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-cyan-500 to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementTestimonial;