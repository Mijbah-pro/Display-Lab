"use client";

import Script from "next/script";

function CalandlyButton({classNamestyle, basicStyle, icon, text }) {
  return (
    <>
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Calendly Button */}
      <button
        onClick={() =>
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/displaylab/30min",
          })
        }
        className={`${basicStyle ? "w-xs sm:w-fit bg-cyan-600 text-white px-8 py-4 rounded font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer" : classNamestyle} `}
      >
        {icon ? icon : ""} {text ? text : ""}
      </button>
    </>
  );
}

export default CalandlyButton;
