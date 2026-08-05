"use client";
import { logoBlue } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Reveal from "../utils/Reveal";

function Footer() {
  const quickLinksPages = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Cms",
      href: "/cms"
    },

    {
      name: "Porducts",
      href: "/products"
    },
    {
      name: "Rental",
      href: "/rental"
    },
    {
      name: "Advertisement",
      href: "/advertisement"
    },
  ]
  const quickLinksProducts = [
    {
      name: "Indoor Display",
      href: "#",
    },
    {
      name: "Digital Poster",
      href: "#",
    },

    {
      name: "Stand Kiosk",
      href: "#",
    },
    {
      name: "3D Holograph",
      href: "#",
    },
    {
      name: "Self Ordering Kiosk",
      href: "#",
    },
    {
      name: "Indoor Display",
      href: "#",
    },
    {
      name: "Stand Kiosk",
      href: "#",
    },

  ]
  const quickLinksIndustrys = [
    {
      name: "Education",
      href: "#",
    },

    {
      name: "Hospital",
      href: "#",
    },
    {
      name: "Restaurants",
      href: "#",
    },
    {
      name: "Corporate Offices",
      href: "#",
    },

  ]
  const quickLinksRental = [
    {
      name: "Indoor Digital Kiosk",
      href: "#",
    },
    {
      name: "Interactive Digital Display",
      href: "#",
    },

    {
      name: "Outdoor Digital kiosk",
      href: "#",
    },
    {
      name: "Promotional Display Screens",
      href: "#",
    },
    {
      name: "Dual Screen Kiosk",
      href: "#",
    },
  ]
  const footerProductsLinks = [
    {
      name: "Prices",
      href: "#",
    },
  ];

  return (
    <>
      <Reveal props={"w-full"}>

        <div className="bg-[#071a2d] text-white">
          <div className="px-5 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="w-full">
                {/* Footer top */}
                <div className="relative z-1 grid w-full md:grid-cols-[2fr_1fr] auto-rows-auto gap-8 
                pt-10 place-items-center md:place-items-start stretch justify-between">
                  <div className="w-full">
                    <Reveal props={"w-full"}>
                      <Link href="/" className="flex justify-center md:justify-start">
                        <Image
                          src={logoBlue}
                          alt="Display Lab - Digital Signage Software Solutions"
                          width={200}
                          height={200}
                          className="w-40"
                        ></Image>
                      </Link>
                    </Reveal>

                  </div>
                </div>
                {/* Footer center */}
                <div className="relative z-1 flex items-end justify-start gap-x-12 gap-y-8 py-10">
                  <div className="flex flex-col md:flex-row items-start justify-between w-full gap-x-8 gap-y-12">
                    <div className="flex flex-col items-start gap-12">
                      <div className="flex flex-col items-start gap-4">
                        <div className="text-[#3095b5]">Quick Links</div>
                        {quickLinksPages.map((link, index) => (
                          <Link
                            href={link.href}
                            key={index}
                            className="text-[#e9e9e9] hover:underline"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-12">
                      <div className="flex flex-col items-start gap-4">
                        <div className="text-[#3095b5]">Products</div>
                        {quickLinksProducts.map((link, index) => (
                          <Link
                            href={link.href}
                            key={index}
                            className="text-[#e9e9e9] hover:underline"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-12">
                      <div className="flex flex-col items-start gap-4">
                        <div className="text-[#3095b5]">Industrys</div>
                        {quickLinksIndustrys.map((link, index) => (
                          <Link
                            href={link.href}
                            key={index}
                            className="text-[#e9e9e9] hover:underline"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-12">
                      <div className="flex flex-col items-start gap-4">
                        <div className="text-[#3095b5]">Rental</div>
                        {quickLinksRental.map((link, index) => (
                          <Link
                            href={link.href}
                            key={index}
                            className="text-[#e9e9e9] hover:underline"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-12">
                      <div className="flex flex-col items-start gap-4">
                        {/* <div className="text-[#3095b5]">Other pages</div> */}
                        {/* {footerProductsLinks.map((link, index) => (
                          <Link
                            href={link.href}
                            key={index}
                            className="text-[#e9e9e9] hover:underline"
                          >
                            {link.name}
                          </Link>
                        ))} */}
                        <Link href="/careers" className="border-[1.5px] border-[#3095b5] bg-[#3095b5] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:text-black">
                          Try For Free
                        </Link>
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <Link href={"/contact"} className="text-[#3095b5]">Contact Us</Link>
                        <div className="">
                          901 S Highland St, # 301, {" "}
                          <span className="block">Arlington, VA, United States, 22204</span>
                        </div>
                        <div className="flex items-center gap-6">
                          <Link
                            className="hover:text-[#3095b5] text-xl"
                            href={""}
                          >
                            <FaFacebookF />
                          </Link>
                          <Link
                            className="hover:text-[#3095b5] text-xl"
                            href={""}
                          >
                            <IoLogoInstagram />
                          </Link>
                          <Link
                            className="hover:text-[#3095b5] text-xl"
                            href={""}
                          >
                            <FaLinkedin />
                          </Link>
                          <Link
                            className="hover:text-[#3095b5] text-xl"
                            href={""}
                          >
                            <FaYoutube />
                          </Link>
                          <Link
                            className="hover:text-[#3095b5] text-xl"
                            href={""}
                          >
                            <FaXTwitter />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer bottom */}
                <div className="relative z-1 flex flex-col items-center  gap-x-12 gap-y-8 pt-12 pb-2">
                  <div className="">
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-3.5">
                      <Link
                        href="/terms/return-policy"
                        className="footer_bottom_link"
                      >
                        Return Policy
                      </Link>
                      <Link href="/privacy-policy" className="footer_bottom_link">
                        Privacy Statement
                      </Link>
                      <Link
                        href="https://app.termly.io/dsar/16b2534f-640f-4c73-8eed-9964d89f6434"
                        target="_blank"
                        className="footer_bottom_link"
                      >
                        Your Privacy Choices
                      </Link>
                      <Link href="/terms-of-use" className="footer_bottom_link">
                        Terms of Use
                      </Link>
                      <Link
                        href="/terms/sla"
                        className="footer_bottom_link border-none"
                      >
                        Service Level Agreement
                      </Link>
                    </div>
                  </div>
                  <div className="">
                    Display Lab Inc. ©{" "}
                    <span className="copyright_year">
                      {" "}
                      {new Date().getFullYear()}
                    </span>{" "}
                    All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default Footer;
