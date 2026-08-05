"use client";
import Reveal from "@/components/utils/Reveal";
import React from "react";

function PriceCard2({ billing, symbols, rates, currency, industry = "all" }) {
    const reasons = {
        monthly: {
            usa: [20, 24, 28],
            erop: [12, 15, 18],
            aud: [23, 27, 30],
            cad: [18, 22, 25],
            gbp: [10, 12, 15],
        },
        annual: {
            usa: [18.5, 21, 25],
            erop: [10, 12, 15],
            aud: [20, 24, 28],
            cad: [15, 18, 22],
            gbp: [8, 10, 12],
        }
    };

    const currencyToKey = {
        USD: "usa",
        EUR: "erop",
        AUD: "aud",
        CAD: "cad",
        GBP: "gbp"
    };

    const getAddOnPrices = () => {
        const billingKey = billing === "monthly" ? "monthly" : "annual";
        const key = currencyToKey[currency] || "usa";
        const prices = reasons[billingKey][key];
        
        if (prices) return prices;
        
        // Safe fallback using rates conversion
        const baseUsaPrices = reasons[billingKey]["usa"];
        const currentRate = rates[currency] || 1;
        return baseUsaPrices.map(p => (p * currentRate));
    };

    const prices = getAddOnPrices();

    const addons = [
        {
            id: "videowall",
            title: "Video Wall",
            buttonText: "Build Your Video Wall",
            priceIndex: 0,
            unit: billing === "monthly" ? "per video wall/month" : "per video wall/year",
            highlightFor: ["retail"]
        },
        {
            id: "music",
            title: "Background Music",
            buttonText: "Play Background Music",
            priceIndex: 1,
            unit: billing === "monthly" ? "per screen/month" : "per screen/year",
            highlightFor: ["restaurants", "healthcare"]
        },
        {
            id: "presentation",
            title: "Wireless Presentation",
            buttonText: "Go Wireless For Meetings",
            priceIndex: 2,
            unit: billing === "monthly" ? "per screen/month" : "per screen/year",
            highlightFor: ["corporate", "education"]
        },
        {
            id: "ads",
            title: "Ads Portal",
            buttonText: "Learn More",
            priceIndex: null,
            unit: "for more details",
            highlightFor: []
        }
    ];

    const getHighlightLabel = (addonId) => {
        switch (industry) {
            case "retail":
                if (addonId === "videowall") return "Essential for Retail";
                break;
            case "restaurants":
                if (addonId === "music") return "Essential for Dining Vibe";
                break;
            case "healthcare":
                if (addonId === "music") return "Recommended for Patient Comfort";
                break;
            case "corporate":
                if (addonId === "presentation") return "Essential for Meeting Rooms";
                break;
            case "education":
                if (addonId === "presentation") return "Recommended for Classrooms";
                break;
            default:
                return null;
        }
        return null;
    };

    return (
        <div className="py-16 md:py-24 bg-gray-50 border-t border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal props={"w-full"} >
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
                    Optional Add-Ons
                </h2>
                <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
                    Enhance your screens with these specialized modules, dynamically priced for your billing selection.
                </p>
                </Reveal>
                <Reveal props={"w-full"} >
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addons.map((addon) => {
                        const isHighlighted = addon.highlightFor.includes(industry);
                        const highlightLabel = getHighlightLabel(addon.id);

                        return (
                            <div
                                key={addon.id}
                                className={`relative rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between transition-all duration-300 gap-4 ${
                                    isHighlighted
                                        ? "bg-slate-800 text-white border-2 border-[#3095b5] shadow-lg shadow-[#3095b5]/10 scale-[1.01]"
                                        : "bg-slate-700 text-white border border-slate-600 hover:border-slate-500"
                                }`}
                            >
                                {isHighlighted && highlightLabel && (
                                    <span className="absolute -top-3 right-6 bg-[#3095b5] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                                        {highlightLabel}
                                    </span>
                                )}

                                <div className="flex flex-col items-start">
                                    <h3 className="text-lg font-bold">{addon.title}</h3>
                                    <button className="mt-4 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200">
                                        {addon.buttonText}
                                    </button>
                                </div>

                                <div className="text-left sm:text-right w-full sm:w-auto">
                                    {addon.priceIndex !== null ? (
                                        <>
                                            <p className="text-2xl md:text-3xl font-extrabold text-[#3095b5]">
                                                {symbols}
                                                {prices[addon.priceIndex].toFixed(2)}
                                            </p>
                                            <p className="text-xs text-gray-300 mt-1">{addon.unit}</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-lg font-bold text-[#3095b5]">Contact Us</p>
                                            <p className="text-xs text-gray-300 mt-1">{addon.unit}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                </Reveal>
            </div>
        </div>
    );
}

export default PriceCard2;