import Reveal from "@/components/utils/Reveal";
import {
  CalendarClock,
  Cloud,
  Monitor,
  Pencil,
  Puzzle,
  Shield,
} from "lucide-react";
function WHY_SECTION2() {
  const featureSections = [
    {
      icon: <Puzzle className="w-12 h-12 text-cyan-600" />,
      title: "Use Your Own Content",
      description: "Upload and display images, videos, and PDFs with ease.",
    },
    {
      icon: <Pencil className="w-12 h-12 text-cyan-600" />,
      title: "Easy Content Creation",
      description: "Design and publish content with simple templates.",
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-600" />,
      title: "Apps & Integrations",
      description: "Connect with social media and popular apps.",
    },
    {
      icon: <Monitor className="w-12 h-12 text-cyan-600" />,
      title: "Multi-Screen Management",
      description: "Control and sync displays across multiple locations.",
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-600" />,
      title: "Roles & Permissions",
      description: "Manage team access levels and permissions.",
    },
    {
      icon: <CalendarClock className="w-12 h-12 text-cyan-600" />,
      title: "Playlists & Scheduling",
      description: "Automate content with playlists and schedules.",
    },
  ];
  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal props={"w-full"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featureSections?.map((singleFeature, index) => (
              <div key={index} className="flex flex-col items-center px-6 py-8 bg-gray-50 rounded-lg shadow-sm text-center">
                <div className="mb-4">
                  {/* Icon */}
                  {singleFeature?.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {singleFeature?.title}
                </h3>
                <p className="text-sm font-semibold text-gray-700">
                  {singleFeature?.description}
                </p>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default WHY_SECTION2;
