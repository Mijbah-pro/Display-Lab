"use client";

import Typewriter from "typewriter-effect";

import ClientLogoSlider from "@/components/client_logo_slider";
import { home_hero_logos } from "@/utils";
import CalandlyButton from "./calandlyButton";
import Reveal from "./utils/Reveal";

function Hero() {
  return (
    <section className="bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50 pt-16 md:pt-24 lg:pt-32">
      <div className="relative z-10 mx-auto max-w-375 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Reveal>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
                Powering Business <br />
                Growth Through Smart <br />
                <span className="block text-cyan-600">
                  <Typewriter
                    options={{
                      strings: [
                        "Display Lab CMS",
                        "Display Products",
                        "Display Rentals",
                        "Advertising Solutions",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl lg:mx-0">
                Manage, promote, and scale your business with an all-in-one
                platform built for digital signage, hardware solutions, event
                rentals, and advertising opportunities.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <CalandlyButton
                  text="Book A Demo"
                  basicStyle={true}
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
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  }
                />
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <Reveal>
            <div className="relative">
              <div
                className="relative">
                <div className=" rounded-2xl border border-gray-200 bg-white p-4  shadow-2xl relative z-10">
                  <video
                    className="aspect-video w-full rounded-xl object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                  >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* <div className="space-large"></div> */}

        <ClientLogoSlider
          autoPlay={true}
          touchMove={false}
          slideDatas={home_hero_logos}
        />
      </div>
    </section>
  );
}

export default Hero;