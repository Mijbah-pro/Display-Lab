"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function NewProductDesign() {
  const productsSection = [
    {
      product_name: "Indoor Display",
      product_slide_image: [
        "/images/products/product-1.png",
        "/images/products/product-slide-image1.jpg",
      ],
    },
  ];

  return (
    <div className="bg-[#f5f5f7] py-16 my-5 relative">
      <div className="flex flex-col items-center justify-center">
        <Swiper
          modules={[Autoplay]}
          className="w-full h-full"
          spaceBetween={20}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          {productsSection.map((product, productIndex) =>
            product.product_slide_image.map((img, imgIndex) => (
              <SwiperSlide
                key={`${productIndex}-${imgIndex}`}
                className="w-full h-full text-center"
              >
                {/* Show title + button only on first image */}
                {imgIndex === 0 ? (
                  <>
                    <h3 className="text-5xl font-bold mb-5">
                      {product.product_name}
                    </h3>

                    <Link
                      href="https://displaylab.net/signup"
                      target="_blank"
                      className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg"
                    >
                      Learn More
                    </Link>
                    <div className="flex justify-center mt-6">
                      <Image
                        src={img}
                        alt={product.product_name}
                        width={400}
                        height={300}
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full">
                    <Image
                      src={img}
                      alt={product.product_name}
                      width={10000}
                      height={10000}
                    />
                  </div>
                )}
              </SwiperSlide>
            )),
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default NewProductDesign;
