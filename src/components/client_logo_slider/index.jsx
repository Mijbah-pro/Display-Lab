"use client";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import Image from "next/image";

function ClientLogoSlider({ autoPlay,touchMove,slideDatas }) {
  return (
    <>
      <div className="logoSection">
        <Swiper className="client-logo-swiper"
          modules={autoPlay ? [Autoplay] : ""}
          spaceBetween={80}
          loop={true}
          allowTouchMove={touchMove ? true : false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            0: {
              slidesPerView: 2, // 📱 mobile → 2 logos
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3, // small devices
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5, // desktop
              spaceBetween: 80,
            },
          }}
        >
          {slideDatas.map((singleData, index) => (
            <SwiperSlide key={index}>
              <Image width={150} height={100} src={singleData} alt="logo" className="logoImg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ClientLogoSlider;
