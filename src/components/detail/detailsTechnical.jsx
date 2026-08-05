function DetailsTechnical({ productData }) {    
  if (!productData) return null;

  const displayPerformance = [
    { name: "Resolution", value: productData.resolution },
    { name: "Brightness", value: productData.brightness },
    { name: "Response Time", value: productData.response_time },
    { name: "Contrast", value: productData.contrast },
    { name: "Color Gamut", value: productData.color_gamut },
    { name: "Viewing Angle", value: productData.viewing_angle || "89°/89°/89°/89° (CR≥10)" }
  ];

  const systemConnectivity = [
    { name: "OS", value: productData.operating_system },
    { name: "RAM / ROM", value: productData.ram_rom },
    { name: "Interfaces", value: productData.interfaces },
    { name: "Backlight", value: productData.backlight },
    { name: "Control", value: productData.control },
    { name: "CMS Software", value: productData.cms_software }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Display & Technical Specifications
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-4 rounded-2xl bg-[#84c1fa]">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Display Performance</h3>
                <div className="grid lg:grid-cols-2 gap-4 items-center">
                    {displayPerformance?.map(((singlePerformace,index) => (
                        <div key={index} className="p-4 bg-[#cee6fd] rounded-2xl">
                        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{singlePerformace?.name}</h4>
                        <p className="text-base font-semibold leading-relaxed">{singlePerformace?.value}</p>
                    </div>
                    )))}
                </div>
            </div>
            <div className="p-4 rounded-2xl ">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">System & Connectivity</h3>
                <div className="grid lg:grid-cols-2 gap-4 items-center">
                    {systemConnectivity?.map(((singleConnectivity,index) => (
                        <div key={index} className="p-4 border-2 border-[#cee6fd] rounded-2xl">
                        <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{singleConnectivity?.name}</h4>
                        <p className="text-base font-semibold leading-relaxed">{singleConnectivity?.value}</p>
                    </div>
                    )))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsTechnical;
