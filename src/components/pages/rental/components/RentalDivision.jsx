import Reveal from "@/components/utils/Reveal";

export default function RentalDivision() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-16 lg:overflow-visible lg:px-0">
      <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-10">
          
          <Reveal props={"w-full"} >

          {/* IMAGE CONTAINER (Moved to the Left Side on desktop via lg:col-start-1) */}
          <div className="lg:sticky lg:top-20 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden mx-auto">
            <img
              alt="Display Lab's Premium Rental Devices"
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/2v6wxo9tk6qxbvk/generated-images/I38D9RG_qphIFCV0q8dwO.jpg"
              className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </div> 
          </Reveal>
<Reveal props={"w-full"} >
  
          {/* TEXT CONTENT CONTAINER (Moved to the Right Side on desktop via lg:col-start-2) */}
          <div className="w-full lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:gap-x-8">
            <div className="lg:pl-4"> {/* Changed lg:pr-4 to lg:pl-4 for better breathing room near the image */}
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Display Lab's Rental Devices <br /> Built for Impact
                </h1>
                
                <div className="max-w-xl text-lg md:text-xl text-gray-600 mb-8 mx-auto lg:mx-0 lg:max-w-lg">
                  <p>
                    Display Lab is a full-service display technology company with multiple service wings, built for businesses that demand more. This deck focuses on our Rental Solutions division, which specializes in short-term and event-based digital display rentals for product launches, brand activations, corporate summits, retail environments, and experiential marketing.
                  </p>
                  <br />
                  <p>
                    From single-screen setups to multi-zone LED walls, our premium rental fleet is ready to deploy. We handle logistics, installation, configuration, and on-site support so your team can focus on delivering an exceptional experience.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="px-2 py-2 md:px-5 md:py-5 text-center bg-[#005582] rounded-2xl flex flex-col items-center justify-center text-white text-base md:text-2xl font-bold mt-6 gap-5">
                      <p>500+</p> 
                      <p className="md:text-xl">Events Powered</p>
                    </div>
                    <div className="px-2 py-2 md:px-5 md:py-5 text-center bg-[#005582] rounded-2xl flex flex-col items-center justify-center text-white text-base md:text-2xl font-bold mt-6 gap-5">
                      <p>48hr</p> 
                      <p className="text-sm md:text-xl">Deployment Ready</p>
                    </div>
                    <div className="px-2 py-2 md:px-5 md:py-5 text-center bg-[#005582] rounded-2xl flex flex-col items-center justify-center text-white text-base md:text-2xl font-bold mt-6 gap-5">
                      <p>99%</p> 
                      <p className="md:text-xl">Uptime Record</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</Reveal>
          
        </div>
      </div>
    </div>
  );
}