"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // optional icon (npm i lucide-react)

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-50 fixed bottom-6 right-6 p-3 rounded-full bg-[#105783] text-white shadow-lg transition-all duration-300 hover:bg-[#003051] hover:scale-110 cursor-pointer ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
