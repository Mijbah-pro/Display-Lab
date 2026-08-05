import Reveal from "@/components/utils/Reveal";
import Image from "next/image";

function Rental_division_service_model() {
  const features = [
    {
      id: '01',
      name: 'Site Survey & Planning',
      description:
        'Pre-event walkthroughs and technical assessments to ensure flawless execution on the day.',
    },
    {
      id: '02',
      name: 'Professional Installation',
      description: 'Certified AV technicians handle mounting, cabling, configuration, and signal testing.',
    },
    {
      id: '03',
      name: 'Live Event Support',
      description: 'On-site or remote technical support throughout your event to handle any real-time needs.'
    },
    {
      id: '04',
      name: 'Teardown & Logistics',
      description: 'Efficient, damage-free breakdown and return logistics — fully managed by our crew.'
    },
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal props={"w-full"} >

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Badge */}
          <div className="lg:col-span-5 relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0 pb-6 pr-6 lg:pb-0 lg:pr-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200">
              <Image
                alt="Certified AV technician working on modular LED display panels"
                src="/images/pages/rental/divition_service_model/divition_service_model.avif"
                width={600}
                height={650}
                className="w-full h-auto object-cover aspect-[4/5] scale-100 hover:scale-102 transition-transform duration-500 ease-out"
                priority
              />
            </div>
            
            {/* White-Glove Badge */}
            <div className="absolute -bottom-2 right-2 sm:bottom-[-16px] sm:right-[-16px] bg-[#003452] text-white py-5 px-6 rounded-2xl shadow-xl z-20 w-56 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-xl font-bold tracking-tight leading-none">White-Glove</div>
              <div className="text-xs text-sky-400 font-semibold mt-2 tracking-wide uppercase">Managed Deployment</div>
            </div>
          </div>

          {/* Right Column: Copy & Process Steps */}
          <div className="lg:col-span-7 lg:pl-4">
            <h2 className="text-3xl md:text-[42px] md:leading-[1.15] font-bold tracking-tight text-[#003452]">
              We Don't Just Drop Off Screens.<br />
              <span className="text-[#0082C8]">We Own the Outcome.</span>
            </h2>
            
            <p className="mt-6 text-[15px] md:text-base leading-relaxed text-slate-500 font-medium max-w-2xl">
              Display Lab's Rental Solutions provides white-glove service from quote to teardown. 
              Our certified technicians handle every detail so you get a seamless experience.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-5 group">
                  {/* Step Number Circle */}
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#f0f5fa] text-[#003452] text-sm font-bold flex-shrink-0 shadow-sm border border-slate-100 group-hover:bg-[#003452] group-hover:text-white transition-colors duration-300">
                    {feature.id}
                  </div>
                  
                  {/* Step Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#003452] group-hover:text-[#0082C8] transition-colors duration-200">
                      {feature.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Rental_division_service_model;