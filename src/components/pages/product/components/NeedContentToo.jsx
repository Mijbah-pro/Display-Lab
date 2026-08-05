"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Palette, Video, Sparkles } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

// Robust image wrapper with automatic fallback if primary file is missing
function SafeImage({ src, fallbackSrc, alt, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      loading="lazy"
    />
  );
}

function NeedContentToo() {
  const services = [
    {
      id: 1,
      title: "Graphic Design",
      description: "Eye-catching designs that communicate your message effectively.",
      icon: Palette,
      primaryImage: "/images/cms/Flexible-Integrations.jpg",
      fallbackImage: "/images/cms/Flexible-Integrations.jpg",
    },
    {
      id: 2,
      title: "Video Production",
      description: "High quality videos that engage and leave a lasting impression.",
      icon: Video,
      primaryImage: "/images/cms/Reliable-Performance-&-Dedicated-Support.jpg",
      fallbackImage: "/images/cms/Reliable-Performance-&-Dedicated-Support.jpg",
    },
    {
      id: 3,
      title: "Motion Graphics",
      description: "Dynamic animations that bring your brand to life on screen.",
      icon: Sparkles,
      primaryImage: "/images/cms/Simple-&-User-Friendly.jpg",
      fallbackImage: "/images/cms/Simple-&-User-Friendly.jpg",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal props={"w-full"} >  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Context & Call to Action (spans 4 of 12 columns) */}
          <div className="lg:col-span-4 flex flex-col text-left lg:sticky lg:top-8">
            <span className="text-sky-600 font-bold uppercase tracking-wider text-xs md:text-sm">
              CONTENT SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4 leading-tight">
              We Make Your Content Too!
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Our creative team helps you deliver content that captivates and converts.
            </p>

            <Link
              href="https://displaylab.net/contact"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#105783] hover:bg-[#0c4467] text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:gap-3 cursor-pointer shadow-md shadow-sky-900/10 hover:scale-[1.02] active:scale-[0.98] w-fit"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Right Column: Service Cards Grid (spans 8 of 12 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-100 flex flex-col overflow-hidden shadow-md shadow-slate-200/40 hover:shadow-lg hover:border-sky-100/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Card Media Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 shrink-0">
                    <SafeImage
                      src={service.primaryImage}
                      fallbackSrc={service.fallbackImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content with Overlapping Badge */}
                  <div className="relative pt-8 px-6 pb-6 flex-1 flex flex-col text-left">
                    
                    {/* Overlapping circular icon badge */}
                    <div className="absolute top-0 -translate-y-1/2 left-6 w-12 h-12 rounded-full bg-[#105783] text-white flex items-center justify-center border-4 border-white shadow-md z-10 transition-colors duration-300 group-hover:bg-sky-600">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#105783] transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-slate-500 text-[13px] leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        </Reveal>
        {/* Main Section Grid: text left, cards right on desktop */}

      </div>
    </section>
  );
}

export default NeedContentToo;