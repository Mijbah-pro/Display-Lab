"use client";
import CalandlyButton from "@/components/calandlyButton";
import ProductIncoary from "@/components/Form/ProductIncoary";
import Reveal from "@/components/utils/Reveal";
import { useState } from "react";

function Prduct_Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);


  return (
    <>
      <section className="relative bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal props={"w-full"}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  Versatile Display <br /> Products
                </h1>
                <p className="text-lg md:text-xl text-black mb-8 max-w-2xl mx-auto lg:mx-0 opacity-70">
                  Discover a wide range of diplay products from interactive kiosks to outdoor screens-perfect for any enviroment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <CalandlyButton
                    text={"Schedule with Display Lab"}
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
                        className="lucide lucide-play"
                        aria-hidden="true"
                      >
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                      </svg>
                    }
                  />
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="w-xs sm:w-fit border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded font-semibold text-base hover:bg-cyan-50 transition-all cursor-pointer"
                  >
                    Product Inquiry
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 relative z-10 bg-white">
                  <video
                    className="rounded-xl aspect-video w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    preload="none"
                  >
                    <source src="/videos/product.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Inquiry Modal */}
      {isFormOpen && (
        <div
          className="fixed inset-0 top-20 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ProductIncoary onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Prduct_Hero;
