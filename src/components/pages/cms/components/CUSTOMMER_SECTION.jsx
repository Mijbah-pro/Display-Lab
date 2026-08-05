"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Leigh Darrah",
      position: "Sr. Internal Communications Manager",
      company: "Hydro",
      image: "/images/hero/slide_1.png",
      text: "Yodeck provides an easy-to-use system to communicate to our 6,000+ employees across North America. For us, they are more than a service provider, they are a communication partner.",
    },
    {
      id: 2,
      name: "Alex Johnson",
      position: "Marketing Director",
      company: "BrightTech",
      image: "/images/hero/slide_2.png",
      text: "Yodeck has transformed how we share updates. The platform is intuitive and reliable. Highly recommended!",
    },
  ];

  return (
    <section className="bg-[#f9fafc] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="section_sub_title mb-10 text-center">
          What customers say about us
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="relative"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white p-6 md:p-10 rounded-xl shadow-md">
                <div className="flex justify-center md:justify-start">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-64 h-64 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.company}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <span className="text-blue-500 text-2xl mr-2">❝</span>
                    {t.text}
                  </p>
                  <p className="font-semibold text-gray-800">
                    {t.name}{" "}
                    <span className="font-normal text-gray-500">
                      {t.position}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination */}
          <div className="swiper-pagination mt-4"></div>

          {/* Navigation buttons */}
          <div className="testimonial-prev absolute right-[4rem] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="testimonial-next absolute right-[1rem] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Swiper>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #105783;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        @media (max-width: 640px) {
          .testimonial-next,
          .testimonial-prev {
            width: 25px;
            height: 25px;
            padding: 4px;
          }
        }
      `}</style>
    </section>
  );
}
