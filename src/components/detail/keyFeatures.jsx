import Image from "next/image";

function KeyFeatures({ productData }) {
  if (!productData) return null;

  const keyFeatureData = productData.key_features || [];

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Key Product Features
            </h2>
            <div className=" mt-10 flex flex-col gap-4">
              {keyFeatureData?.map((singleKeyFeature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Image
                    src={`/svg/details/${singleKeyFeature?.feature_imgUrl}`}
                    width={50}
                    height={50}
                    className=" w-[30px] sm:w-[40px]"
                    alt=""
                  />

                  <h3 className="text-lg sm:text-xl font-semibold">
                    {singleKeyFeature?.feature_title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {singleKeyFeature?.feature_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full">
            <Image src={productData.product_image || "/images/details/keyFeatureImg.png"} width={1000} height={1000} className="w-full h-full rounded-2xl shadow-md object-contain" alt="Key Features" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
