import Reveal from "@/components/utils/Reveal";

const AdvertisementTemplate = () => {
  const templates = [
    {
      title: "Restaurant",
      description: "Menus, offers, loyalty, and events",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Grocery",
      description: "Vendor ads, weekly deals, and product launches",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Retail",
      description: "New arrivals, seasonal campaigns, and QR offers",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Corporate",
      description: "Business services, events, and local partnerships",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Education",
      description: "Programs, events, enrollment, and community messages",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Healthcare",
      description: "Services, wellness, appointments, and public campaigns",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Events",
      description: "Sponsors, schedules, promotions, and activations",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Government",
      description: "Public information, services, and civic campaigns",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-5">
        <Reveal props={"w-full"} >

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">
            CREATIVE TEMPLATE LIBRARY
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Launch faster with vibrant industry-ready templates.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Use campaign layouts designed for different audiences, venues, and
            screen formats.
          </p>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Template Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {templates.map((template, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={template.image}
                alt={template.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {template.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {template.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AdvertisementTemplate;