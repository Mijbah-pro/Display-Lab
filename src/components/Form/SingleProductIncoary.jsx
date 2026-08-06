"use client";
import { singleInquirySchema } from "@/schema/inquirySchema";
import { AllTypesProductsDatas, businessTypes, inquiryTypes, locations, productTypes, requiredQuantity, timelines } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Or use any icon library (e.g. react-icons)
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../Loader";
export default function SingleProductInquiry({ Product, onClose }) {
  
 
  
  const [productInquiry, setProductInquiry] = useState(true)

  const defaultInquiryType = inquiryTypes[2] || "";

  // Ensure productTypes array exists before initializing form
  const defaultProductType = productTypes[0] || "";

  // 2. Pass index 0 into useForm defaultValues
  const [productTypetext, setProductTypetext] = useState(productTypes[0] || "");

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch("/api/single_product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      return res.json();
    },

    onSuccess: () => {
      toast.success("✅ Product Inquiry Successful");
      reset();
      onClose?.();
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(singleInquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      inquiryType: defaultInquiryType,
      products: [],
      productType: defaultProductType,
      businessName: "",
      businessType: "",
      locations: "",
      timeline: "",
      quantity: "",
      message: "",
    },
  });

  const onSubmit = (data) => {

    mutation.mutate(data);
  };
  const ProductItems = Product?.product_items || [];
  const currentProducts =
    productTypetext &&
      AllTypesProductsDatas.find((item) => item.productsType === productTypetext)
      ? AllTypesProductsDatas.find(
        (item) => item.productsType === productTypetext
      )?.products
      : ProductItems;

  return (<>
    <div className="grid w-full max-h-[700px]  max-w-4xl overflow-y-scroll rounded-[28px] bg-white shadow-2xl md:grid-cols-[280px_1fr]">
      {/* Left panel */}
      <div className="relative flex flex-col justify-between bg-[#005582] px-7 py-8 text-white md:px-8 md:py-10">
        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 overflow-hidden">
          
            <Image className="w-full h-full" src={"/images/logo/icon.png"} alt="" width={56} height={56} />
          </div>

          <h2 className="mb-4 text-[26px] font-extrabold leading-tight">
            Send Us Inquiry
          </h2>

          <p className="mb-7 text-[14.5px] leading-relaxed text-white/70">
            Have questions about CreateAbit SOS? Send your inquiry and our
            team will respond with the right solution for your restaurant.
          </p>

          <ul className="space-y-3.5">
            {[
              "Kiosk hardware questions",
              "Software and menu setup",
              "Payment and kitchen integration",
              "Pricing and package details",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#0b4a41]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-[14px] font-semibold leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[13.5px] font-medium text-white/75">
          Tell us what you need. We will guide you.
        </p>
      </div>

      {/* Right panel */}
      <div className="relative px-6 py-8 md:px-10 md:py-10">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border,#e5e7eb)] bg-white text-[#0b4a41] shadow-sm transition hover:bg-gray-50 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        <h2 className="mb-1.5 text-[26px] font-extrabold text-[var(--dark,#0f172a)]">
          Send Your Inquiry
        </h2>
        <p className="mb-6 max-w-sm text-[14.5px] leading-relaxed">
          Complete the form below and our team will contact you shortly.
        </p>

        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} >
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName")}
                placeholder="Your full name"
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5 font-inherit text-[15px] text-[var(--dark,#0f172a)] outline-none transition duration-200 ease-in-out focus:border-[var(--primary,#006b63)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,107,99,0.1)]"
              />
              <p className="text-red-500 text-sm">
                {errors.fullName?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(000) 000-0000"
                {...register("phone")}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5 font-inherit text-[15px] text-[var(--dark,#0f172a)] outline-none transition duration-200 ease-in-out focus:border-[var(--primary,#006b63)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,107,99,0.1)]"
              />
              <p className="text-red-500 text-sm">
                {errors.phone?.message}
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5 font-inherit text-[15px] text-[var(--dark,#0f172a)] outline-none transition duration-200 ease-in-out focus:border-[var(--primary,#006b63)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,107,99,0.1)]"
                placeholder="you@example.com"
              />

              <p className="text-red-500 text-sm">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="businessName"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                {...register("businessName")}
                placeholder="Business Name"
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5 font-inherit text-[15px] text-[var(--dark,#0f172a)] outline-none transition duration-200 ease-in-out focus:border-[var(--primary,#006b63)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,107,99,0.1)]"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
            <div className="flex flex-col">
              <label
                htmlFor="businessType"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Business Type
              </label>
              <select
                id="businessType"
                {...register("businessType")}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5"
              >
                <option value="">Select one</option>

                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="locations"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Number of Locations
              </label>
              <select
                id="locations"
                {...register("locations")}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5"
              >
                <option value="">Select one</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="timeline"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Timeline
              </label>
              <select
                id="timeline"
                {...register("timeline")}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5"
              >
                <option value="">Select one</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="inquiryType"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                {...register("inquiryType", {
                  onChange: (e) => {
                    setProductInquiry(e.target.value === "Product Inquiry");
                  },
                })}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5"
              >
                <option value="">Select one</option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <p className="text-red-500 text-sm">
                {errors.inquiryType?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="quantity"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Required Quantity
              </label>
              <select
                id="quantity"
                {...register("quantity")}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5 font-inherit text-[15px] text-[var(--dark,#0f172a)] outline-none transition duration-200 ease-in-out focus:border-[var(--primary,#006b63)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,107,99,0.1)]"
              >
                <option value="">Select one</option>
                {requiredQuantity.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Select */}
          {productInquiry && (

            <div className="flex flex-col">
              <label
                htmlFor="productType"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Product Type
              </label>
              <select
                id="productType"
                {...register("productType", {
                  onChange: (e) => {
                    setProductTypetext(e.target.value);
                  },
                })}
                className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5"
              >
                {productTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <label
                htmlFor="product_selection"
                className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
              >
                Product Chosen
              </label>
              <div className="relative group max-w-full px-8">
                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  className="product-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1.5 rounded-full shadow-md border hover:bg-gray-100 transition-all focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  className="product-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1.5 rounded-full shadow-md border hover:bg-gray-100 transition-all focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>

                {/* Swiper Container */}
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={12}
                  slidesPerView="auto"
                  navigation={{
                    prevEl: ".product-swiper-prev",
                    nextEl: ".product-swiper-next",
                  }}
                  className="w-full py-2"
                >
                  {currentProducts?.map((item, index) => (
                    <SwiperSlide key={item.id || index} className="!w-auto">
                      <div>
                        <input
                          id={`product${index + 1}`}
                          name="products"
                          {...register("products")}
                          value={item.name}
                          type="checkbox"
                          className="peer absolute opacity-0 w-0 h-0"
                        />

                        <label
                          htmlFor={`product${index + 1}`}
                          className="block cursor-pointer rounded-lg border-2 border-gray-200 p-1 transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50/50"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="h-12 w-12 object-contain"
                          />
                        </label>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <p className="text-red-500 text-sm">
                {errors.products?.message}
              </p>
            </div>
          )}

          {/* Textarea */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Write your question or tell us what solution you are looking for."
              className="w-full min-h-[96px] resize-vertical rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5 font-inherit text-[15px] text-[var(--dark,#0f172a)] outline-none transition duration-200 ease-in-out focus:border-[var(--primary,#006b63)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,107,99,0.1)]"
            ></textarea>
          </div>


          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-gradient-to-r from-[#005582] to-[#185d83] px-6 py-4 text-[15px] font-bold text-white shadow-md transition hover:opacity-90 cursor-pointer"
          >
            Send Inquiry
          </button>

          <p className="text-center text-[13px] leading-[1.45] text-[var(--muted,#6b7280)]">
            Our team will review your inquiry and contact you as soon as
            possible.
          </p>
        </form>
      </div>
    </div>

    {mutation.isPending && (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30">
        <Loader />
      </div>
    )}

  </>
  );
}
