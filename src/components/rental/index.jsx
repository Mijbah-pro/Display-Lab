import Link from "next/link";

function RentalProducts() {
  return (
    <>
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="hero_section grid lg:grid-cols-2 gap-12 items-center pb-24">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Rental Products
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Flexible digital signage rental solutions designed for events, promotions, and temporary installations. Deploy high-quality digital displays without the cost of purchasing hardware.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
            </div>
            <div className="relative">
              <div className="relative">
                <div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-white rounded-2xl shadow-2xl p-4 relative z-10"
                >
                  <video
                    className="rounded-xl aspect-video w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    preload="none"
                  >
                    <source src="https://cdn.pickcel.com/videos/main/hero-video.hMW0RsrCv5Su.webm" />
                  </video>
                </div>
              </div>
            </div>
            
          </div>
          {/* Heading */}
          <h2 className="h2_text text-center mb-6">
            Display Lab Rental Products
          </h2>

          <p className="title_desc mb-14">
            Flexible digital signage rental solutions designed for events,
            promotions, and temporary installations. Deploy high-quality digital
            displays without the cost of purchasing hardware.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Grid */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Outdoor Digital Kiosk */}
              <Link
                href="/"
                className="group bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              >
                <img
                  src="/images/lcd-led.png"
                  alt="Outdoor Digital Kiosk"
                  className="w-full h-40 object-contain"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Outdoor Digital Kiosk
                </h3>
                <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100">
                  High-brightness outdoor digital kiosks designed for maximum
                  visibility in public spaces.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Perfect for fuel stations, roadside advertising, and outdoor
                  promotions.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Weather-resistant displays ensure reliable performance in all
                  conditions.
                </p>
              </Link>

              {/* Indoor Digital Totem */}
              <Link
                href="/"
                className="group bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              >
                <img
                  src="/images/movable-displays.png"
                  alt="Indoor Digital Totem"
                  className="w-full h-40 object-contain"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Indoor Digital Totem
                </h3>
                <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100">
                  Elegant indoor digital totems ideal for malls, retail stores,
                  and exhibitions.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Showcase advertisements, announcements, and promotional
                  content in high-traffic areas.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Easy to deploy and manage for short-term campaigns and events.
                </p>
              </Link>

              {/* Promotional Display Screens */}
              <Link
                href="/"
                className="group bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              >
                <img
                  src="/images/terminals.png"
                  alt="Promotional Display Screens"
                  className="w-full h-40 object-contain"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Promotional Display Screens
                </h3>
                <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100">
                  Portable promotional displays designed for product launches,
                  marketing campaigns, and brand promotions.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Deliver vibrant digital advertisements that attract attention
                  and increase engagement.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Perfect for retail stores, showrooms, and promotional booths.
                </p>
              </Link>

              {/* Interactive Digital Display */}
              <Link
                href="/"
                className="group bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
              >
                <img
                  src="/images/outdoor.png"
                  alt="Interactive Digital Display"
                  className="w-full h-40 object-contain"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Interactive Digital Display
                </h3>
                <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100">
                  Interactive digital signage solutions that allow users to
                  engage directly with content.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Ideal for customer engagement, product exploration, and
                  self-service experiences.
                </p>
                <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100">
                  Enhance brand interaction while delivering dynamic advertising
                  content.
                </p>
              </Link>
            </div>

            {/* Tall Right Card */}
            <Link
              href="/"
              className="group bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <img
                src="/images/indoor-display.png"
                alt="Indoor Digital Display"
                className="w-full h-[380px] object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold">
                Indoor Digital Display
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100">
                Premium indoor digital signage designed for malls, offices, and
                showrooms. Perfect for showcasing advertisements, announcements,
                and branded content in high-traffic indoor environments.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RentalProducts;
