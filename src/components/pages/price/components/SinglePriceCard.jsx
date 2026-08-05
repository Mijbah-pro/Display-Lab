import { FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";

function SinglePriceCard({ plan }) {
  return (
    <div className="w-full md:w-72 border rounded-xl shadow bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#005582] text-white text-center py-3 font-semibold text-lg">
        {plan.title}
      </div>

      {/* Price */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold">{plan.price}</h2>
        <p className="text-sm text-gray-500">{plan.subtitle}</p>
      </div>

      {/* Features */}
      <div className="px-6 pb-6">
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center justify-between text-sm">
              <span>{feature.name}</span>

              {feature.available ? (
                <FaCheckCircle className="w-5 h-5 text-[#005582]" />
              ) : (
                <GoXCircleFill className="w-5 h-5 text-red-500" />
              )}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="mt-6 w-full bg-[#005582] text-white py-2 rounded-md hover:bg-sky-700 transition-colors duration-200 cursor-pointer">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default SinglePriceCard;
