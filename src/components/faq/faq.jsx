"use client";
import { useState } from "react";
import Reveal from "../utils/Reveal";

function FAQ({ datas }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center text-slate-800 px-3">
            <Reveal props={"w-full"}>
              <h1 className="h2_text mt-2">Frequently Asked Questions</h1>
            </Reveal>

            <div className="max-w-7xl w-full mt-6 flex flex-col gap-4 items-start text-left">
              {datas.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-full lg:w-5xl mx-auto"
                >
                  <Reveal props={"w-full"}>
                    <div
                      className="flex items-center justify-between w-full cursor-pointer bg-linear-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <h2 className="text-lg">{faq.question}</h2>

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          openIndex === index ? "rotate-180" : ""
                        } transition-all duration-500 ease-in-out`}
                      >
                        <path
                          d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                          stroke="#1D293D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Reveal>
                  <Reveal props={"w-full"}>
                    <p
                      className={`text-lg text-slate-500 px-4 transition-all duration-500 ease-in-out ${
                        openIndex === index
                          ? "opacity-100 max-h-75 translate-y-0 pt-4"
                          : "opacity-0 max-h-0 -translate-y-2"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
