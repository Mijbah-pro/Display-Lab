import Reveal from "@/components/utils/Reveal";

const AdvertisementCampaignTypes = () => {
  const campaigns = [
    {
      icon: "⚡",
      title: "Flash Sales",
      description:
        "Promote urgent, limited-time offers with bold messaging and countdown-style creative.",
      gradient: "from-[#0D6B9D] to-[#25B2CF]",
    },
    {
      icon: "🎉",
      title: "Grand Openings",
      description:
        "Build local awareness before launch day and drive first-week traffic.",
      gradient: "from-[#F47A1F] to-[#FFB12F]",
    },
    {
      icon: "🚀",
      title: "Product Launches",
      description:
        "Introduce new products with video, feature highlights, and QR-driven offers.",
      gradient: "from-[#6547D8] to-[#9D6CFF]",
    },
    {
      icon: "🌟",
      title: "Brand Awareness",
      description:
        "Stay visible across trusted venues and repeat your message consistently.",
      gradient: "from-[#1C9B72] to-[#4DC99D]",
    },
    {
      icon: "📱",
      title: "QR Promotions",
      description:
        "Drive customers to coupons, ordering pages, forms, and lead-generation campaigns.",
      gradient: "from-[#D94C73] to-[#FF7D95]",
    },
    {
      icon: "🎬",
      title: "Video Advertising",
      description:
        "Use motion, product demos, testimonials, and short-form branded content.",
      gradient: "from-[#2D3D73] to-[#5374C8]",
    },
    {
      icon: "🗓",
      title: "Seasonal Campaigns",
      description:
        "Run holiday, weekend, community, and event-based promotions at the right time.",
      gradient: "from-[#0C7C83] to-[#21B7B7]",
    },
    {
      icon: "📍",
      title: "Local Targeting",
      description:
        "Focus campaigns by neighborhood, venue category, city, or custom screen group.",
      gradient: "from-[#8B4B12] to-[#E8861F]",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">
            VIBRANT CAMPAIGN CONTENT
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Create advertising that feels fresh, timely, and impossible to
            ignore.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Mix promotional formats to support awareness, traffic, engagement,
            and conversion.
          </p>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Campaign Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {campaigns.map((campaign, index) => (
            <article
              key={index}
              className={`flex min-h-[220px] flex-col justify-end rounded-2xl bg-gradient-to-br ${campaign.gradient} p-7 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="mb-auto text-4xl">{campaign.icon}</div>

              <h3 className="mt-5 text-xl font-bold">
                {campaign.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/90">
                {campaign.description}
              </p>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementCampaignTypes;