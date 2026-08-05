import Reveal from "@/components/utils/Reveal";
import Link from "next/link";

function DigitalSignage() {
  const DigitalSignagePlatfroms = [
  {
    img_src:
      "/images/Every_Industry/Restaurant-2.jpg",
    title: "Restaurant",
    description:
      "Boost orders and enhance dining experience with dynamic menus, promotions, and real-time updates that keep customers engaged.",
            link:"/cms/restaurant",
  },

  {
    img_src:
      "/images/Every_Industry/Grocery.jpg",
    title: "Grocery",
    description:
      "Promote deals, flash discounts, and product information instantly to improve shopper experience and increase basket size.",
    link:"/cms/grocery",
  },

  {
    img_src: "/images/Every_Industry/Retai.jpg",
    title: "Retail",
    description:
      "Drive sales with eye-catching in-store displays, promotions, and product highlights that influence purchase decisions at the point of sale.",
      link:"#",
  },

  {
    img_src:
      "/images/Every_Industry/Education.jpg",
    title: "Education",
    description:
      "Share announcements, schedules, emergency alerts, and campus information in real time for better communication across institutions.",
      link: "/cms/education",
  },

  {
    img_src: "/images/Every_Industry/Office.jpg",
    title: "Offices",
    description:
      "Improve internal communication with dashboards, KPIs, announcements, and visitor information displayed clearly and professionally.",
            link:"#",
  },

  {
    img_src:
      "/images/Every_Industry/Goverment.jpg",
    title: "Government",
    description:
      "Deliver public information, service updates, alerts, and announcements efficiently to ensure transparency and accessibility.",
      link:"#",
  },

  {
    img_src:
      "/images/Every_Industry/Religious.jpg",
    title: "Religious Venues",
    description:
      "Share prayer timings, sermons, events, and community messages to enhance engagement and keep congregations informed.",
      link:"#",
  },

  {
    img_src:
      "/images/Every_Industry/Manufacturing.jpg",
    title: "Manufacturing",
    description:
      "Display safety alerts, production metrics, shift schedules, and operational updates to improve efficiency and workplace safety.",
      link:"#",
  },

  {
    img_src:
      "/images/Every_Industry/Healthcare.jpg",
    title: "Healthcare",
    description:
      "Inform patients with wait times, health tips, announcements, and wayfinding to improve experience and streamline operations.",
      link:"#",
  },
];
console.log(DigitalSignagePlatfroms[0]?.link, "DigitalSignagePlatfroms  0");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal props={"w-full"}>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {DigitalSignagePlatfroms.map(
            (singleDigitalSignagePlatfrom, index) => (
              <Link className="text-center" key={index} href={singleDigitalSignagePlatfrom?.link}>
                <div className="mb-6 flex justify-center">
                  <img src={singleDigitalSignagePlatfrom?.img_src} alt="" />
                </div>
                <h3 className="text-xl font-semibold text-[#105783] underline underline-offset-4 mb-4">
                  {singleDigitalSignagePlatfrom?.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {singleDigitalSignagePlatfrom?.description}
                </p>
              </Link>
            ),
          )}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default DigitalSignage;
