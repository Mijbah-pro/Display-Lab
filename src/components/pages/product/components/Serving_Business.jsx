"use client";
import React from "react";
import { Globe, Flag, Headphones, Users } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/utils/Reveal";

function ServingBusiness() {
  const stats = [
    {
      id: 1,
      icon: Globe,
      value: "50,000+",
      label: "Screens Managed",
    },
    {
      id: 2,
      icon: Flag,
      value: "100+",
      label: "Countries",
    },
    {
      id: 3,
      icon: Headphones,
      value: "24/7",
      label: "Support",
    },
    {
      id: 4,
      icon: Users,
      value: "10K+",
      label: "Happy Customers",
    },
  ];

  const pins = [
    { id: 1, top: "28%", left: "22%", label: "North America" },
    { id: 2, top: "68%", left: "32%", label: "South America" },
    { id: 3, top: "25%", left: "48%", label: "Europe" },
    { id: 4, top: "45%", left: "54%", label: "Middle East & Africa" },
    { id: 5, top: "35%", left: "76%", label: "Asia Pacific" },
  ];

  return (
    <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Background soft grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal props={"w-full"} >  
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs md:text-sm">
            GLOBAL REACH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Serving Businesses Worldwide
          </h2>
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* World Map Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[360px] md:h-[460px] mb-12 sm:mb-16 border border-slate-100 bg-white/40 rounded-3xl p-4 md:p-6 shadow-sm backdrop-blur-xs select-none">
          <Image className="w-full h-full" src={'/images/products/businesses_worldwide.png'} alt="Worldwide Businesses" width={1000} height={1000} />
        </div>
        </Reveal>
        <Reveal props={"w-full"} >
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center shadow-md shadow-slate-200/40 hover:shadow-lg hover:border-sky-100 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mb-5 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Stat Value */}
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
        </Reveal>

      </div>
    </section>
  );
}

export default ServingBusiness;