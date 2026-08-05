"use client";
import { useState } from "react";

export default function PriceCards() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const plans = [
    {
      name: "Basic",
      screen: "7 Days",
      monthly: 0,
      annual: 0,
      features: [
      {
        feature_name:"Display Device",
        feature_has: true,
      },
      {
        feature_name:"Asset Storage",
        feature_has: true,
      },
      {
        feature_name:"Playlists",
        feature_has: true,
      },
      
      {
        feature_name:"Schedule",
        feature_has: false,
      },
      {
        feature_name:"Templates",
        feature_has: false,
      },
      {
        feature_name:"Canvas Template Create",
        feature_has: true,
      },
      {
        feature_name:"Works Offline",
        feature_has: true,
      },
      {
        feature_name:"4k Resolution Support",
        feature_has: true,
      },
      {
        feature_name:"Support All Formats",
        feature_has: true,
      },
      {
        feature_name:"Only Single User",
        feature_has: true,
      },
      {
        feature_name:"Custom User Role",
        feature_has: false,
      },
      {
        feature_name:"Drag And Drop",
        feature_has: true,
      },
      ],
    },
    {
      name: "Standard",
      screen: "screen/month",
      monthly: 10,
      annual: 8,
      features: [
      {
        feature_name:"Display Device",
        feature_has: true,
      },
      {
        feature_name:"Asset Storage",
        feature_has: true,
      },
      {
        feature_name:"Playlists",
        feature_has: true,
      },
      
      {
        feature_name:"Schedule",
        feature_has: false,
      },
      {
        feature_name:"Templates",
        feature_has: false,
      },
      {
        feature_name:"Canvas Template Create",
        feature_has: false,
      },
      {
        feature_name:"Works Offline",
        feature_has: true,
      },
      {
        feature_name:"4k Resolution Support",
        feature_has: true,
      },
      {
        feature_name:"Support All Formats",
        feature_has: true,
      },
      {
        feature_name:"Only Single User",
        feature_has: true,
      },
      {
        feature_name:"Custom User Role",
        feature_has: false,
      },
      {
        feature_name:"Drag And Drop",
        feature_has: true,
      },
      ],
    },
    {
      name: "Pro Plus",
      screen: "screen/month",
      monthly: 15,
      annual: 12,
      popular: true,
      features: [
      {
        feature_name:"Display Device",
        feature_has: true,
      },
      {
        feature_name:"Asset Storage",
        feature_has: true,
      },
      {
        feature_name:"Playlists",
        feature_has: true,
      },
      
      {
        feature_name:"Schedule",
        feature_has: true,
      },
      {
        feature_name:"Templates",
        feature_has: true,
      },
      {
        feature_name:"Canvas Template Create",
        feature_has: true,
      },
      {
        feature_name:"Works Offline",
        feature_has: true,
      },
      {
        feature_name:"4k Resolution Support",
        feature_has: true,
      },
      {
        feature_name:"Support All Formats",
        feature_has: true,
      },
      {
        feature_name:"Only Single User",
        feature_has: true,
      },
      {
        feature_name:"Custom User Role",
        feature_has: false,
      },
      {
        feature_name:"Drag And Drop",
        feature_has: true,
      },
      ],
    },
    {
      name: "Engage",
      screen: "screen/month",
      monthly: 30,
      annual: 25,
      features: [
      {
        feature_name:"Display Device",
        feature_has: true,
      },
      {
        feature_name:"Asset Storage",
        feature_has: true,
      },
      {
        feature_name:"Playlists",
        feature_has: true,
      },
      
      {
        feature_name:"Schedule",
        feature_has: true,
      },
      {
        feature_name:"Templates",
        feature_has: true,
      },
      {
        feature_name:"Canvas Template Create",
        feature_has: true,
      },
      {
        feature_name:"Works Offline",
        feature_has: true,
      },
      {
        feature_name:"4k Resolution Support",
        feature_has: true,
      },
      {
        feature_name:"Support All Formats",
        feature_has: true,
      },
      {
        feature_name:"Only Single User",
        feature_has: true,
      },
      {
        feature_name:"Custom User Role",
        feature_has: true,
      },
      {
        feature_name:"Drag And Drop",
        feature_has: true,
      },
      ],
    },
  ];

  const rates = {
    USD: 1,
    EUR: 0.92,
    AUD: 1.5,
    CAD: 1.35,
    GBP: 0.79,
  };

  const symbols = {
    USD: "$",
    EUR: "€",
    AUD: "AU$",
    CAD: "CA$",
    GBP: "£",
  };

  const convertPrice = (price) => {
    return (price * rates[currency]).toFixed(2);
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Find The <span className="text-[#3095b5]">Best Plan</span> For Your Business
        </h2>

        {/* Toggles */}
        <div className="flex flex-wrap justify-between items-center mb-10 gap-4">

          {/* Billing Toggle */}
          <div className="flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full ${
                billing === "monthly" ? "bg-[#3095b5] text-white" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 rounded-full ${
                billing === "annual" ? "bg-[#3095b5] text-white" : ""
              }`}
            >
              Annual
            </button>
          </div>

          {/* Currency */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {plans.map((plan, i) => {
            const basePrice =
              billing === "monthly" ? plan.monthly : plan.annual;

            return (
              <div
                key={i}
                className={`p-6 rounded-xl border bg-white flex flex-col ${
                  plan.popular
                    ? "border-[#3095b5] shadow-xl scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-semibold text-[#3095b5] mb-2 text-center">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2 text-center">{plan.name}</h3>

                <p className="text-3xl font-bold mb-1 text-center">
                  {symbols[currency]}
                  {convertPrice(basePrice)}
                </p>

                <p className="text-sm text-gray-500 mb-4 text-center">
                  {plan.screen}
                </p>

                <button
                  className={`w-full py-2 mb-4 rounded-md ${
                    plan.popular
                      ? "bg-black text-white"
                      : "bg-[#3095b5] text-white"
                  }`}
                >
                  Try For Free
                </button>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex justify-between items-start gap-2">
                      <span>{feature?.feature_name}</span>
                      {feature?.feature_has ? (<span className="text-white w-4 h-4 bg-green-400 p-2 rounded-2xl relative"><span className="absolute top-0 left-[.9] flex justify-center items-center w-full h-full text-[10px]">✔ </span></span>) : (<span className="text-white w-4 h-4 bg-red-400 p-2 rounded-2xl relative"><span className="absolute top-0 left-[.9] flex justify-center items-center w-full h-full text-[10px]">✘</span></span>) }
                      
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/*  */}
      </div>
    </div>
  );
}