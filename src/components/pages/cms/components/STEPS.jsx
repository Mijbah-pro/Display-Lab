import Image from "next/image";

function STEPS_SECTION() {
  const steps = [
    {
      image: "/images/advertisement/Shwroom.png",
      number: "1",
      title: "Connect Your Screen",
      description:
        "Install the player on your device and connect it to any screen.",
    },
    {
      image: "/images/advertisement/Shoopingmall.png",
      number: "2",
      title: "Upload or Create Content",
      description:
        "Add images, videos, dashboards, or templates through the cloud dashboard.",
    },
    {
      image: "/images/advertisement/Bank12.png",
      number: "3",
      title: "Publish to Displays",
      description:
        "Assign content to screens and schedule when it should appear. Your screens update automatically in real time.",
    },
  ];
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Display Lab Digital Signage In 3 Easy Steps
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Setting up digital signage is simple.
          </p>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-5">
            {steps.map((step, index) => (
              <div className="w-sm" key={index}>
                <div className="image mb-4">
                  <Image
                    width={1000}
                    height={1000}
                    src={step?.image}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 ">
                  <span className="bg-[#125884] px-4 py-2 rounded-md text-white">
                    {step?.number}
                  </span>{" "}
                  {step?.title}
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {step?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default STEPS_SECTION;
