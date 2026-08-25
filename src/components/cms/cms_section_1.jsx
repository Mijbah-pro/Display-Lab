import Link from "next/link";
import Reveal from "../utils/Reveal";

function CMS_Marketing() {
  return (
    <>
    {/* py-16 md:py-24  */}
      <div className="container_paddingTop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center container_paddingBtm">
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
                    className=" rounded-2xl shadow-2xl p-4 relative z-10"
                  >
                    <video
                      className="rounded-xl aspect-video w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      preload="none"
                    >
                      <source src="/videos/A_Single_Platform.mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="flex xl:block flex-col justify-center items-center mx-auto">
              <Reveal >
                <h2 className="h2_text mb-6 text-center xl:text-left">
                  A Complete <span className="highlight"> CMS </span> <br /> Platform to Power <br /> Your Digital Universe
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-[1rem] mb-8 text-center xl:text-left">
                  Display Lab offers complete digital signage solutions, from CMS to hardware and displays. Simple, scalable tools to communicate and engage across any number of screens. Our platform is designed for ease of use, allowing you to manage content effortlessly in real time. Whether for retail, corporate, or public spaces, we help you deliver impactful visual experiences that captivate your audience.
                </p>
              </Reveal>
              <Reveal>

              <Link
                href="/cms"
                className="border-[1.5px] border-[#005582] bg-[#005582] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:text-black hover:bg-white w-fit"
              >
                Explore CMS
              </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CMS_Marketing;
