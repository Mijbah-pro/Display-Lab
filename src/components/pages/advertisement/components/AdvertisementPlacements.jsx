import Reveal from "@/components/utils/Reveal";

const AdvertisementPlacements = () => {
  const placements = [
    {
      title: "Restaurant Screens",
      description:
        "Advertise on menu boards, self-ordering kiosks, waiting areas, and counter displays.",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Grocery Store Screens",
      description:
        "Promote brands, products, seasonal offers, and vendor campaigns near the buying decision.",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Retail Displays",
      description:
        "Reach shoppers through storefront windows, promotional kiosks, aisles, and checkout zones.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Office & Lobby Screens",
      description:
        "Promote local services, business solutions, events, and community partnerships.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Event Displays",
      description:
        "Run sponsor messages, branded content, promotions, schedules, and interactive campaigns.",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Outdoor Displays",
      description:
        "Build awareness near entrances, parking areas, sidewalks, pickup zones, and street traffic.",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section id="placements" className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-600">
            ADVERTISING PLACEMENTS
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Reach customers across high-visibility digital touchpoints.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Use a mix of screen formats to support awareness, promotion,
            engagement, and conversion.
          </p>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Placement Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {placements.map((placement, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={placement.image}
                  alt={placement.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600">
                  {placement.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {placement.description}
                </p>

                <div className="mt-6 h-1 w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24" />
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementPlacements;