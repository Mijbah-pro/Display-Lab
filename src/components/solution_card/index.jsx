"use client";
import Reveal from "../utils/Reveal";
import SingleSolutionCard2 from "./SingleSolutionCard2";

function SolutionCard() {
  const card_Data = [
    {
      icon: "/images/explore-Display/Icon-01.png",
      title: "Works on Any Screen, Any Device",
      description:
        "Manage content from anywhere with a centralized digital signage CMS. Upload media, organize playlists, and control displays remotely.",
      hoverImage: "/images/Powerful-Tools/1.jpg",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-02.png",
      title: "Multi-Screen Management",
      description:
        "Control thousands of screens across multiple locations from one dashboard. Organize screens by groups, regions, or departments.",
      hoverImage: "/images/Powerful-Tools/2.jpg",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-03.png",
      title: "Smart Content Scheduling",
      description:
        "Schedule content to display at specific times, days, or locations. Automate campaigns and announcements with ease.",
      hoverImage: "/images/Powerful-Tools/3.jpg",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-04.png",
      title: "Easy Content Management",
      description:
        "Easily display content and publish updates with our simple, user-friendly CMS.Create engaging designs with drag-and-drop tools and customizable templates.",
      hoverImage: "/images/Powerful-Tools/4.jpg",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-05.png",
      title: "Pre-Made Templates to Use",
      description: "Select from ready-to-use templates.",
      hoverImage: "/images/Powerful-Tools/5.jpg",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-06.png",
      title: "User Roles & Access",
      description: "Manage multiple screens in one account.",
      hoverImage: "/images/Powerful-Tools/6.jpg",
      link_Text: "Learn more",
      link: "",
    },
  ];

  return (
    <>
      <div className="container_paddingTop container_paddingBtm bg-[#f5f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero_section pb-24">
            <div className="relative w-full md:w-3xl lg:w-5xl mx-auto">
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
                    <source src="/videos/Powerful_Tools_Section.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          {/* video Section end */}
          <Reveal props={"w-full"}>
            <h2 className="h2_text text-center">
              Powerful Tools to Run <br /> Your Digital Signage Network
            </h2>
          </Reveal>

          <div className="h-6"></div>
          <Reveal props={"w-full"}>
            <p className="title_desc">
              Everything you need to manage, schedule, and control digital signage displays from one CMS platform.Manage, schedule, and update content across multiple screens from a single platform.Designed for scalability, it adapts to networks of any size without complexity. Deliver engaging, real-time visual experiences that keep your audience informed and connected.
            </p>
          </Reveal>

          <div className="h-14"></div>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-6">
            {card_Data.map((card, index) => (
              <SingleSolutionCard2 key={index} card={card} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default SolutionCard;
