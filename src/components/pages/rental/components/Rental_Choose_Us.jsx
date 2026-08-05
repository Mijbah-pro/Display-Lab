import Reveal from "@/components/utils/Reveal";
import { Monitor, Zap, ShieldCheck, Maximize2, Palette, Banknote } from "lucide-react";

const features = [
    {
        name: 'Premium Fleet',
        description: 'Newest commercial-grade displays and LED technology.',
        icon: <Monitor className="size-5 text-white" strokeWidth={2.5} />,
    },
    {
        name: 'Rapid Deployment',
        description: '48-hour setup readiness for any event.',
        icon: <Zap className="size-5 text-white fill-white" strokeWidth={2.5} />,
    },
    {
        name: 'White Glove Service',
        description: 'Dedicated technicians from install to teardown.',
        icon: <ShieldCheck className="size-5 text-white" strokeWidth={2.5} />,
    },
    {
        name: 'Scalability',
        description: 'Single screens to massive multi-zone LED walls.',
        icon: <Maximize2 className="size-5 text-white" strokeWidth={2.5} />,
    },
    {
        name: 'Content Support',
        description: 'In-house creative team for motion graphics and templates.',
        icon: <Palette className="size-5 text-white" strokeWidth={2.5} />,
    },
    {
        name: 'Transparent Pricing',
        description: 'Flat-rate packages, no hidden fees.',
        icon: <Banknote className="size-5 text-white" strokeWidth={2.5} />,
    },
]

function Rental_Choose_Us() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal props={"w-full"} >

                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 h2_text">
                        The Rental Solutions Advantage
                    </h2>
                    <p className="mt-6 text-[1rem] text-gray-600 max-w-3xl mx-auto">
                        Why leading brands, agencies, and event producers choose Display Lab's Rental Division.
                    </p>
                </div>
                </Reveal>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <Reveal props={"w-full"} >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col items-start bg-white border border-slate-200/50 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex size-10 items-center justify-center rounded-lg bg-[#003452] text-white mb-5 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#003452] tracking-tight leading-snug">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Rental_Choose_Us;