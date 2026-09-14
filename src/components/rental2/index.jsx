"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";
import Video from "../Video";

function Rental2() {
  const rentalProducts = [
    {
      product_name: "IndoorDigital-Kiosk",
      product_url: "/images/rental/IndoorDigital-Kiosk.jpg",
    },
    {
      product_name: "Interactive-Digital-Display",
      product_url: "/images/rental/Interactive-Digital-Display.jpg",
    },
    {
      product_name: "Outdoor-Digital-Kiosk",
      product_url: "/images/rental/Outdoor-Digital-Kiosk.jpg",
    },
    {
      product_name: "Promotional-Display-Screens",
      product_url: "/images/rental/Promotional-Display-Screens.jpg",
    },
  ];
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* Hero Section */}
          <div className="hero_section grid lg:grid-cols-2 gap-12 items-center pb-24">
            <div className="text-center lg:text-left">
              <Reveal props={"w-full"}>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Display Lab <span className="highlight">Rental</span> Products
                </h1>
              </Reveal>
              <Reveal props={"w-full"}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Flexible digital signage rental solutions for events, promotions, and temporary setups. Use high-quality displays without buying hardware. Ideal for exhibitions, trade shows, and seasonal campaigns. Quick setup and easy management ensure smooth execution at any venue.
                </p>
              </Reveal>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:items-start lg:justify-start">
                <Reveal>

                <Link
                  href={"/rental"}
                  className="w-xs sm:w-fit bg-cyan-600 text-white px-8 py-4 rounded font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Learn More
                </Link>
                </Reveal>
              </div>
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
                    className="bg-white rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.35)] p-4 relative z-10"
                  >
                    
                    <Video src="/videos/Display-Lab-Rental-Products.mp4" />
                    
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          {/* Heading */}
        </div>
        <div className="">
          <Reveal props={"w-full"}>
            <h2 className="h2_text text-center mb-6">
              Display Lab <br /> Rental Products
            </h2>
          </Reveal>
          <Reveal props={"w-full"}>
            <p className="title_desc mb-14">
              Flexible digital signage rental solutions designed for events,
              promotions, and temporary installations. Deploy high-quality digital
              displays without the cost of purchasing hardware.
            </p>
          </Reveal>
        </div>
        <Reveal props={"w-full"}>
          <div className="relative min-w-2.5 min-h-2.5 w-full h-auto max-w-full order-4 self-center box-border">
            <div className="w-full h-full m-0 p-0 clear-both overflow-hidden min-h-px cursor-pointer">
              <div className="p-2.5!">
                <div className="flex md:flex-row flex-col">
                  <div className="w-full md:w-[60%] flex flex-col md:flex-row flex-wrap">
                    {rentalProducts?.map((singleProduct, index) => (
                      <div
                        key={index}
                        className="relative w-full md:w-[50%] overflow-hidden flex flex-col list-none duration-1000 fill-mode-both p-2.5!"
                      >
                        <div className="group opacity-100 overflow-hidden transform-gpu">
                          <div className="relative rounded-[10px] w-full overflow-hidden bg-transparent">
                            <Link
                              className="bg-no-repeat bg-center bg-cover! transition-all duration-200 ease-out flex flex-col hover:scale-[1.06]"
                              style={{
                                backgroundImage: `url(${singleProduct?.product_url})`,
                                paddingTop: "83.3333%",
                              }}
                              href={""}
                            >
                              <Image
                                className="hidden max-w-full w-200 h-200"
                                src={singleProduct?.product_url}
                                width={800}
                                height={800}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="absolute inset-0 m-auto pointer-events-none block!">
                            <span
                              style={{
                                backgroundColor: "rgba(99,213,150,0) !important",
                              }}
                              className="flex flex-col relative overflow-hidden z-1 text-[#333] p-[15px] h-full box-border justify-end items-center text-center pointer-events-none cursor-pointer text-base"
                            >
                              <h3 className="opacity-0 group-hover:opacity-100 text-white bg-[#3095b5] px-2 py-1 rounded font-bold">
                                {singleProduct?.product_name}
                              </h3>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full md:w-[40%] flex flex-col">
                    <div className="relative overflow-hidden p-2.5! list-none duration-1000 fill-mode-both">
                      <div className="group opacity-100 overflow-hidden transform-gpu">
                        <div className="bg-transparent w-full overflow-hidden rounded-[10px]! relative">
                          <Link
                            className="flex flex-col transition-all duration-200 ease-out bg-cover bg-no-repeat bg-center hover:scale-[1.06]"
                            href={""}
                            style={{
                              paddingTop: "125%",
                              backgroundImage: "url('/images/rental/indoor.jpg')",
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <Image
                              width={1200}
                              height={1200}
                              className="max-w-full hidden!"
                              src={"/images/rental/indoor.jpg"}
                              alt=""
                            ></Image>
                          </Link>
                        </div>
                        <div className="block! absolute inset-0 m-auto pointer-events-none">
                          <span
                            style={{
                              backgroundColor: "rgba(99,213,150,0) !important",
                            }}
                            className="relative z-10 h-full overflow-hidden flex flex-col justify-end items-center text-center pointer-events-none p-4 text-[#333]"
                          >
                            <h3 className="opacity-0 group-hover:opacity-100 text-white bg-[#3095b5] px-2 py-1 rounded font-bold">
                              Dual screen Kiosk
                            </h3>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

    </>
  );
}

export default Rental2;
