import Reveal from "@/components/utils/Reveal";
import Link from "next/link";

function LeadingFeatures() {
  const leadingFeatureDataList = [
    {
      img: "/images/cms/Simple-&-User-Friendly.jpg",
      title: "Simple & User-Friendly",
      description:
        "Manage content easily with an intuitive, cloud-based platform.Access and update your screens anytime from desktop or mobile. Create and control digital signage without complexity.",
      linkText: "Explore Apps",
      link: "#",
    },
    {
      img: "/images/cms/Reliable-Performance-&-Dedicated-Support.jpg",
      title: "Reliable Performance & Dedicated Support",
      description:
        "Enjoy consistent uptime and dependable performance you can trust.Keep your screens running smoothly with expert support when you need it.Focus on your business while your digital signage works flawlessly.",
      linkText: "Try Now",
      link: "https:/youtube.com",
    },

    {
      img: "/images/cms/Flexible-Integrations.jpg",
      title: "Flexible Integrations",
      description:
        "Connect seamlessly with tools like Power BI, Instagram, and Google Sheets.Bring all your content together with powerful app integrations.Adapt your signage to fit your workflow and evolving business needs.",
      linkText: "Learn More",
      link: "#",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="h2_text">
            Essential Features to <br /> Power Your Digital Signage
            {/* <span className="text-cyan-600"> Leading Features</span> */}
          </h2>
        </div>
        <div className="space-y-20 md:space-y-32">
          {leadingFeatureDataList?.map((singleLeadingFeature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 == 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <Reveal>
              <div
                className={`relative ${index % 2 == 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                  <img
                    className="w-full h-full object-cover"
                    src={singleLeadingFeature?.img}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 to-purple-500/10 pointer-events-none"></div>
                </div>
              </div>
              </Reveal>
              <Reveal>
              <div
                className={`${index % 2 == 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <div className="">
                  <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-3">
                    {singleLeadingFeature?.subTitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {singleLeadingFeature?.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {singleLeadingFeature?.description}
                  </p>
                  <Link
                    className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg inline-flex items-center gap-2 group"
                    href={singleLeadingFeature?.link}
                    target="_blank"
                  >
                    {" "}
                    {singleLeadingFeature?.linkText}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
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

export default LeadingFeatures;
