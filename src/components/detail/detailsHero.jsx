"use client"
import Link from "next/link";

function DetailsHero({ productData }) {
  if (!productData) return null;

  return (
    <>
      <div className="py-12 md:py-20">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {productData.product_name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                {productData.product_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <span className="bg-cyan-600 text-white px-4 py-2 rounded font-semibold text-base shadow-lg flex items-center justify-center gap-2 text-center">
                  {productData.control?.toUpperCase()} | {productData.operating_system?.toUpperCase()}
                </span>
                <span className="bg-white text-cyan-600 border border-cyan-600 px-4 py-2 rounded font-semibold text-base shadow-lg flex items-center justify-center gap-2 text-center">
                  {productData.screen_size?.toUpperCase()} INCH
                </span>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img 
                className="max-h-[500px] object-contain rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105" 
                src={productData.product_image} 
                alt={productData.product_name} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsHero;
