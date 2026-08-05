"use client";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

function ReadyToUpgrade() {
  return (
    <Reveal props={"w-full"} >
    <section className="bg-white">
      <div className="">
        {/* Banner Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#061c39] via-[#04152a] to-[#020b17] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between min-h-[340px] lg:min-h-[280px] gap-8 shadow-xl border border-slate-800">
          
          {/* Radial Cyan Glow behind product image */}
          <div className="absolute right-[10%] bottom-0 w-[240px] h-[240px] rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none z-0" />
          
          {/* Detailed Night City Skyline with Glowing Windows */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-15">
            {/* Skyline layer 1 */}
            <svg
              className="absolute bottom-0 right-0 w-[85%] h-[75%] text-blue-900/30 fill-current"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <path d="M 0,200 L 0,160 L 20,160 L 20,130 L 40,130 L 40,170 L 50,170 L 50,110 L 70,110 L 70,80 L 80,80 L 80,110 L 90,110 L 90,160 L 100,160 L 100,120 L 120,120 L 120,70 L 130,50 L 140,70 L 140,120 L 150,120 L 150,140 L 170,140 L 170,90 L 190,60 L 210,90 L 210,150 L 230,150 L 230,120 L 250,120 L 250,80 L 260,80 L 260,160 L 280,160 L 280,130 L 300,130 L 300,90 L 310,70 L 320,90 L 330,90 L 330,170 L 350,170 L 350,140 L 380,140 L 380,200 Z" />
            </svg>
            {/* Skyline layer 2 */}
            <svg
              className="absolute bottom-0 right-0 w-[75%] h-[65%] text-slate-900/50 fill-current"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <path d="M 0,200 L 0,170 L 15,170 L 15,140 L 30,140 L 30,180 L 45,180 L 45,120 L 60,120 L 60,95 L 75,95 L 75,170 L 90,170 L 90,130 L 110,130 L 110,80 L 115,80 L 115,130 L 130,130 L 130,180 L 145,180 L 145,145 L 165,145 L 165,100 L 180,75 L 195,100 L 195,150 L 210,150 L 210,130 L 230,130 L 230,85 L 245,85 L 245,160 L 260,160 L 260,140 L 280,140 L 280,105 L 295,85 L 310,105 L 320,105 L 320,175 L 340,175 L 340,150 L 370,150 L 370,200 Z" />
            </svg>
            {/* Window Light Dots */}
            <div className="absolute bottom-[22%] right-[8%] w-[110px] h-[40px] grid grid-cols-5 gap-2 opacity-60">
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full animate-pulse" />
              <span className="w-[3px] h-[3px] bg-cyan-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="w-[3px] h-[3px] bg-cyan-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-white rounded-full" />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="w-[3px] h-[3px] bg-cyan-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full" />
            </div>
            <div className="absolute bottom-[38%] right-[22%] w-[90px] h-[30px] grid grid-cols-4 gap-2 opacity-50">
              <span className="w-[3px] h-[3px] bg-white rounded-full animate-pulse" />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-cyan-400/80 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
              <span className="w-[3px] h-[3px] bg-white rounded-full" />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
              <span className="w-[3px] h-[3px] bg-yellow-400/80 rounded-full" />
              <span className="w-[3px] h-[3px] bg-cyan-400/80 rounded-full" />
            </div>
          </div>

          {/* Left Content Column */}
          <div className="relative z-10 w-full lg:w-[48%] flex flex-col justify-center text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready To Upgrade Your Business Display?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg opacity-90">
              Get expert advice and the perfect display solution tailored to your needs.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://displaylab.net/contact"
                target="_blank"
                className="border border-white/30 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-white/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-xs md:text-sm"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://displaylab.net/contact"
                target="_blank"
                className="border border-white/30 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-white/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-xs md:text-sm"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://displaylab.net/contact"
                target="_blank"
                className="border border-white/30 text-white font-semibold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-white/10 hover:border-white/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-xs md:text-sm"
              >
                <span>Download Product Catalog</span>
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Product Displays Column */}
          <div className="relative w-full lg:w-[50%] h-[180px] sm:h-[220px] lg:h-[260px] flex items-end justify-center lg:justify-end overflow-visible select-none mt-4 lg:mt-0">
            {/* Wall Mount/Video Wall Display */}
            <img
              className="absolute left-[5%] lg:left-[15%] bottom-[12px] h-[78%] w-auto object-contain z-10 drop-shadow-[0_15px_30px_rgba(0,180,216,0.3)] transition-transform duration-500 hover:scale-[1.03]"
              src="/images/products/product-4.png"
              alt="Video Wall Display"
            />
            {/* Standing Kiosk Display */}
            <img
              className="absolute left-[62%] lg:left-[68%] bottom-0 h-[105%] w-auto object-contain z-20 drop-shadow-[0_12px_24px_rgba(0,180,216,0.25)] transition-transform duration-500 hover:scale-[1.03]"
              src="/images/products/product-1.png"
              alt="Floor Standing Kiosk"
            />
          </div>

        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default ReadyToUpgrade;
