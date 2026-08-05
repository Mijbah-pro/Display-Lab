import Image from "next/image";
import Link from "next/link";

function Products() {
  const Products = [
    {
      id: 1,
      name: "Ultra Thin Dual Side Stand Display",
      image: "/images/products/product-1.png",
    },
    {
      id: 2,
      name: "Digital Stand Kiosk",
      image: "/images/products/product-2.png",
    },
    {
      id: 3,
      name: "3D Holographic Fan",
      image: "/images/products/product-3.png",
    },
    {
      id: 4,
      name: "Self Ordering Kiosk",
      image: "/images/products/product-4.png",
    },
    {
      id: 5,
      name: "Wall Mounted Display",
      image: "/images/products/product-5.png",
    },
    {
      id: 6,
      name: "Slim Floor Standing Kiosk",
      image: "/images/products/product-6.png",
    },
    {
      id: 7,
      name: "Smart Digital Poster",
      image: "/images/products/product-7.png",
    },
    {
      id: 8,
      name: "High Brightness Window Display",
      image: "/images/products/product-8.png",
    },
    {
      id: 9,
      name: "Interactive Flat Panel",
      image: "/images/products/product-9.png",
    },
    {
      id: 10,
      name: "IP65 Outdoor Kiosk",
      image: "/images/products/product-10.png",
    },
    {
      id: 11,
      name: "Ultra Slim Wall Mount Display",
      image: "/images/products/product-11.png",
    },
    {
      id: 12,
      name: "Digital Menu Board",
      image: "/images/products/12.png",
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
