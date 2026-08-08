"use client";
import Reveal from "@/components/utils/Reveal";
import Link from "next/link";

function MindMap() {
  return (
    <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <Reveal props={"mx-auto"} >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Integrated Display Ecosystem
            </h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              How our CMS software, commercial hardware, analytics, and remote tools connect to power your digital signage.
            </p>
          </div>
        </Reveal>

        <Reveal props={"mx-auto"} >
        {/* Map Container */}
        <div className="relative min-h-[500px] md:min-h-[560px]">

          {/* SVG Flow Connections (Visible on desktop/tablets) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
            viewBox="0 0 1000 560"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="flow-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0ea5e9" />
              </marker>
            </defs>

            {/* Connection 1: Top horizontal crossbar between CMS & Hardware */}
            <path
              d="M 380,95 H 620"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              markerStart="url(#flow-arrow)"
              markerEnd="url(#flow-arrow)"
            />

            {/* Connection 2: Drop down from top crossbar to Analytics Dashboard */}
            <path
              d="M 500,95 V 195"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              markerEnd="url(#flow-arrow)"
            />

            {/* Connection 3: Drop down from Analytics Dashboard to bottom crossbar */}
            <path
              d="M 500,345 V 455"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              markerEnd="url(#flow-arrow)"
            />

            {/* Connection 4: Bottom horizontal crossbar between Mobile & Remote */}
            <path
              d="M 380,455 H 620"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              markerStart="url(#flow-arrow)"
              markerEnd="url(#flow-arrow)"
            />

            {/* Connection 5: Right-side flow from Hardware down to Remote & Analytics */}
            <path
              d="M 760,150 V 270 H 620"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              markerEnd="url(#flow-arrow)"
            />
            <path
              d="M 760,270 V 400"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              markerEnd="url(#flow-arrow)"
            />
          </svg>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12 relative z-10">

            {/* 1. CMS Software (Top-Left) */}
            <div className="justify-self-center md:justify-self-end w-full max-w-[340px] lg:max-w-[360px] rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-row items-center gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01] transition-all duration-300 min-h-[150px]">
              {/* Desktop Monitor Mockup */}
              <div className="w-[35%] flex items-center justify-center shrink-0">
                <div className="relative w-20 h-13 bg-slate-800 rounded-md p-1 shadow-md border border-slate-700 flex flex-col justify-between">
                  {/* Screen Content */}
                  <div className="w-full h-[85%] bg-white rounded-[3px] overflow-hidden p-0.5 flex flex-col gap-0.5">
                    <div className="w-full h-1 bg-sky-600 rounded-sm"></div>
                    <div className="flex gap-0.5 h-full">
                      <div className="w-[30%] bg-slate-100 rounded-[1px] flex flex-col gap-0.5 p-0.5">
                        <div className="h-0.5 w-full bg-slate-300"></div>
                        <div className="h-0.5 w-[70%] bg-slate-300"></div>
                      </div>
                      <div className="w-[70%] bg-slate-50 rounded-[1px] p-0.5 grid grid-cols-2 gap-0.5">
                        <div className="h-2 bg-sky-100 rounded-sm"></div>
                        <div className="h-2 bg-blue-200 rounded-sm"></div>
                        <div className="h-2 bg-sky-100 rounded-sm col-span-2"></div>
                      </div>
                    </div>
                  </div>
                  {/* Base Stand */}
                  <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3 h-2.5 bg-slate-600 z-[-1]"></div>
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-6 h-1 bg-slate-700 z-[-1] rounded-sm"></div>
                </div>
              </div>
              {/* Text */}
              <div className="w-[65%] text-left">
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                  CMS Software
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                  Create, schedule and manage content with ease.
                </p>
              </div>
            </div>

            {/* Spacer for top center grid cell */}
            <div className="hidden md:block"></div>

            {/* 2. Display Hardware (Top-Right) */}
            <div className="justify-self-center md:justify-self-start w-full max-w-[340px] lg:max-w-[360px] rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-row items-center gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01] transition-all duration-300 min-h-[150px] md:col-start-3">
              {/* Kiosk Hardware mockup image */}
              <div className="w-[35%] flex items-center justify-center shrink-0">
                <img
                  className="w-10 h-16 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                  src="/images/products/Window_Display.png"
                  alt="Kiosk Hardware"
                />
              </div>
              {/* Text */}
              <div className="w-[65%] text-left">
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                  Display Hardware
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                  Wide range of commercial grade displays.
                </p>
              </div>
            </div>

            {/* 3. Analytics Dashboard (Center) */}
            <div className="justify-self-center md:col-start-2 md:row-start-2 w-full max-w-[340px] lg:max-w-[360px] rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-row items-center gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01] transition-all duration-300 min-h-[150px]">
              {/* Dashboard Chart Mockup */}
              <div className="w-[35%] flex items-center justify-center shrink-0">
                <div className="w-20 h-13 bg-[#f8fafc] border border-slate-200 rounded-lg p-1.5 flex flex-col gap-1 shadow-inner overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="w-5 h-0.5 bg-slate-300 rounded-sm"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="flex items-end gap-1 h-full pt-1">
                    <div className="w-full h-[25%] bg-sky-400/40 rounded-t-[1px]"></div>
                    <div className="w-full h-[55%] bg-cyan-500/60 rounded-t-[1px] animate-pulse"></div>
                    <div className="w-full h-[40%] bg-sky-400/40 rounded-t-[1px]"></div>
                    <div className="w-full h-[85%] bg-sky-600 rounded-t-[1px]"></div>
                    <div className="w-full h-[50%] bg-cyan-500/60 rounded-t-[1px]"></div>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="w-[65%] text-left">
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                  Analytics Dashboard
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                  Track performance and measure engagement in real-time.
                </p>
              </div>
            </div>

            {/* 4. Mobile App (Bottom-Left) */}
            <div className="justify-self-center md:justify-self-end w-full max-w-[340px] lg:max-w-[360px] rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-row items-center gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01] transition-all duration-300 min-h-[150px] md:col-start-1 md:row-start-3">
              {/* Smartphone Mockup */}
              <div className="w-[35%] flex items-center justify-center shrink-0">
                <div className="relative w-9 h-16 bg-slate-900 rounded-[10px] p-0.5 shadow-md border border-slate-700">
                  <div className="w-full h-full bg-white rounded-[8px] overflow-hidden flex flex-col">
                    {/* Status header */}
                    <div className="w-full h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 flex justify-between items-center px-0.5 text-[3px] text-white">
                      <span>9:41</span>
                    </div>
                    {/* Screen */}
                    <div className="p-0.5 flex-1 flex flex-col justify-between">
                      <div className="h-0.5 w-4 bg-slate-300 rounded-sm"></div>
                      <div className="h-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-sm flex items-center justify-between p-0.5">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="h-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-sm flex items-center justify-between p-0.5">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="w-[65%] text-left">
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                  Player App
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                  Manage screens and content on the go.
                </p>
              </div>
            </div>

            {/* Spacer for bottom center grid cell */}
            <div className="hidden md:block"></div>

            {/* 5. Remote Management (Bottom-Right) */}
            <div className="justify-self-center md:justify-self-start w-full max-w-[340px] lg:max-w-[360px] rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-row items-center gap-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-[1.01] transition-all duration-300 min-h-[150px] md:col-start-3 md:row-start-3">
              {/* Globe network SVG */}
              <div className="w-[35%] flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 100 100"
                  className="w-12 h-12 text-sky-600 fill-none stroke-current"
                  strokeWidth="3.5"
                >
                  <circle cx="50" cy="50" r="40" strokeWidth="4.5" />
                  <path d="M 10 50 A 40 15 0 0 0 90 50" />
                  <path d="M 10 50 A 40 15 0 0 1 90 50" />
                  <path d="M 50 10 A 15 40 0 0 0 50 90" />
                  <path d="M 50 10 A 15 40 0 0 1 50 90" />
                  <circle cx="70" cy="70" r="9" stroke="#0ea5e9" strokeWidth="3" fill="white" />
                  <path d="M 67 70 H 73 M 70 67 V 73" stroke="#0ea5e9" strokeWidth="3" />
                </svg>
              </div>
              {/* Text */}
              <div className="w-[65%] text-left">
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                  Remote Management
                </h3>
                <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                  Monitor, control and troubleshoot from anywhere.
                </p>
              </div>
            </div>

          </div>

        </div>
        </Reveal>

      </div>
    </section>
  );
}

export default MindMap;