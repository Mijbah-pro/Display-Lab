import Image from "next/image";

function Packaging() {
  const parameters_packaging_data = [
    {
      size: "32 inch",
      cm: "160 × 18 × 65",
      weight: "23 KGS",
      backlightType: "LCD",
    },
    {
      size: "43 inch",
      cm: "190 × 18 × 80",
      weight: "35 KGS",
      backlightType: "LCD",
    },
    {
      size: "50 inch",
      cm: "195 × 18 × 89 ",
      weight: "45 KGS ",
      backlightType: "LCD",
    },
    {
      size: "55 inch",
      cm: "204 × 18 × 96",
      weight: "56 KGS ",
      backlightType: "LCD",
    },
  ];
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Machine Parameters & Packaging
          </h2>
          <p className="text-gray-600 text-lg">
            Available in four standard sizes. Shell constructed from aluminum
            alloy (frame) and sheet metal (back shell). Each unit ships with
            user manual, power cable, warranty card, allen key + base screws,
            and remote control.
          </p>
        </div>

        <div className="">

          <div className="overflow-auto rounded-lg shadow block">
            <table className="w-full">
              <thead className="bg-white border-b-2 ">
                <tr>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                    Size
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Package Dimensions (CM)
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Weight
                  </th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                    Backlight Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {parameters_packaging_data?.map((singlePackingData, index) => (
                  <tr
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    key={index}
                  >
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-bold text-blue-500 hover:underline"
                      >
                        {singlePackingData?.size}
                      </a>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {singlePackingData?.cm}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                        {singlePackingData?.weight}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {singlePackingData?.backlightType}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-semibold text-xs bg-blue-300 p-4 rounded-xl flex items-center gap-1 mt-4">
            <span>
              <Image className="w-3 rotate-90 inline" src={"/svg/details/sticky-note.svg"} width={100} height={100} alt="" />
            </span>{" "}
            Parameters are for reference only. All data are subject to the
            actual items.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Packaging;
