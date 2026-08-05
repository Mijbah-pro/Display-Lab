import Reveal from "@/components/utils/Reveal";
import { TrendingUp, BarChart3 } from "lucide-react";

function Rental_Analytics() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Reveal props={"w-full"} >

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="flex flex-col text-left">
                        <h2 className="mt-2 h2_text text-left">
                            Measure What Matters Most
                        </h2>
                        <p className="mt-6 text-[15px] leading-relaxed text-slate-600 font-medium max-w-xl">
                            Every deployment comes with access to our proprietary analytics dashboard. Track screen uptime, content performance, and engagement zones with clear, actionable data.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                            {/* Card 1 - Real-Time Monitoring */}
                            <div className="bg-[#f4f7fc] border border-slate-200/50 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-all duration-300">
                                <TrendingUp className="size-6 text-[#003452] mb-4" strokeWidth={2.5} />
                                <h3 className="text-lg font-bold text-[#003452] tracking-tight">
                                    Real-Time Monitoring
                                </h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 font-medium">
                                    Track screen status and content playback logs from any device.
                                </p>
                            </div>

                            {/* Card 2 - Post-Event Reports */}
                            <div className="bg-[#f4f7fc] border border-slate-200/50 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-all duration-300">
                                <BarChart3 className="size-6 text-[#003452] mb-4" strokeWidth={2.5} />
                                <h3 className="text-lg font-bold text-[#003452] tracking-tight">
                                    Post-Event Reports
                                </h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 font-medium">
                                    Uptime metrics and audience impressions summary after every event.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Mockup */}
                    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[380px] rounded-3xl bg-[#003452] shadow-2xl shadow-blue-950/20 overflow-visible">
                        {/* System Healthy Pill */}
                        <div className="absolute -top-4 -right-2 sm:-right-4 flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200/60 shadow-lg z-20">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-700 whitespace-nowrap">System Healthy</span>
                        </div>

                        {/* Subtle dashboard lines / grid for mockup feeling */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00283f] to-[#004770] opacity-95 z-0"></div>
                        <div className="absolute inset-0 rounded-3xl flex items-center justify-center p-6 sm:p-8 z-10 overflow-hidden">
                            <div className="w-full h-full border border-sky-500/10 rounded-2xl p-4 flex flex-col gap-4 opacity-75">
                                <div className="flex justify-between items-center border-b border-sky-500/10 pb-4">
                                    <div className="h-4 w-24 bg-sky-500/20 rounded-md"></div>
                                    <div className="flex gap-2">
                                        <div className="h-4 w-12 bg-sky-500/20 rounded-md"></div>
                                        <div className="h-4 w-12 bg-sky-500/20 rounded-md"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="h-16 bg-sky-500/10 rounded-xl border border-sky-500/5"></div>
                                    <div className="h-16 bg-sky-500/10 rounded-xl border border-sky-500/5"></div>
                                    <div className="h-16 bg-sky-500/10 rounded-xl border border-sky-500/5"></div>
                                </div>
                                <div className="h-full bg-sky-500/5 rounded-xl border border-sky-500/5 flex items-end p-3 gap-2">
                                    <div className="w-full h-[20%] bg-sky-500/20 rounded-t-sm"></div>
                                    <div className="w-full h-[45%] bg-[#38bdf8]/30 rounded-t-sm"></div>
                                    <div className="w-full h-[30%] bg-sky-500/20 rounded-t-sm"></div>
                                    <div className="w-full h-[60%] bg-[#38bdf8]/30 rounded-t-sm"></div>
                                    <div className="w-full h-[85%] bg-[#38bdf8] rounded-t-sm"></div>
                                    <div className="w-full h-[50%] bg-sky-500/20 rounded-t-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </Reveal>
            </div>
        </section>
    );
}

export default Rental_Analytics;