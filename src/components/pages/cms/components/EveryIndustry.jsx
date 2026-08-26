"use client";

import Reveal from "@/components/utils/Reveal";
import Image from "next/image";
import { FaHospitalAlt } from "react-icons/fa";
import { IoRestaurantSharp, IoSchool } from "react-icons/io5";
import { MdEvent, MdOutlineHomeWork } from "react-icons/md";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function EveryIndustry() {
  const devices = [
    {
      icon: <MdOutlineHomeWork size={40} />,
      title: "Rental",
    },
    {
      icon: <IoRestaurantSharp size={40} />,
      title: "Restaurants",
    },
    {
      icon: <IoSchool size={40} />,
      title: "School",
    },
    {
      icon: <FaHospitalAlt size={40} />,
      title: "Hospitals",
    },
    {
      icon: <MdEvent size={40} />,
      title: "Events",
    },
    {
      icon: <MdOutlineHomeWork size={40} />,
      title: "Rental",
    },
    {
      icon: <IoRestaurantSharp size={40} />,
      title: "Restaurants",
    },
    {
      icon: <IoSchool size={40} />,
      title: "School",
    },
    {
      icon: <FaHospitalAlt size={40} />,
      title: "Hospitals",
    },
    {
      icon: <MdEvent size={40} />,
      title: "Events",
    },
  ];
  return (
    <>
      <div className="space-large"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal props={"w-full"}>
          <div className="max-w-3xl mx-auto flex flex-col items-center mb-8 py-16">
            <div className="image">
              <Image
                src={"/images/rental/rental.png"}
                alt=""
                width={1000}
                height={1000}
                className="object-cover w-sm h-full"
              />
            </div>

            <h2 className="h2_text text-center mb-4">
              Digital Signage for Every Industry
            </h2>
            <span className="title_desc">
              Tailored digital signage solutions designed to inform, engage, and
              inspire your audience.
            </span>
          </div>
        </Reveal>
        <Reveal props={"w-full"}>
          <Swiper
            spaceBetween={20}
            loop={true}
            align={"center"}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {devices.map((device, index) => (
              <SwiperSlide key={index}>
                <div className="w-37.75 singleFeature flex flex-col items-center gap-2 text-white bg-[#125884] px-5 rounded-xl py-4">
                  {device.icon}
                  <h4 className="text-lg font-semibold">{device.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </>
  );
}

export default EveryIndustry;
