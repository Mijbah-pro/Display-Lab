import Link from "next/link";
import { ClipboardCheck, Handshake, Truck } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

const features = [
  {
    name: 'Submit Your Brief',
    description: 'Share your event details, venue size, dates, and display requirements using our quick online form or by calling our team directly.',
    icon: <ClipboardCheck className="size-6 text-[#003452]" strokeWidth={2} />,
  },
  {
    name: 'Receive Your Custom Quote',
    description: 'Our solutions team reviews your needs and delivers a transparent, itemized proposal within one business day no sales pressure.',
    icon: <Handshake className="size-6 text-[#003452]" strokeWidth={2} />,
  },
  {
    name: 'We Handle Everything',
    description: 'From delivery and installation to live support and teardown Display Lab manages every technical detail so you can focus on your audience.',
    icon: <Truck className="size-6 text-[#003452]" strokeWidth={2} />,
  },
]

function Rental_Started() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal props={"w-full"} >

        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 h2_text text-center">
            Ready to Elevate Your Display?
          </h2>
          <p className="mt-6 text-[1rem] text-gray-600 max-w-3xl mx-auto text-center">
            Tell us about your event, space, or project — and our Rental Solutions team will design a custom rental package that fits your timeline, budget, and creative vision.
          </p>
        </div>
        </Reveal>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <Reveal props={"w-full"} >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col bg-white border border-slate-200/50 rounded-2xl p-6 sm:p-8 shadow-lg shadow-slate-100/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 flex items-center justify-start">
                  {feature.icon}
                </div>
                <div className="w-full border-t border-slate-800 pt-4 flex-grow flex flex-col justify-start">
                  <h3 className="text-xl font-bold text-[#003452] tracking-tight leading-snug">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-500 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
          <Reveal props={"w-full"} >

          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <Link
              href=""
              className="px-6 py-3.5 bg-[#3095b5] hover:bg-[#257d99] text-white font-bold rounded-lg shadow-sm transition-all text-center min-w-[200px]"
            >
              Request A Quote
            </Link>
            <Link
              href=""
              className="px-6 py-3.5 bg-[#3095b5] hover:bg-[#257d99] text-white font-bold rounded-lg shadow-sm transition-all text-center min-w-[200px]"
            >
              Schedule A Consultation
            </Link>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Rental_Started;