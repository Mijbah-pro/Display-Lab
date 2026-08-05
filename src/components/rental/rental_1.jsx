import Image from "next/image";
import Link from "next/link";

function Rental_1() {
  return (
    <>
<div className="space-large"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4">
      <div className="max-md:text-center pr-0 md:pr-[22%]">
        <h2 className="title mb-10 leading-[.5]">
          Display Lab Rental
        </h2>
        <p className="two_column_sub_desc">
          Flexible rental solutions for events and businesses with professional support and custom content creation.
        </p>
        <div className="">
          <ul className="list-disc text-base ml-30 md:ml-5  text-start text-slate-600">
            <li>
              LED,LCD and holographic displays
            </li>
            <li>
              Interractive kiosks and event tentals
            </li>
            <li>
              Offices - Retail stores - Hospitals...
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
          <Link
            href="/rental"
            className="button"
          >
            Explore Rental
          </Link>
        </div>
      </div>
      <div className="w-[400px] mx-auto">
        <Image
          width={1000}
          height={1000}
          src={"/images/rental/rental.png"}
          className="object-cover max-w-full h-full"
          alt="rental"
        ></Image>
      </div>
    </div>
    </>
  );
}

export default Rental_1;
