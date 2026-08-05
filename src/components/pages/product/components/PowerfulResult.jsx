"use client";
import Reveal from "@/components/utils/Reveal";
import { Monitor, User, FileText, Wrench, Rocket, Headphones } from "lucide-react";

function PowerfulResult() {
  const steps = [
    {
      number: 1,
      title: "Choose Your Display",
      description: "Select the right display for your business needs.",
      icon: Monitor,
    },
    {
      number: 2,
      title: "Request Consultation",
      description: "Our experts understand your goals and requirements.",
      icon: User,
    },
    {
      number: 3,
      title: "Content Setup",
      description: "We help you create and prepare engaging content.",
      icon: FileText,
    },
    {
      number: 4,
      title: "Installation",
      description: "Professional installation by our certified technicians.",
      icon: Wrench,
    },
    {
      number: 5,
      title: "Go Live",
      description: "Your content goes live across screens seamlessly.",
      icon: Rocket,
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "24/7 support to keep your screens running smoothly.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <Reveal props={"mx-auto"} >
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center">
            Simple Steps. <span className="text-sky-600">Powerful Results.</span>
          </h2>
        </div>
        </Reveal>

        {/* Process Flow Wrapper */}
        <div className="relative">
          
          {/* Horizontal Dashed Connection Line (Desktop only) */}
          <div className="absolute top-12 left-[8%] right-[8%] border-t-2 border-dashed border-sky-300/30 hidden lg:block z-0" />
          <Reveal props={"w-full"} >
          {/* Grid Layout of Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center relative group">
                  
                  {/* Circle Icon Container */}
                  <div className="w-20 h-20 rounded-full border border-slate-100 bg-white shadow-md shadow-slate-200/50 flex items-center justify-center mb-6 relative z-10 hover:shadow-lg hover:border-sky-200/50 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-slate-700/90 group-hover:text-sky-600 transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Vertical Connection Line (Mobile & Tablet) */}
                  {index < 5 && (
                    <div className="lg:hidden absolute top-20 bottom-[-48px] left-1/2 -translate-x-1/2 border-l-2 border-dashed border-sky-300/30 z-0 h-12" />
                  )}

                  {/* Step Number & Title */}
                  <div className="flex items-center gap-2 justify-center mb-2.5 z-10">
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-sm shadow-sky-600/20">
                      {step.number}
                    </span>
                    <h3 className="font-bold text-slate-800 text-sm md:text-[15px] tracking-tight whitespace-nowrap">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-slate-500 text-xs md:text-[13px] leading-relaxed max-w-[170px] z-10 opacity-90">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}

export default PowerfulResult;
