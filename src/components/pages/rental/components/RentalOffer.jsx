import Reveal from "@/components/utils/Reveal";
import Image from "next/image";

function RentalOffer() {
    const offerDatas = [
        {
            title: "LED Video Walls",
            desc: "Modular, scalable LED panels that create seamless, high-impact visual backdrops for stages, lobbies, and large venues.",
            img: "/images/pages/rental/offer/1.avif"
        },
        {
            title: "Large Format Displays",
            desc: "55' to 98' commercial-grade screens ideal for trade shows, retail activations, wayfinding, and corporate presentations.",
            img: "/images/pages/rental/offer/2.avif"
        },
        {
            title: "Digital Kiosks",
            desc: "Freestanding portrait and landscape kiosks with optional touch interactivity, perfect for lobbies, expos, and retail floors.",
            img: "/images/pages/rental/offer/3.avif"
        },
        {
            title: "Outdoor Displays",
            desc: "Weather-resistant, high-brightness outdoor screens built for festivals, sporting events, and open-air activations.",
            img: "/images/pages/rental/offer/4.avif"
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center">
                    <Reveal props={"w-full"} >

                    <h2 className="h2_text text-center">What We Offer</h2>
                    <p className="mt-6 title_desc max-w-2xl mx-auto">
                        A curated fleet of premium display technologies for every use case and venue size.
                    </p>
                    </Reveal>
                    <Reveal props={"w-full"} >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 sm:mt-20 w-full">
                        {offerDatas.map((offer, i) => (
                            <div 
                                key={i} 
                                className="flex flex-col overflow-hidden rounded-3xl bg-[#f4f7fc] border border-slate-200/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative w-full h-48 sm:h-52 flex-shrink-0">
                                    <Image 
                                        fill
                                        className="object-cover" 
                                        src={offer.img} 
                                        alt={offer.title} 
                                        sizes="(max-w-768px) 100vw, 25vw"
                                    />
                                </div>
                                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                                    <div>
                                        <h4 className="text-xl font-bold text-[#003452] tracking-tight leading-snug">
                                            {offer.title}
                                        </h4>
                                        <p className="mt-3 text-[14px] leading-relaxed text-slate-600 font-medium">
                                            {offer.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#003452] hover:text-[#005582] cursor-pointer group transition-colors">
                                            View Specs 
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default RentalOffer;