
"use client";

import Reveal from "@/components/utils/Reveal";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      color: "bg-blue-600",
      dotColor: "bg-blue-600",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "CHOOSE YOUR AUDIENCE",
      titleColor: "text-blue-600",
      description: "Select industries, venue types, locations, and campaign goals.",
    },
    {
      number: "02",
      color: "bg-sky-500",
      dotColor: "bg-sky-500",
      icon: (
        <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "SELECT PLACEMENTS",
      titleColor: "text-sky-500",
      description: "Choose window displays, kiosks, indoor screens, menu boards, or outdoor units.",
    },
    {
      number: "03",
      color: "bg-green-500",
      dotColor: "bg-green-500",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
        </svg>
      ),
      title: "UPLOAD YOUR CREATIVE",
      titleColor: "text-green-500",
      description: "Submit image or video ads, or request creative support from Display Lab.",
    },
    {
      number: "04",
      color: "bg-violet-500",
      dotColor: "bg-violet-500",
      icon: (
        <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      title: "GO LIVE AND TRACK",
      titleColor: "text-violet-500",
      description: "Approve the schedule, launch the campaign, and review delivery reports.",
    },
  ];

  const placements = [
    {
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
      iconBg: "bg-blue-600",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      title: "Restaurants & Cafés",
      description: "Menu boards, counter screens, and window displays.",
    },
    {
      image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&h=400&fit=crop",
      iconBg: "bg-sky-500",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: "Retail & Grocery",
      description: "In-aisle screens, kiosks, and promotional displays.",
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      iconBg: "bg-violet-500",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      title: "Stores & Shopping Centers",
      description: "High-traffic screens for maximum brand visibility.",
    },
  ];

  const stats = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      ),
      title: "High Visibility",
      description: "Get noticed where it matters most.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      title: "Targeted Reach",
      description: "Connect with the right audience.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>
      ),
      title: "Better Engagement",
      description: "Drive action and brand recall.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      ),
      title: "Measurable Results",
      description: "Track performance with real insights.",
    },
  ];

  return (
    <div className="bg-white">
      {/* ===== SECTION 1: HOW IT WORKS ===== */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal props={"w-full"} >
          {/* Section Label */}
          <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            HOW IT WORKS
          </p>
          </Reveal>
          <Reveal props={"w-full"} >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-16">
            Launch your campaign
            <br />
            in four <span className="text-sky-400">simple steps.</span>
          </h2>
          </Reveal>
          <Reveal props={"w-full"} >
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 pt-10 relative">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${step.color} text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`${step.titleColor} text-xs font-bold tracking-wider uppercase text-center mb-3`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Dotted Connector (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 rounded-full ${step.dotColor} opacity-60`} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SECTION 2: ADVERTISING PLACEMENTS ===== */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Reveal props={"w-full"} >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-slate-300" />
            <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase">
              ADVERTISING PLACEMENTS
            </p>
            <div className="h-px w-12 bg-slate-300" />
          </div>
          </Reveal>

          <Reveal props={"w-full"} >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight text-center mb-4">
            Reach customers across
            <br />
            <span className="text-sky-400">high-visibility</span> digital touchpoints.
          </h2>
          </Reveal>

          <Reveal props={"w-full"} >

          {/* Subtitle */}
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">
            Use a mix of screen formats to support awareness, promotion, engagement, and conversion.
          </p>
          </Reveal>
          <Reveal props={"w-full"} >
          {/* Placement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placements.map((placement, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-lg bg-white">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={placement.image}
                    alt={placement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${placement.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {placement.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{placement.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{placement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>
      
      {/* ===== SECTION 3: STATS BAR ===== */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
            <Reveal props={"w-full"} >
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                    {stat.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">{stat.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;