"use client";

import "swiper/css";
import Reveal from "../utils/Reveal";

function ProductSection() {
  const productImages = [
    { image: "/images/products/product-images1.jpeg" },
    { image: "/images/products/product-images2.1.jpeg" },
  ];
  return (
    <>
      <div className="">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto hero_section grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Display <span className="highlight"> Products </span> <br /> Smart Solutions for Business Growth
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Display Lab offers versatile digital signage solutions for diverse business needs, including Stand Kiosk, Indoor Display, 3D Hologram Display, and Self-Ordering Kiosk, designed to enhance engagement, improve efficiency, and deliver modern interactive customer experiences.
              </p>
            </Reveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
          </div>
          <Reveal props={"w-full"}>
            <div className="relative">
              <div className="relative">
                <div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="bg-white rounded-2xl shadow-2xl p-4 relative z-10"
                >
                  <video
                    className="rounded-xl aspect-video w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    preload="none"
                  >
                    <source src="https://cdn.pickcel.com/videos/main/hero-video.hMW0RsrCv5Su.webm" />
                  </video>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
