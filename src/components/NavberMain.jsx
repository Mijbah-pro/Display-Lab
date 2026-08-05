"use client";
import { logoBlue, navData } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavberMain() {
  const [showNavShadow, setShowNavShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathName = usePathname();

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };
    setIsOpen(false);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  //   shawNavShadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNavShadow(true);
      } else {
        setShowNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`flex flex-col sticky w-full  justify-center bg-white top-0 z-999 ${showNavShadow ? "scrolled" : ""}`}
    >
      <div className="navShadow top-0! h-full!  opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none pb-0 flex absolute inset-x-0"></div>
      <div className="static z-1000 ">
        <div className="bg-white flex flex-col justify-center h-20">
          <div className="px-5 md:px-6 lg:px-10">
            <div className="static lg:relative flex justify-between items-center w-full max-w-7xl m-auto px-0">
              <Link className="w-50" href={"/"}>
                {" "}
                <img src={logoBlue} alt="Logo" />
              </Link>
              {/* nav tab group wrapper  */}
              <div
                className={`mobile_nav_tab lg:static flex justify-between items-center w-full transition-all duration-300 ease-in-out transform-gpu transform-3d ${isMobile ? (isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none") : ""}`}
              >
                <div className="menu_wrapper flex w-full justify-center">
                  {/* nav tabs group */}
                  <div className="menu_main flex items-center mx-auto">
                    {navData
                      .filter(
                        (item) => !item.onlyOn || item.onlyOn === pathName,
                      )
                      .map((singleNav, index) => (
                        <Link
                          key={index}
                          className="nav_link-mm flex items-center py-3 px-5 font-semibold transition-[all .2s] text-[#333] hover:text-black hover:font-bold"
                          href={singleNav?.navLink}
                        >
                          {singleNav?.navTab}
                        </Link>
                      ))}
                  </div>
                  {/* nav buttons group */}
                  <div className=" menu_action flex justify-center items-center gap-4">
                    <Link
                      className="border-[1.5px] border-[#005582] bg-[#005582] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:text-black hover:bg-white"
                      href={"https://displaylab.net/"}
                      target="_blank"
                    >
                      Log in
                    </Link>
                    <Link
                      className="border-[1.5px] border-[#3095b5] bg-[#3095b5] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:bg-white hover:text-black"
                      href={"https://displaylab.net/signup"}
                      target="_blank"
                    >
                      Try For Free
                    </Link>
                  </div>
                </div>
              </div>
              <div
                onClick={toggleHandler}
                className={` ${isMobile ? "" : "hidden"} flex items-center py-6 pl-6 cursor-pointer`}
              >
                {/* = */}
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" />
                    <script xmlns="" />
                    <script xmlns="" />
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#717E8A"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <script xmlns="" id="eppiocemhmnlbhjplcgkofciiegomcon" />
                    <script xmlns="" />
                    <script xmlns="" />
                    <path
                      d="M2.18164 4.90912H21.818"
                      stroke="#717E8A"
                      strokeWidth="3.27273"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.18164 12H21.818"
                      stroke="#717E8A"
                      strokeWidth="3.27273"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2.18164 19.0909H21.818"
                      stroke="#717E8A"
                      strokeWidth="3.27273"
                      strokeLinecap="round"
                    />
                  </svg>
                )}

                {/* x */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavberMain;
