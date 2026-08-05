import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function About_Us() {
  return (
    <>
    <div className="space-large"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4">
      <div className="pr-0 md:pr-[22%] flex flex-col gap-2 md:gap-5 text-center md:text-left">
        <p className="text-base font-medium text-slate-600">
          ABOUT DISPLAY LAB
        </p>
        <h1 className="title mb-10">
          Innovating the Future of Digital Displays
        </h1>

        <p className="two_column_desc">
          Display Lab is a technology-driven company specializing in advanced
          display systems and advertising solutions. From smart kiosks and LED
          screens to dynamic content management software, we empower businesses
          to engage their audiences through stunning visuals and intalligent
          design.
        </p>
        <Link className="flex justify-start items-center gap-2 mt-6 py-2.5  rounded-lg text-sm tracking-wider font-medium border-none outline-none cursor-pointer hover:underline w-max mx-auto md:mx-0 " href={"/"}>
          Learn More <FaArrowRightLong />
        </Link>
      </div>
      <div className=" ">
        <Image width={800} height={500} src={'/images/about_us/about_us.png'} alt="about_us" className="object-cover rounded-lg shadow-xl max-w-full h-full"></Image>
      </div>
    </div>
    </>
  );
}

export default About_Us;
