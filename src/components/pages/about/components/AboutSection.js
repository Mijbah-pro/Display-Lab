import Image from "next/image";

function AboutSection() {
    const rental_Images = [
    {
      image: "/images/rental/rental2.png",
    },
    {
      image: "/images/rental/rental3.png",
    },
    {
      image: "/images/rental/rental4.png",
    },
    {
      image: "/images/rental/rental5.png",
    },
  ];
    return ( <>
    {/* Our Mission */}
    <div className="flex flex-col md:flex-row gap-10  px-10 py-2 justify-between items-center shadow-lg rounded-md">
                        <div className="w-xl">
                            <img className="w-full" src={"/images/about_us/about.png"} />
                            {/* <Image src={"public/images/about_us/about.png"} /> */}
                        </div>
                        <div className="w-xl">
                            <h4 className="text-center card_title mb-5">Our Mission</h4>
                            <p className="w-full text-xl text-center md:text-left">
                                At DisplayLab, our mission is to make communication effortless and impactful through powerful digital signage solutions. What began as a small team with a big idea has grown into a global company serving over 30,000 businesses, from storefronts to corporate offices and everything in between. We’re passionate about what we build because clear communication helps businesses connect, grow, and drive results that matter.
                            </p>
                        </div>
                        
    </div>

    {/* Our Vision */}
    <div className="space-large"></div>
      <h3 className="title text-center">
        Dispaly Lab In Action
      </h3>

      <div className="flex flex-wrap items-center justify-evenly mt-10 mx-auto gap-4">
        {rental_Images?.map((singleImage, index) => (
          <Image
            width={224}
            height={320}
            className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
            src={singleImage?.image}
            key={index}
            alt="rental_2"
          ></Image>
        ))}
      </div>
    </> );
}

export default AboutSection;