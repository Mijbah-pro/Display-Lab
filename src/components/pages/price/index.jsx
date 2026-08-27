"use client";
import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";
import Reveal from "@/components/utils/Reveal";
import { useState } from "react";
import PriceCard2 from "./components/PriceCard2";
import PricingComparison from "./components/PricingComparison";


function Price() {

  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const plans = [
    {
      name: "Free",
      screen: "7 Days",
      monthly: 0,
      annual: 0,
      features: [
        {
          feature_name: "Display Device",
          feature_has: true,
        },
        {
          feature_name: "Asset Storage",
          feature_has: true,
        },
        {
          feature_name: "Playlists",
          feature_has: true,
        },

        {
          feature_name: "Schedule",
          feature_has: false,
        },
        {
          feature_name: "Templates",
          feature_has: false,
        },
        {
          feature_name: "Canvas Template Create",
          feature_has: true,
        },
        {
          feature_name: "Works Offline",
          feature_has: true,
        },
        {
          feature_name: "4k Resolution Support",
          feature_has: true,
        },
        {
          feature_name: "Support All Formats",
          feature_has: true,
        },
        {
          feature_name: "Only Single User",
          feature_has: true,
        },
        {
          feature_name: "Custom User Role",
          feature_has: false,
        },
        {
          feature_name: "Drag And Drop",
          feature_has: true,
        },
      ],
    },
    {
      name: "Standard",
      screen: "screen/month",
      regular_monthly_price: 15,
      regular_annual_price: 10,
      monthly: 10,
      annual: 8,
      features: [
        {
          feature_name: "Display Device",
          feature_has: true,
        },
        {
          feature_name: "Asset Storage",
          feature_has: true,
        },
        {
          feature_name: "Playlists",
          feature_has: true,
        },

        {
          feature_name: "Schedule",
          feature_has: false,
        },
        {
          feature_name: "Templates",
          feature_has: false,
        },
        {
          feature_name: "Canvas Template Create",
          feature_has: false,
        },
        {
          feature_name: "Works Offline",
          feature_has: true,
        },
        {
          feature_name: "4k Resolution Support",
          feature_has: true,
        },
        {
          feature_name: "Support All Formats",
          feature_has: true,
        },
        {
          feature_name: "Only Single User",
          feature_has: true,
        },
        {
          feature_name: "Custom User Role",
          feature_has: false,
        },
        {
          feature_name: "Drag And Drop",
          feature_has: true,
        },
      ],
    },
    {
      name: "Premium",
      screen: "screen/month",
      regular_monthly_price: 20,
      regular_annual_price: 10,
      monthly: 15,
      annual: 12,
      popular: true,
      features: [
        {
          feature_name: "Display Device",
          feature_has: true,
        },
        {
          feature_name: "Asset Storage",
          feature_has: true,
        },
        {
          feature_name: "Playlists",
          feature_has: true,
        },

        {
          feature_name: "Schedule",
          feature_has: true,
        },
        {
          feature_name: "Templates",
          feature_has: true,
        },
        {
          feature_name: "Canvas Template Create",
          feature_has: true,
        },
        {
          feature_name: "Works Offline",
          feature_has: true,
        },
        {
          feature_name: "4k Resolution Support",
          feature_has: true,
        },
        {
          feature_name: "Support All Formats",
          feature_has: true,
        },
        {
          feature_name: "Only Single User",
          feature_has: true,
        },
        {
          feature_name: "Custom User Role",
          feature_has: false,
        },
        {
          feature_name: "Drag And Drop",
          feature_has: true,
        },
      ],
    },
    {
      name: "Enterprise",
      screen: "screen/month",
      regular_monthly_price: 20,
      regular_annual_price: 15,
      monthly: 30,
      annual: 25,
      features: [
        {
          feature_name: "Display Device",
          feature_has: true,
        },
        {
          feature_name: "Asset Storage",
          feature_has: true,
        },
        {
          feature_name: "Playlists",
          feature_has: true,
        },

        {
          feature_name: "Schedule",
          feature_has: true,
        },
        {
          feature_name: "Templates",
          feature_has: true,
        },
        {
          feature_name: "Canvas Template Create",
          feature_has: true,
        },
        {
          feature_name: "Works Offline",
          feature_has: true,
        },
        {
          feature_name: "4k Resolution Support",
          feature_has: true,
        },
        {
          feature_name: "Support All Formats",
          feature_has: true,
        },
        {
          feature_name: "Only Single User",
          feature_has: true,
        },
        {
          feature_name: "Custom User Role",
          feature_has: true,
        },
        {
          feature_name: "Drag And Drop",
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
    <>
      <NavberMain />
      {/* <PriceCards /> */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal props={"w-full"} >
            {/* Header */}
            <h2 className="text-4xl font-bold text-center mb-10">
              Find The <span className="text-[#3095b5]">Best Plan</span> For Your Business
            </h2>
          </Reveal>

          <Reveal props={"w-full"} >
            {/* Toggles */}
            <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
              <div className="hidden md:flex"></div>
              {/* Billing Toggle */}
              <div className="flex bg-gray-200 rounded-full p-1">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-4 py-2 rounded-full cursor-pointer ${billing === "monthly" ? "bg-[#3095b5] text-white" : ""
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("annual")}
                  className={`px-4 py-2 rounded-full cursor-pointer ${billing === "annual" ? "bg-[#3095b5] text-white" : ""
                    }`}
                >
                  Annual
                </button>
              </div>

              {/* Currency */}
              <div className="relative inline-block">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="
                  appearance-none
                  w-28
                  px-4 py-2.5 pr-9
                  rounded-xl
                  border border-gray-200
                  bg-white
                  text-sm font-medium text-gray-700
                  shadow-sm
                  outline-none
                  cursor-pointer
                  transition-all duration-200
                  hover:border-gray-300 hover:shadow-md
                  focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                "
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="AUD">AUD</option>
                  <option value="CAD">CAD</option>
                  <option value="GBP">GBP</option>
                </select>

                {/* Custom arrow */}
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </Reveal>

          <Reveal props={"w-full"} >
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {plans.map((plan, i) => {
                const basePrice =
                  billing === "monthly" ? plan.monthly : plan.annual;
                const regularPrice =
                  billing === "monthly" ? plan.regular_monthly_price : plan.regular_annual_price;
                const screen =
                  billing === "monthly" ? "screen/monthly" : "screen/annualy"

                return (
                  <div
                    key={i}
                    className={`p-6 rounded-xl border bg-white flex flex-col ${plan.popular
                      ? "border-[#3095b5] shadow-xl scale-105"
                      : ""
                      }`}
                  >
                    {plan.popular && (
                      <div className="text-xs font-semibold text-[#005582] mb-2 text-center">
                        MOST POPULAR
                      </div>
                    )}

                    <h3 className="text-xl font-semibold mb-2 text-center">{plan.name}</h3>
                    {
                      plan.regular_monthly_price && plan.regular_annual_price ? (
                        <p className="price text-md text-gray-500 line-through mb-1 text-center">
                          {symbols[currency]}
                          {convertPrice(regularPrice)}
                        </p>
                      ) : ""
                    }

                    <p className="price text-3xl font-bold mb-1 text-center">
                      {symbols[currency]}
                      {convertPrice(basePrice)}
                    </p>

                    <p className="text-sm text-gray-500 mb-4 text-center">
                      {screen}
                    </p>

                    <button
                      className={`w-full py-2 mb-4 rounded-md ${plan.popular
                        ? "bg-[#005582] text-white"
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
                          {feature?.feature_has ? (<span className="text-white w-4 h-4 bg-[#005582] p-2 rounded-2xl relative"><span className="absolute top-0 left-[.9] flex justify-center items-center w-full h-full text-[10px]">✔ </span></span>) : (<span className="text-white w-4 h-4 bg-red-400 p-2 rounded-2xl relative"><span className="absolute top-0 left-[.9] flex justify-center items-center w-full h-full text-[10px]">✘</span></span>)}

                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/*  */}
        </div>
      </div>
      {/* <PriceCards /> */}
      <PriceCard2 billing={billing} symbols={symbols[currency]} />
      <PricingComparison plans={plans} billing={billing} symbols={symbols[currency]}
        rates={rates} currency={currency} />
      <Footer />
    </>
  );
}

export default Price;
