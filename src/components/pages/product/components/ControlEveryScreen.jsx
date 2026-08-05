"use client";
import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

function ControlEveryScreen() {
  const checklist = [
    "Schedule content.",
    "Manage displays.",
    "Monitor performance.",
    "Anywhere.",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <Reveal props={"w-full"} >
          {/* Left Column: Text & Checklist */}
          <div className="flex flex-col text-left">
            <span className="text-sky-600 font-bold uppercase tracking-wider text-xs md:text-sm">
              DISPLAY LAb CMS 
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6 leading-tight">
              Control Every Screen <br /> From One Dashboard
            </h2>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Circular check mark container */}
                  <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-sky-600 stroke-[3.5]" />
                  </div>
                  <span className="text-slate-700 font-semibold text-base md:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://displaylab.net/cms"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#105783] hover:bg-[#0c4467] text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:gap-3 cursor-pointer shadow-md shadow-sky-900/10 hover:scale-[1.02] active:scale-[0.98] w-fit"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </Link>
          </div>
          </Reveal>
          <Reveal props={"w-full"} >
          {/* Right Column: Premium CSS Laptop Mockup */}
          <div className="relative flex flex-col items-center justify-center select-none w-full max-w-2xl mx-auto lg:mx-0">
            {/* Screen shadow & reflection overlay */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-400/5 to-purple-500/5 blur-3xl pointer-events-none" />

            {/* Laptop Lid/Screen */}
            <div className="relative w-[90%] sm:w-[85%] lg:w-[95%] aspect-[16/10] rounded-t-3xl border-8 border-slate-900 bg-slate-900 shadow-2xl p-1 md:p-1.5 overflow-hidden flex flex-col justify-between z-10">
              
              {/* Webcam dot */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 flex items-center justify-center z-30">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-900" />
              </div>

              {/* Display Screenshot */}
              <div className="w-full h-full bg-[#f8fafc] rounded-md overflow-hidden relative group">
                <img
                  className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700"
                  src="/images/cms/displayLab CMS.png"
                  alt="Display Lab CMS Dashboard Mockup"
                  loading="lazy"
                />
              </div>

            </div>

            {/* Laptop Base */}
            <div className="relative w-full h-2.5 sm:h-3.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-b-xl border-t border-slate-200 flex items-center justify-center z-20">
              {/* Lid opening notch/recess */}
              <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-slate-600 rounded-b-md" />
            </div>

            {/* Laptop Bottom Lip / Shadow */}
            <div className="relative w-[96%] h-1 sm:h-1.5 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-md z-15" />

            {/* Ambient drop shadow under laptop */}
            <div className="absolute left-[4%] right-[4%] bottom-[-16px] h-4 bg-slate-950/25 blur-lg rounded-full z-0" />
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default ControlEveryScreen;