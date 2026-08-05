function CORE_FEATURES() {
  const core_features = [
    {
      svg_color: "bg-blue-50 text-blue-600",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield"
          aria-hidden="true"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      title: "Reliability & Support",
      description:
        "99.9% uptime with 24/7 customer support to keep your digital signage running smoothly.",
    },
    {
      svg_color: "bg-purple-50 text-purple-600",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-zap"
          aria-hidden="true"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
      ),
      title: "Flexibility",
      description:
        "Works with any screen and supports all content types. Adapt to your unique business needs.",
    },
    {
      svg_color: "bg-cyan-50 text-cyan-600",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-smile"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" x2="9.01" y1="9" y2="9"></line>
          <line x1="15" x2="15.01" y1="9" y2="9"></line>
        </svg>
      ),
      title: "Ease Of Use",
      description:
        "Intuitive interface that anyone can master in minutes. No technical expertise required.",
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {core_features.map((item, index) => (
              <div className="text-center group" key={index}>
                <div
                  className={`${item?.svg_color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  {item?.svg}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {item?.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CORE_FEATURES;
