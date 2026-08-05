"use client";
import Reveal from "@/components/utils/Reveal";
import Image from "next/image";
import Link from "next/link";

function Rental_Hero() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50">
      {/* Background Decorative Grid Mask */}
      <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pb-5 pt-5 sm:pb-5 sm:pt-5 lg:pb-10 lg:pt-10">
          <div className="relative ">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-8">
              <Reveal props={"w-full"} >
              {/* Left Content Column */}
              <div className="max-w-2xl text-left flex flex-col items-center sm:items-start">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Display Lab Rental Solutions
                </h1>
                <p className="text-lg text-center sm:text-left md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Display Lab's rental division, offering premium digital display rentals for events, retail, corporate spaces, and experiential marketing — delivered, installed, and managed by experts.
                </p>
                <div className="mt-5 flex items-center gap-x-6">
                  <Link
                    className="w-xs sm:w-fit bg-cyan-600 text-white px-8 py-4 rounded font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer "
                    href={"https://displaylab.net/signup"}
                    target="_blank"
                  >
                    Try For Free
                  </Link>

                </div>
              </div>
              </Reveal>
              <Reveal props={"w-full"} >
              {/* Right Image Tiles Column */}
              <div className="relative w-full max-w-xl lg:max-w-none mx-auto lg:mt-0">
                {/* Staggered grid configuration mimicking the mockup display */}
                <div className="flex items-center gap-6 lg:gap-8 justify-center lg:justify-end">

                  {/* Column 1 (Left-most tile) */}
                  <div className="hidden sm:flex flex-col gap-6 lg:gap-8 pt-32">
                    <div className="relative h-64 w-44 overflow-hidden rounded-2xl shadow-xl border border-slate-100 transition duration-300 hover:scale-105">
                      <Image
                        src="/images/advertisement/Hospital.jpg"
                        alt="Team workshop"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Column 2 (Middle stacked tiles) */}
                  <div className="flex flex-col gap-6 lg:gap-8">
                    <div className="relative h-64 w-44 overflow-hidden rounded-2xl shadow-xl border border-slate-100 transition duration-300 hover:scale-105">
                      <Image
                        src="/images/advertisement/Restaurant.jpg"
                        alt="Team workshop"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative h-64 w-44 overflow-hidden rounded-2xl shadow-xl border border-slate-100 transition duration-300 hover:scale-105">
                      <Image
                        src="/images/advertisement/Corporate_Office.jpg"
                        alt="Corporate_Office"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Column 3 (Right-most stacked tiles) */}
                  <div className="flex flex-col gap-6 lg:gap-8 pb-16">
                    <div className="relative h-64 w-44 overflow-hidden rounded-2xl shadow-xl border border-slate-100 transition duration-300 hover:scale-105">
                      <Image
                        src="/images/advertisement/Groceryshoop.jpg"
                        alt="Groceryshoop"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative h-64 w-44 overflow-hidden rounded-2xl shadow-xl border border-slate-100 transition duration-300 hover:scale-105">
                      <Image
                        src="/images/advertisement/Bank.jpg"
                        alt="Bank"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
              </Reveal>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rental_Hero;