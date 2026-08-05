import Image from "next/image";
import Link from "next/link";
import Reveal from "../utils/Reveal";

function SingleSolutionCard2({ card }) {
  return (
    <Reveal props={'w-full'}>
      <Link
        href={card.link}
        target="_blank"
        className="group relative bg-white rounded-xl p-8 shadow-sm overflow-hidden h-64 flex gap-2 flex-col justify-center items-center text-center"
      >
        {/* Front */}
        <Image src={card.icon} alt={card.title} width={120} height={80} />
        <h3 className="text-lg font-semibold mt-3">{card.title}</h3>
        <p className="text-sm mb-3">{card.description}</p>

        {/* Hover Details */}
        <div style={{backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${card.hoverImage})`}} className="w-full h-full absolute inset-0 text-white flex flex-col justify-center items-center  translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          
        </div>
      </Link>
    </Reveal>
  );
}

export default SingleSolutionCard2;
