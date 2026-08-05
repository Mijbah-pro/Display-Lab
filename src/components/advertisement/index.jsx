import { adsCardDatas } from "@/utils";
import Reveal from "../utils/Reveal";
import AdsCard from "./adsCard";
import Link from "next/link";

function Advertisement_Solutions() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="hero_section grid lg:grid-cols-2 gap-12 items-center pb-24">
            <Reveal props={"w-full"}>
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
            </Reveal>
            <div className="text-center lg:text-left">
              <Reveal props={"w-full"}>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Smart Digital <span className="highlight">Advertising</span> Solutions
                </h1>
              </Reveal>
              <Reveal props={"w-full"}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Display Lab enables businesses to deliver impactful advertising through dynamic digital signage. Showcase targeted content across multiple screens with real-time updates and centralized control. Easily manage campaigns, boost engagement, and enhance brand visibility.
                </p>
              </Reveal>
              <Reveal props={"w-full"}>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href={"/advertisement"}
                    className="w-xs sm:w-fit bg-cyan-600 text-white px-8 py-4 rounded font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Learn More
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
          {/* Heading */}
          <Reveal props={"w-full"}>
            <h2 className="text-center h2_text">
              Useing Real World <br /> Advertisement Solutions
            </h2>
          </Reveal>
          <div className="h-6"></div>
          <Reveal props={"w-full"}>
            <p className="title_desc mb-8">
              Turn screens into revenue-generating advertising platforms.Deliver dynamic and eye-catching content that captures audience attention instantly. Manage and update campaigns in real time across all connected displays. Maximize brand visibility with targeted and impactful digital advertising experiences.
            </p>
          </Reveal>
          <div className="h-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsCardDatas.map((item, index) => (
              <AdsCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement_Solutions;
