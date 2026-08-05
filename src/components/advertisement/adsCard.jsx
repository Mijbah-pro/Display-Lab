"use client";
import Image from "next/image";
import Reveal from "../utils/Reveal";

function AdsCard({ data }) {
  return (
    <Reveal props={"w-full"}>
      <div
        className={`border rounded-xl hover:shadow-lg transition overflow-hidden`}
      >
        <div className="">
          <Image
            width={1000}
            height={1000}
            src={data.ads_card_image_url}
            alt={data.ads_card_title}
            className="w-full h-full lg:h-62.5 object-cover mb-4"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 ">
            {" "}
            {data.ads_card_title}{" "}
          </h3>{" "}
          <p className="text-sm mb-5">{data.ads_card_description}</p>
          <div className="py-4 flex gap-2 flex-wrap">
            {" "}
            {data?.product_name?.map((single_product_name, index) => (
              <span
                key={index}
                className="px-0.5 bg-yellow-400 text-black font-semibold text-xs"
              >
                {single_product_name}
              </span>
            ))}
          </div>
          <div className="flex">
            <a
              href={data.ads_card_link_address}
              className="border-[1.5px] border-[#3095b5] bg-[#3095b5] text-white text-center capitalize whitespace-nowrap rounded-full flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:bg-white hover:text-black w-full"
            >
              {data.ads_card_link_text}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default AdsCard;
