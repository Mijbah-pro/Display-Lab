"use client";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import Reveal from "../utils/Reveal";
import "./everyIndstyle.css";
import TabSection from "./TabSection";

function DigitalSignageSolutions() {
  const contentDatas = [
    {
      contentImageUrls: [
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_1.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_2.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_3.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_4.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_5.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Retail/Retail_6.jpg" },
      ],
      contentTitle: "Retail",
      contentDescription:
        "Enhance the in-store experience with dynamic digital signage that captures attention and drives sales. Showcase promotions, highlight featured products, and deliver real-time updates to influence customer decisions at the point of purchase.",
      contentValue: "retail",
      features: [
        {
          title: "Boost In-Store Engagement",
          desc: " Capture customer attention with vibrant, dynamic displays.Promote offers, new arrivals, and seasonal campaigns in real time.Create immersive shopping experiences that increase dwell time.",
        },
        {
          title: "Smart Product Promotion",
          desc: "Showcase bestsellers and high-margin products effectively.Use targeted content to influence purchasing decisions instantly.Update promotions across multiple locations with ease.",
        },
        {
          title: "Real-Time Updates & Offers",
          desc: "Instantly push discounts, flash sales, and announcements.Keep content fresh and relevant throughout the day.Ensure customers never miss important deals or updates.",
        },
      ],
    },
    {
      contentImageUrls: [
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Restaurants/Restaurants_1.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Restaurants/Restaurants_2.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Restaurants/Restaurants_3.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Restaurants/Restaurants_4.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Restaurants/Restaurants_5.jpg" },
      ],
      contentTitle: "Restaurants",
      contentDescription:
        "Display digital menus with clear visuals and easy updates.Promote special offers and adjust pricing in real time.Enhance customer experience with dynamic and engaging content.",
      contentValue: "restaurants",
      features: [
        {
          title: "Dynamic Digital Menus",
          desc: "Show menus with rich visuals and clear pricing.Update items, prices, and availability instantly.Reduce printing costs with fully digital displays.",
        },
        {
          title: "IPromotions & Upselling",
          desc: "Highlight combos, specials, and high-margin items.Encourage impulse purchases with eye-catching visuals.Adapt promotions based on time of day or demand.",
        },
        {
          title: "Faster Service Experience",
          desc: "Improve order flow with clear and visible menus.Reduce wait times and customer confusion.Enhance overall dining experience with smooth communication.",
        },
      ],
    },
    {
      contentImageUrls: [
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare_1.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare_2.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare_3.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare_4.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Healthcare/Healthcare_5.jpg" },
      ],
      contentTitle: "Healthcare",
      contentDescription:
        "Share important information with patients, visitors, and staff.Display directions, wait times, and health updates clearly.Improve communication across facilities with centralized content control.",
      contentValue: "healthcare",
      features: [
        {
          title: "Patient Information Displays",
          desc: "Share important notices, health tips, and updates.Keep patients informed in waiting and common areas.Improve overall communication and transparency.",
        },
        {
          title: "Wayfinding & Navigation",
          desc: "Guide visitors with clear directions and maps.Reduce confusion in large or complex facilities.Help patients reach destinations quickly and easily.",
        },
        {
          title: "Real-Time Alerts & Updates",
          desc: "Display wait times, emergency alerts, and announcements.Communicate critical information instantly.Ensure staff and visitors stay informed at all times.",
        },
      ],
    },
    {
      contentImageUrls: [
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Education/Education_1.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Education/Education_2.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Education/Education_3.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Education/Education_4.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Education/Education_5.jpg" },
      ],
      contentTitle: "Education",
      contentDescription:
        "Communicate announcements and schedules effectively on campus.Share important updates with students, staff, and visitors.Keep everyone informed with dynamic and easy-to-manage displays.",
      contentValue: "education",
      features: [
        {
          title: "Engage Students",
          desc: "Display announcements, events, and campus updates.Share motivational and educational content.Keep students informed across common areas and classrooms.",
        },
        {
          title: "Improve Campus Navigation",
          desc: " Use interactive maps and directories for guidance.Help students and visitors find exact locations.Enhance campus accessibility and experience.",
        },
        {
          title: "Schedules & Alerts",
          desc: "Share class schedules, exam dates, and notices.Provide real-time updates and emergency alerts.Keep everyone informed with timely communication.",
        },
      ],
    },
    {
      contentImageUrls: [
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Corporate-Offices/Corporate-Offices.jpg" },
        { image_url: "/images/Digital-Signage-Solutions-for-Every-Industry/Corporate-Offices/v2-awcgl-fbeds.png" },
      ],
      contentTitle: "Corporate Offices",
      contentDescription:
        "Improve internal communication with company news and announcements.Share dashboards, KPIs, and updates to keep teams aligned.Enhance workplace engagement with dynamic and timely content.",
      contentValue: "corporate_offices",
      features: [
        {
          title: "Enhance Internal Communication",
          desc: "Share company news, announcements, and updates instantly.Keep teams aligned across departments and locations.Reduce email overload with centralized displays.",
        },
        {
          title: "Visualize Data & KPIs",
          desc: "Display dashboards, metrics, and performance insights.Keep employees informed with real-time business data.Drive transparency and better decision-making.",
        },
        {
          title: "Boost Workplace Engagement",
          desc: "Promote company culture, events, and achievements.Recognize employees and share success stories.Create a more connected and motivated workforce.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="pt-10 xl:pt-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="hero_section grid lg:grid-cols-2 gap-12 items-center xl:pb-24">
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
                    className=" rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 relative z-10"
                  >
                    <video
                      className="rounded-xl aspect-video w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      preload="none"
                    >
                      <source src="/videos/digital_signage_solutions.mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="text-center xl:text-left mx-auto">
              <Reveal props={"w-full"}>
                <h1 className="text-4xl xl:text-5xl font-bold text-gray-900 mb-6 mx-auto lg:mx-0 leading-tight">
                  Digital Signage <span className="highlight">Solutions</span> <br /> for Every Industry
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Display Lab Digital Signage helps businesses manage and deliver dynamic content across screens with ease. It enables real time updates and centralized control supporting retail offices restaurants and education.
                </p>
              </Reveal>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
            </div>
          </div>
          {/* Heading */}
          <Reveal props={"w-full"}>
            <div className="bg-white rounded-2xl p-2">
              <Tabs defaultValue="retail" orientation="vertical">
                {contentDatas?.map((singleContentData, index) => (
                  <TabsContent
                    key={index}
                    value={singleContentData.contentValue}
                  >
                    {/* Layout wrapper */}
                    <div className="grid-container">
                      {/* LEFT SIDE */}
                      <TabsList className="sidebar flex flex-col w-full h-fit bg-transparent p-0">
                        <TabSection />
                      </TabsList>

                      {/* RIGHT SIDE */}
                      {/* IMAGE */}
                      {/* w-136.25 h-86.25 */}
                      <div className="hero rounded-xl overflow-hidden mb-6 w-full h-full lg:w-220 lg:h-139">
                        <Swiper
                          modules={[Autoplay]}
                          className="w-full h-full"
                          spaceBetween={20}
                          loop
                          allowTouchMove={true}
                          autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                          speed={1000}
                        >
                          {singleContentData.contentImageUrls.map(
                            (singleImageUrl, index) => (
                              <SwiperSlide
                                key={index}
                                className="w-full h-full"
                              >
                                <Image
                                  width={500}
                                  height={500}
                                  src={singleImageUrl.image_url}
                                  alt="contentImage"
                                  className="w-full h-full object-cover rounded"
                                />
                              </SwiperSlide>
                            ),
                          )}
                        </Swiper>
                      </div>

                      {/* TITLE + DESC */}
                      <div className="content mb-8">
                        <h3 className="text-3xl font-bold mb-4">
                          {singleContentData.contentTitle}
                        </h3>
                        <p className="text-gray-600 max-w-2xl">
                          {singleContentData.contentDescription}
                        </p>
                      </div>

                      {/* FEATURES GRID */}
                      <div className=" features grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {singleContentData?.features?.map((feature, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="w-10 h-10 flex items-center justify-center text-2xl text-[#105783] rounded-lg">
                              📢
                            </div>
                            <div>
                              <h4 className="font-semibold text-xl mb-5 text-gray-900">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* <div className="">
                      <button className="bg-[#105783] hover:bg-[#003051] text-white px-8 py-3 rounded-lg">
                        Lets Setup a Demo Online
                      </button>
                    </div> */}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default DigitalSignageSolutions;
