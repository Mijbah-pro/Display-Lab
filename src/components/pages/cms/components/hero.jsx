"use client";

import CalandlyButton from "@/components/calandlyButton";
import Reveal from "@/components/utils/Reveal";
import Video from "@/components/Video";
import { motion } from "motion/react";
import Link from "next/link";
import Script from "next/script";
import Typewriter from "typewriter-effect";

function CMS_HERO() {
  return (
    <>
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* .......................................... */}
      <section className="relative bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
            <div className="relative lg:mr-8">
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-white rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 relative z-10"
                >
                 
                <Video src="/videos/Powerful_Tools_Section.mp4" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [5, 15, 5],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-2 w-32 md:w-40"
                >
                  <div className="bg-linear-to-br from-[#3095b5] to-[#105783] rounded aspect-video"></div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [5, 15, 5],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-8 -right-8 bg-white rounded-lg shadow-xl p-2 w-32 md:w-40"
                >
                  <div className="bg-linear-to-br from-[#105783] to-[#3095b5] rounded aspect-video"></div>
                </motion.div>
              </div>
            </div>
            </Reveal>
            <Reveal>
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Digital Signage
                </span>
              </div>
              <h1 className="h1_text">
                Powerful CMS for Dynamic Digital
                <span className="text-cyan-600 block">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Signage Experiences", "CMS Experience", "Powerful CMS"],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
               Create, manage, and display content across screens with an easy digital signage solution. Control messaging with a cloud-based CMS and deliver real-time updates to keep audiences engaged. Simplify operations with a scalable, intuitive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <CalandlyButton
                  text={"Book A Demo"}
                  classNamestyle={
                    "w-xs sm:w-fit bg-cyan-600 text-white px-8 py-4 rounded font-semibold text-base hover:bg-cyan-700 transition-all duration-300 ease-linear shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  }
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                      aria-hidden="true"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  }
                />
                <Link
                  href={"https://displaylab.net/signup"}
                  target="_blank"
                  className="w-xs sm:w-fit border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded font-semibold text-base hover:bg-cyan-50 transition-all duration-300 ease-linear cursor-pointer"
                >
                  Try For Free
                </Link>
              </div>
            </div>
            </Reveal>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default CMS_HERO;
