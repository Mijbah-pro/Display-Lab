import Link from "next/link";
import CustomerText from "./CustomerText";
import Reveal from "../utils/Reveal";

function CustomerReviews() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Counter Section */}
        {/* <CustomerCounting /> */}

        {/* Rating */}
        <div className="text-center mt-10">
          <Reveal props={"w-full"}>
            <div className="flex justify-center items-center gap-1 text-orange-400 text-xl">
              ★ ★ ★ ★ ★
            </div>
          </Reveal>
          <Reveal props={"w-full"}>
            <div className="flex justify-center gap-6 mt-2 text-gray-600 font-semibold">
              <img
                className="w-10"
                src="/svg/our_account_logos/3.svg"
                alt="our_logos"
              />
              <img
                className="w-40"
                src="/svg/our_account_logos/4.svg"
                alt="our_logos"
              />
              <img
                className="w-10"
                src="/svg/our_account_logos/2.svg"
                alt="our_logos"
              />
              <img
                className="w-10"
                src="/svg/our_account_logos/1.svg"
                alt="our_logos"
              />
            </div>
          </Reveal>
        </div>

        {/* Testimonials */}
        <div className="mt-14">
          <Reveal props={"w-full"}>
            <CustomerText />
          </Reveal>
        </div>

        {/* Button */}
        <Reveal props={"w-full"}>
          
        <div className="flex justify-center mt-12">
          <Link
            href={"/"}
            className="border-[1.5px] border-[#005582] bg-[#005582] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:text-black hover:bg-white"
          >
            Try For Free →
          </Link>
        </div>
        </Reveal>
      </div>
    </div>
  );
}

export default CustomerReviews;
