import Image from "next/image";
import Link from "next/link";

function Products() {
  const Products = [
    {
      id: 1,
      name: "Ultra Thin Dual Side Stand Display",
      image: "/images/products/Ultra_Thin_Dual_Side_Stand_Display.png",
    },
    {
      id: 2,
      name: "Digital Stand Kiosk",
      image: "/images/products/Digital_Stand_Kiosk.png",
    },
    {
      id: 3,
      name: "3D Holographic Fan",
      image: "/images/products/Digital_Stand_Kiosk.png",
    },
    {
      id: 4,
      name: "Self Ordering Kiosk",
      image: "/images/products/Digital_Stand_Kiosk.png",
    },
    {
      id: 5,
      name: "Wall Mounted Display",
      image: "/images/products/Digital_Poster_Display.png",
    },
    {
      id: 6,
      name: "Slim Floor Standing Kiosk",
      image: "/images/products/Window_Display.png",
    },
    {
      id: 7,
      name: "Smart Digital Poster",
      image: "/images/products/K_Style_Presentation.png",
    },
    {
      id: 8,
      name: "High Brightness Window Display",
      image: "/images/products/Outdoor_Digital_A_Display.png",
    },
    {
      id: 9,
      name: "Interactive Flat Panel",
      image: "/images/products/Digital_Menu_Board .png",
    },
    {
      id: 10,
      name: "IP65 Outdoor Kiosk",
      image: "/images/products/Digital_Menu_Board.png",
    },
    {
      id: 11,
      name: "Ultra Slim Wall Mount Display",
      image: "/images/products/GOBO_Projector.png",
    },
    {
      id: 12,
      name: "Digital Menu Board",
      image: "/images/products/3D_Holographic_Fan.png",
    },
  ];

  return (
    <>
      <div className="space-large"></div>
      <div className="flex flex-col gap-20">
        <div>
          <h1 className="title text-center mr_b">Display Lab Products</h1>

          <p className="section_desc">
            Explore our range of digital signage displays for various
            applications.
          </p>

          <div className="four_columns_items">
            {Products.map((product) => (
              <Link target="_blank" href={`/details?id=${product?.id}`} key={product?.id} className="single_product">
                <Image
                  src={product?.image}
                  width={200}
                  height={100}
                  className="single_product_image"
                  alt={product?.name}
                ></Image>

                <h4 className="single_product_name">{product?.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        <Link className="button" href={"/products"}>
          View All Products
        </Link>
      </div>
    </>
  );
}

export default Products;
