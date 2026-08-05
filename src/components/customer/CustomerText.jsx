"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using lucide-react icons for custom arrows

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function CustomerText() {
  const reviews = [
    {
      text: "The POS and kitchen display system work seamlessly together. Our kitchen is more organized, orders are processed faster, and customer satisfaction has noticeably improved",
      name: "Ameracia's Pizza & Wings",
      role: "Restaurant Owner",
      img: "/images/client_logos/Ameracia's Pizza & Wings for Color full BG.png",
    },
    {
      text: "We installed CreateAbit's digital signage across multiple branches. The centralized content management system saves us hours every week and keeps our promotions consistent",
      name: "Deshi Bethak",
      role: "Retail Store Manager",
      img: "/images/client_logos/Deshi Bethak.png",
    },
    {
      text: "Easy-to-use software and a very professional team. Great experience!",
      name: "SAF AIM",
      role: "-----",
      img: "/images/client_logos/SAFAIM.png",
    },
    {
      text: "The digital signage platform is powerful, intuitive, and reliable",
      name: "Pacific Star Impex",
      role: "O----",
      img: "/images/client_logos/PacificStarImpex.jpg",
    },
    {
      text: "Our restaurant operations have become much more efficient since partnering with Display Lab.",
      name: "Strong Root Capital",
      role: "Owner, Les Cavistes Restaurant",
      img: "/images/client_logos/StrongRootCapital.png",
    },
    {
      text: "The digital signage platform is powerful, intuitive, and reliable.",
      name: "BARG",
      role: "Owner, Les Cavistes Restaurant",
      img: "/images/client_logos/BARG2.png",
    },
    {
      text: "Easy-to-use software and a very professional team. Great experience!",
      name: "Pacific Star Impex",
      role: "Owner, Les Cavistes Restaurant",
      img: "/images/client_logos/PacificStarImpex.jpg",
    },
    {
      text: "Excellent service, modern solutions, and outstanding support. Highly recommended!",
      name: "Smart Realty",
      role: "Owner, Les Cavistes Restaurant",
      img: "/images/client_logos/SmartRealty.png",
    },
    {
      text: "Reliable products, excellent support, and innovative solutions. CreateAbit helped modernize our customer experience while keeping the system easy for our staff to use.",
      name: "Hype",
      role: "Owner, Les Cavistes Restaurant",
      img: "/images/client_logos/Hype.jpg",
    },
    {
      text: "The team understood our business requirements and delivered a customized solution that perfectly matched our workflow. Their technical expertise and customer service are exceptional.",
      name: "Somossor",
      role: "Owner, Les Cavistes Restaurant",
      img: "/images/client_logos/Somossor.png",
    },
  ];

  return (
    <div className="relative group max-w-7xl mx-auto px-4">
      {/* Custom Navigation Buttons */}
      <button className="review-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white p-2 rounded-full shadow-md border hover:bg-gray-50 transition-all focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer">
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button className="review-swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white p-2 rounded-full shadow-md border hover:bg-gray-50 transition-all focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed hover:cursor-pointer">
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Swiper Container */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".review-swiper-prev",
          nextEl: ".review-swiper-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="py-4"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border flex flex-col justify-between h-full">
              <div>
                <img
                  className="h-4 mb-4"
                  src="https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/652824fb9a51db8d6a6593df_quote.svg"
                  alt="Quote"
                />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomerText;