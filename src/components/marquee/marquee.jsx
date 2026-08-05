import Image from "next/image";
import Marquee from "react-fast-marquee";

function MarqueeSection({ images }) {
  
  return (
    <>
      <Marquee pauseOnHover direction="left">
        {images.map((image, index) => (
          <div className="relative group rounded-md overflow-hidden mx-2 flex flex-col gap-4" key={index}>
            {/* Image */}
            <Image
              src={image.src}
              alt={`slide-${index}`}
              width={400}
              height={400}
              className="w-full h-55 md:w-87.25 md:h-48 lg:w-139.75 lg:h-79 object-cover 
    transform transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center 
    opacity-0 group-hover:opacity-100 
    transition-opacity duration-700 ease-in-out delay-100"
            >
              {/* Dark layer */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text */}
              <p
                className="relative z-10 text-white font-semibold text-2xl text-center 
      transform translate-y-4 group-hover:translate-y-0 
      transition duration-700 ease-in-out"
              >
                {image.label}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
      <div className="mt-4"></div>
      <Marquee pauseOnHover direction="right">
        {images.map((image, index) => (
          <div className="relative group rounded-md overflow-hidden mx-2 flex flex-col gap-4">
            {/* Image */}
            <Image
              src={image.src}
              alt={`slide-${index}`}
              width={400}
              height={400}
              className="w-full h-55 md:w-87.25 md:h-48 lg:w-139.75 lg:h-79 object-cover 
    transform transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center 
    opacity-0 group-hover:opacity-100 
    transition-opacity duration-700 ease-in-out delay-100"
            >
              {/* Dark layer */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text */}
              <p
                className="relative z-10 text-white font-semibold text-2xl text-center 
      transform translate-y-4 group-hover:translate-y-0 
      transition duration-700 ease-in-out"
              >
                {image.label}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
}

export default MarqueeSection;
