import Image from "next/image";

function Rental_2() {
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
  return (
    <>
    <div className="space-large"></div>
      <h3 className="title text-center mr_b">
        Display Lab Rental Produts
      </h3>

      <p className="section_desc">
        Flexible rental options for short-term and long-term digital signage
        needs.
      </p>

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
    </>
  );
}

export default Rental_2;
