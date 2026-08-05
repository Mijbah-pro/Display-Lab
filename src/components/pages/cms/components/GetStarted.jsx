import Reveal from "@/components/utils/Reveal";

function GetStarted() {
  const getStartedStap = [
    {
      cardNumber: "01",
      cardColor: "from-blue-500 to-cyan-500",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-monitor text-white"
          aria-hidden="true"
        >
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),
      title: "Connect Your Device",
      description:
        "Easily connect your screens, kiosks, or displays to the Display Lab system.Supports multiple devices for seamless multi-screen management.Ensure stable and secure connectivity for uninterrupted content delivery.",
    },
    {
      cardNumber: "02",
      cardColor: "from-purple-500 to-pink-500",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-settings text-white"
          aria-hidden="true"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: "Create & Upload Content",
      description:
        " Design engaging visuals and upload your content in just a few clicks.Support for images, videos, and dynamic media formats.Make your messaging more powerful with creative and flexible content tools.",
    },
    {
      cardNumber: "03",
      cardColor: "from-blue-500 to-purple-500",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-rocket text-white"
          aria-hidden="true"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
      ),
      title: "Publish to Your Screens",
      description:
        "Schedule and publish your content instantly across all connected displays.Control what appears on each screen with precision and ease.Deliver real-time updates to keep your audience informed and engaged.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal props={"w-full"}>
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-600 font-semibold text-lg mb-2">
            Fast & Easy Start
          </p>
          <h2 className="h2_text mb-4">Get Started with Dispaly Lab</h2>
          <p className="title_desc mx-auto">
            Begin your digital signage journey with powerful tools built for simplicity and impact.Access your dashboard and start managing content within minutes.Transform your communication with smart, scalable display solutions. 
          </p>
        </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {getStartedStap.map((singleStartedStap, index) => (
            <div className={`group relative `} key={index}>
              <Reveal props={"w-full"}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full relative overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${singleStartedStap?.cardColor} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <div className="relative text-center">
                  <div
                    className={`group-hover:opacity-70 opacity-0 transition-opacity absolute top-0 right-0 text-6xl font-bold bg-linear-to-br ${singleStartedStap?.cardColor} bg-clip-text text-transparent mb-6`}
                  >
                    {singleStartedStap?.cardNumber}
                  </div>
                  <div
                    className={`mx-auto w-16 h-16 bg-linear-to-br ${singleStartedStap?.cardColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    {singleStartedStap?.svg}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {singleStartedStap?.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {singleStartedStap?.description}
                  </p>
                </div>
              </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
