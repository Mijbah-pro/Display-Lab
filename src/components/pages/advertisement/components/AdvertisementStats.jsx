const AdvertisementStats = () => {
  const stats = [
    {
      value: "24/7",
      label: "digital campaign visibility",
    },
    {
      value: "One portal",
      label: "for creative, scheduling, and reporting",
    },
    {
      value: "Flexible targeting",
      label: "by location, audience, and time",
    },
    {
      value: "Scalable network",
      label: "from one venue to multiple markets",
    },
  ];

  return (
    <section className="bg-[#0B2545] text-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="py-7 lg:px-7 first:lg:pl-0"
            >
              <h3 className="text-3xl font-bold leading-tight">
                {item.value}
              </h3>

              <p className="mt-2 text-sm text-sky-100">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementStats;