import Reveal from "@/components/utils/Reveal";
import Link from "next/link";

export default function PricingComparison({ plans, billing, symbols, rates, currency, industry = "all" }) {
  const convertPrice = (price) => {
    return (price * rates[currency]).toFixed(2);
  };
  
  const PlansSlice = plans.slice(1);

  const getRecommendedPlan = () => {
    switch (industry) {
      case "retail": return "Premium";
      case "restaurants": return "Standard";
      case "corporate": return "Enterprise";
      case "healthcare": return "Premium";
      case "education": return "Standard";
      default: return "Premium";
    }
  };

  const recommendedPlanName = getRecommendedPlan();

  const isFeatureRelevant = (featureName) => {
    switch (industry) {
      case "retail":
        return ["Playlist Management", "Conditional Playback", "Templates, Format and Orientation"].includes(featureName);
      case "restaurants":
        return ["Scheduling", "Advanced Scheduling", "Templates, Format and Orientation"].includes(featureName);
      case "corporate":
        return ["API & Secure Automation", "Multi-User Collaboration", "Real-time Updates"].includes(featureName);
      case "healthcare":
        return ["Real-time Updates", "Scheduling", "Advanced Scheduling"].includes(featureName);
      case "education":
        return ["Templates, Format and Orientation", "Scheduling", "Playlist Management"].includes(featureName);
      default:
        return false;
    }
  };
    
  const featureDetails = [
    {
      feature_section_title: "Content Automation and Integration",
      features: [
        {
          name: "Display Device",
          cardAllow: [true, true, true],
        },
        {
          name: "Asset Storage",
          cardAllow: [true, true, true],
        },
        {
          name: "Playlists",
          cardAllow: [true, true, true],
        },
        {
          name: "Templates",
          cardAllow: [false, true, true],
        },
        {
          name: "Canvas Template Create",
          cardAllow: [false, true, true],
        },
        {
          name: "Works Offline",
          cardAllow: [true, true, true],
        }
      ]
    },
    {
      feature_section_title: "Campaign Management & Advanced Playback",
      features: [
        {
          name: "4k Resolution Support",
          cardAllow: [true, true, true],
        },
        {
          name: "Support All Formats",
          cardAllow: [true, true, true],
        },
        {
          name: "Only Single User",
          cardAllow: [false, true, true],
        },
        {
          name: "Custom User Role",
          cardAllow: [false, false, true],
        },
        {
          name: "Drag And Drop",
          cardAllow: [true, false, true],
        },
      ]
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal props={"w-full"} >
        {/* Sticky Pricing Header */}
        <div className="sticky top-10 z-20 bg-gray-50/95 backdrop-blur-sm pb-6">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
            Compare Features
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-end">
            <div className="hidden md:flex"></div>
            {PlansSlice.map((plan, i) => {
              const basePrice = billing === "monthly" ? plan.monthly : plan.annual;
              const isRecommended = plan.name === recommendedPlanName;
              
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-4 text-center border transition-all duration-300 ${
                    isRecommended
                      ? "bg-sky-50 border-[#3095b5] shadow-md ring-2 ring-[#3095b5]/20 scale-[1.01]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <h3 className="font-bold text-gray-800">{plan.name}</h3>
                  <p className="text-lg font-extrabold mt-1 text-gray-900">
                    {symbols}
                    {convertPrice(basePrice)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {billing === "monthly" ? "/month" : "/year"}
                  </p>

                  <Link href={"https://displaylab.net/signup"} target="_blank"
                    className={`block mt-3 w-full py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isRecommended
                        ? "bg-[#005582] text-white hover:bg-[#004469]"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    Try for Free
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        </Reveal>

        <Reveal props={"w-full"} >
        {/* Table */}
        {featureDetails.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mt-6 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200/60">
            {/* Section Header */}
            <div className="px-6 py-4 border-b text-lg md:text-xl text-white font-bold flex justify-between bg-[#3095b5]">
              <span>{section.feature_section_title}</span>
            </div>

            {/* Features */}
            {section.features.map((feature, featureIdx) => {
              const isRelevant = isFeatureRelevant(feature.name);

              return (
                <div
                  key={featureIdx}
                  className={`grid grid-cols-3 md:grid-cols-4 border-b last:border-none items-center transition-all duration-200 ${
                    isRelevant ? "bg-amber-50/40 hover:bg-amber-50/60" : "hover:bg-gray-50"
                  }`}
                >
                  {/* Feature Name */}
                  <div className="px-6 py-4 text-black md:text-gray-600 col-span-full md:col-span-1 md:bg-transparent font-semibold bg-gray-100/80 md:bg-transparent flex flex-wrap items-center gap-2">
                    <span>{feature.name}</span>
                    {isRelevant && (
                      <span className="text-[9px] bg-amber-100 text-amber-800 font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap">
                        Key Feature
                      </span>
                    )}
                  </div>

                  {/* Plan Columns */}
                  {feature.cardAllow.map((value, idx) => {
                    const isRecommendedCol = PlansSlice[idx]?.name === recommendedPlanName;
                    
                    return (
                      <div
                        key={idx}
                        className={`${
                          isRecommendedCol ? "bg-sky-50/50 text-[#005582] font-bold" : "text-gray-500"
                        } flex items-center justify-center py-4`}
                      >
                        {value ? (
                          <span className={`text-green-600 text-lg font-bold`}>✓</span>
                        ) : (
                          <span className="text-red-500 font-bold">✗</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
        </Reveal>

      </div>
    </div>
  );
}