"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "../utils/Reveal";
function ProductSlider() {
      const productImages = [
    { image: "/images/products/product-images1.jpeg" },
    { image: "/images/products/product-images2.1.jpeg" },
  ];
    return ( 
       <Reveal props={"w-full"}>
          <Swiper
            modules={[Autoplay]}
            className="w-full h-full"
            spaceBetween={20}
            loop
            allowTouchMove={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
          >
            {productImages?.map((singleProduct, index) => (
              <SwiperSlide key={index}>
                <div className="py-50 ">
                  <Link href={"/products"}>
                    <Image
                      className="w-full h-full rounded-2xl"
                      src={singleProduct?.image}
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
     );
}

export default ProductSlider;