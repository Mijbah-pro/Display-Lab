"use client";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

function NeedHelp() {
  return (
    <section className="bg-white">
      <div className="">
        {/* Banner Container */}
        <Reveal props={"w-full"} >
        <div className="relative overflow-hidden bg-gradient-to-br from-[#061c39] via-[#04152a] to-[#020b17] p-8 md:p-12 lg:py-14 flex flex-col lg:flex-row items-center justify-between min-h-[320px] lg:min-h-[280px] gap-8 shadow-xl border border-slate-800">
          
          {/* Radial Cyan Glow behind product image */}
          <div className="absolute right-[10%] bottom-0 w-[240px] h-[240px] rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none z-0" />
          
          {/* Faint City Skyline Background */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full h-[50%] text-sky-400/5 fill-current pointer-events-none z-0"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            <path d="M 0,200 L 0,140 L 15,140 L 15,120 L 30,120 L 30,160 L 40,160 L 40,90 L 60,90 L 60,70 L 65,70 L 65,90 L 75,90 L 75,150 L 85,150 L 85,100 L 105,100 L 105,50 L 108,50 L 108,100 L 120,100 L 120,170 L 130,170 L 130,130 L 155,130 L 155,80 L 170,50 L 185,80 L 185,140 L 195,140 L 195,110 L 220,110 L 220,60 L 225,40 L 230,60 L 245,60 L 245,150 L 255,150 L 255,100 L 275,100 L 275,160 L 285,160 L 285,120 L 305,120 L 305,80 L 310,60 L 315,80 L 325,80 L 325,170 L 340,170 L 340,135 L 365,135 L 365,95 L 380,95 L 380,150 L 400,150 L 400,200 Z" />
          </svg>

          {/* Left Content Column */}
          <div className="relative z-10 w-full lg:w-[48%] flex flex-col justify-center text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
              Need Help Choosing The Right Display?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg opacity-90">
              Our specialists can help you select the best solution for your business.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://displaylab.net/contact"
                target="_blank"
                className="bg-white text-[#051c3a] font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 hover:bg-slate-100 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm md:text-base shadow-md shadow-white/5"
              >
                <span>Set Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
            </div>
          </div>

          {/* Right Product Displays Column */}
          <div className="relative w-full lg:w-[50%] h-[180px] sm:h-[220px] lg:h-[260px] flex items-end justify-center lg:justify-end overflow-visible select-none mt-4 lg:mt-0">
            {/* Standing Kiosk Display */}
            <img
              className="absolute left-[5%] lg:left-[15%] bottom-0 h-[105%] w-auto object-contain z-30 drop-shadow-[0_12px_24px_rgba(0,180,216,0.25)] transition-transform duration-500 hover:scale-[1.03]"
              src="/images/products/Window_Display.png"
              alt="Floor Standing Kiosk"
            />
            {/* Wall Mount/Video Wall Display */}
            <img
              className="absolute left-[38%] lg:left-[45%] bottom-[12px] h-[75%] w-auto object-contain z-20 drop-shadow-[0_15px_30px_rgba(0,180,216,0.3)] transition-transform duration-500 hover:scale-[1.03]"
              src="/images/products/K_Style_Presentation.png"
              alt="Video Wall Display"
            />
            {/* Digital Menu Board Display */}
            <img
              className="absolute left-[70%] lg:left-[75%] bottom-[12px] h-[70%] w-auto object-contain z-10 drop-shadow-[0_10px_20px_rgba(0,180,216,0.2)] transition-transform duration-500 hover:scale-[1.03]"
              src="/images/products/GOBO_Projector.png"
              alt="Digital Menu Board"
            />
          </div>

        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default NeedHelp;
