"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

function ProductLines({ setSelectedCategory }) {
  const handleClick = (e, categoryId) => {
    if (setSelectedCategory) {
      e.preventDefault();
      setSelectedCategory(categoryId);
      const element = document.getElementById("products-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <Reveal props={"w-full"}>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Product Lines
          </h2>
        </div>
        </Reveal>

        {/* Product Cards Grid */}
        <Reveal props={"w-full"} >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_LINES.map((line) => (
            <div
              key={line.id}
              className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#051c3a] via-[#04152a] to-[#020b17] p-6 md:p-8 flex flex-row items-center justify-between text-white border border-slate-800 shadow-xl group hover:shadow-2xl hover:shadow-cyan-950/20 hover:scale-[1.01] transition-all duration-300 min-h-[220px] md:min-h-[260px]"
            >
              {/* Radial Cyan Glow behind product image */}
              <div className="absolute right-0 bottom-0 w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-cyan-500/10 blur-[40px] pointer-events-none z-0" />
              
              {/* Faint City Skyline Background */}
              <svg
                className="absolute bottom-0 left-0 right-0 w-full h-[45%] text-sky-400/5 fill-current pointer-events-none z-0"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <path d="M 0,200 L 0,140 L 15,140 L 15,120 L 30,120 L 30,160 L 40,160 L 40,90 L 60,90 L 60,70 L 65,70 L 65,90 L 75,90 L 75,150 L 85,150 L 85,100 L 105,100 L 105,50 L 108,50 L 108,100 L 120,100 L 120,170 L 130,170 L 130,130 L 155,130 L 155,80 L 170,50 L 185,80 L 185,140 L 195,140 L 195,110 L 220,110 L 220,60 L 225,40 L 230,60 L 245,60 L 245,150 L 255,150 L 255,100 L 275,100 L 275,160 L 285,160 L 285,120 L 305,120 L 305,80 L 310,60 L 315,80 L 325,80 L 325,170 L 340,170 L 340,135 L 365,135 L 365,95 L 380,95 L 380,150 L 400,150 L 400,200 Z" />
              </svg>

              {/* Text Container (Left) */}
              <div className="relative z-10 w-[58%] flex flex-col justify-between h-full pr-2">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white mb-2 leading-tight">
                    {line.title}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 opacity-90">
                    {line.description}
                  </p>
                </div>
                
                <Link
                  href={line.link}
                  onClick={(e) => handleClick(e, line.id)}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-white/95 hover:text-cyan-400 transition-colors group/link cursor-pointer mt-auto w-fit"
                >
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Image Container (Right) */}
              <div className="relative z-10 w-[42%] flex items-center justify-center h-full select-none pl-2">
                <img
                  className="max-w-full max-h-[140px] md:max-h-[190px] scale-125 object-contain drop-shadow-[0_12px_24px_rgba(0,180,216,0.25)] transition-transform duration-500 group-hover:scale-105"
                  src={line.image}
                  alt={line.title}
                />
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

const PRODUCT_LINES = [
  {
    id: "indoor",
    title: "Indoor LCD Displays",
    description: "Crystal clear visuals for indoor environments with sleek design.",
    image: "/images/products/product-3.png",
    link: "/products?category=indoor",
  },
  {
    id: "outdoor",
    title: "Outdoor LED Displays",
    description: "Engineered for brightness and durability in any weather condition.",
    image: "/images/products/product-1.png",
    link: "/products?category=outdoor",
  },
  {
    id: "kiosks",
    title: "Interactive Kiosks",
    description: "Engage, inform and convert with interactive experiences.",
    image: "/images/products/product-4.png",
    link: "/products?category=kiosks",
  },
];

export default ProductLines;