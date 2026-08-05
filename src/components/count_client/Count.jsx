"use client";

import { animate, inView } from "motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 156, label: "Projects Completed" },
  { value: 227, label: "Satisfied Clients" },
  { value: 91, label: "Success Rate", suffix: "%" },
  { value: 30, label: "Years Experience", suffix: "+" },
];

function Count() {
  const containerRef = useRef(null);
  const refs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const stop = inView(containerRef.current, () => {
      refs.current.forEach((el, i) => {
        if (!el) return;

        const target = stats[i].value;

        animate(0, target, {
          duration: 2,
          easing: "ease-out",
          onUpdate: (v) => {
            const suffix = stats[i].suffix || "";
            el.textContent =
              Math.floor(v).toLocaleString() + suffix;
          },
        });
      });

      // stop observing after first trigger
      stop();
    });
  }, []);

  return (
    <div className="py-16 md:py-24 bg-[#3095b5]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center text-white">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center relative"
            >
              <h2
                ref={(el) => (refs.current[i] = el)}
                className="text-4xl md:text-5xl font-bold"
              >
                0
              </h2>

              <p className="mt-2 text-sm md:text-base opacity-90">
                {stat.label}
              </p>

              {i !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Count;