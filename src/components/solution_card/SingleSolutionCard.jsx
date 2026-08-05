import Image from "next/image";
import Link from "next/link";

function SingleSolutionCard({ card }) {
  return (
    <div className="bg-white rounded-xl p-6 flex gap-5 shadow-sm hover:shadow-md transition lg:w-sm">

      {/* Icon */}
      <div className="flex-shrink-0">
        <Image
          src={card.icon}
          alt={card.title}
          width={60}
          height={60}
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {card.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {card.description}
        </p>

        <Link
          href={card.link}
          className="text-[#3095b5] text-sm font-medium hover:underline"
        >
          {card.link_Text} &gt;
        </Link>
      </div>

    </div>
  );
}

export default SingleSolutionCard;