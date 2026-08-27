"use client";

import { contactSchema } from "@/schema/inquirySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../Loader";

// Data
const businessTypes = [
  "QSR",
  "Fast Food",
  "Pizza Shop",
  "Café",
  "Food Court",
  "Other",
];

const inquiryTypes = [
  "General Question",
  "Request a Quote",
  "Product Inquiry",
  "Schedule a Demo",
  "Support",
  "Partnership",
];

// API Call
const submitInquiryAPI = async (formData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit inquiry");
  }

  return response.json();
};

function ContactUsForm() {
  const mutation = useMutation({
    mutationFn: submitInquiryAPI,

    onSuccess: () => {
      toast.success("✅ Product Inquiry Successful");
      reset();
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
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      businessType: "",
      inquiryType: "",
      message: "",
    },

    mode: "all",
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <section className="w-full bg-white px-4 py-9 text-[#102a43] sm:px-5 sm:py-10 lg:px-6">
        <div className="mx-auto max-w-[1430px]">

          {/* ================= HEADING ================= */}
          <div className="mb-[42px] text-center">
            <div className="mx-auto mb-[22px] h-1 w-14 rounded-full bg-[#005582]" />

            <h1 className="mb-[14px] text-[38px] font-extrabold tracking-[-1px] sm:text-[44px] lg:text-[52px]">
              CONTACT US
            </h1>

            <p className="mx-auto max-w-[620px] text-base leading-[1.55] text-[#718096] sm:text-[18px]">
              We're here to help! Fill out the form and our team will get back
              to you as soon as possible.
            </p>
          </div>

          {/* ================= CONTACT CARD ================= */}
          <div className="grid min-h-0 w-full overflow-hidden rounded-[26px] shadow-[0_12px_40px_rgba(16,42,67,0.12)] lg:min-h-[690px] lg:grid-cols-[36%_64%]">

            {/* ================= LEFT INFO ================= */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#12477d] to-[#005582] px-7 py-[38px] text-white sm:px-11 sm:py-12">

              {/* Decorative Circle */}
              <div className="pointer-events-none absolute -bottom-[100px] -right-[100px] h-[220px] w-[420px] rounded-[50%] border border-white/10 shadow-[0_0_0_35px_rgba(255,255,255,0.035),0_0_0_70px_rgba(255,255,255,0.025)]" />

              {/* Icon */}
              <div className="mb-[26px] flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[29px]">
                💬
              </div>

              <h2 className="mb-[14px] text-[29px] font-bold leading-[1.15] sm:text-[34px]">
                Let's Start a Conversation
              </h2>

              <p className="max-w-[430px] text-[16px] leading-[1.6] text-white/90 sm:text-[17px]">
                Have a question about our services, pricing, or partnership
                opportunities? Our team is ready to assist you.
              </p>

              <div className="my-[30px] h-px bg-white/20" />

              {/* Arlington */}
              <div className="relative z-10 mb-7 flex gap-[18px]">
                <div className="flex h-[46px] min-w-[46px] items-center justify-center rounded-full bg-black/15 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="mb-[7px] text-base font-bold">
                    Arlington Location
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-white/90">
                    901 S Highland St, Suite 301
                    <br />
                    Arlington, VA 22204
                    <br />
                    +1 571-501-8246
                  </p>
                </div>
              </div>

              {/* Woodbridge */}
              <div className="relative z-10 mb-7 flex gap-[18px]">
                <div className="flex h-[46px] min-w-[46px] items-center justify-center rounded-full bg-black/15 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="mb-[7px] text-base font-bold">
                    Woodbridge Location
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-white/90">
                    5476 Quaint Dr
                    <br />
                    Woodbridge, VA 22193
                    <br />
                    571-389-1114
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="relative z-10 flex gap-[18px]">
                <div className="flex h-[46px] min-w-[46px] items-center justify-center rounded-full bg-black/15 text-xl">
                  ✉
                </div>

                <div>
                  <h3 className="mb-[7px] text-base font-bold">
                    Email Us
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-white/90">
                    info@createabit.com
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="bg-white px-7 py-[38px] sm:px-12 sm:py-[52px]">

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-x-7 gap-y-[22px] md:grid-cols-2"
              >

                {/* ================= NAME ================= */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Full Name <span className="text-[#e63946]">*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    {...register("name")}
                    className="h-[52px] w-full rounded-[9px] border border-[#cbd5e0] bg-white px-4 text-[15px] text-[#243b53] outline-none transition duration-200 placeholder:text-[#9aa7b5] focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* ================= EMAIL ================= */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Email Address <span className="text-[#e63946]">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    {...register("email")}
                    className="h-[52px] w-full rounded-[9px] border border-[#cbd5e0] bg-white px-4 text-[15px] text-[#243b53] outline-none transition duration-200 placeholder:text-[#9aa7b5] focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* ================= BUSINESS NAME ================= */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Business Name
                  </label>

                  <input
                    id="businessName"
                    type="text"
                    placeholder="Business Name"
                    {...register("businessName")}
                    className="h-[52px] w-full rounded-[9px] border border-[#cbd5e0] bg-white px-4 text-[15px] text-[#243b53] outline-none transition duration-200 placeholder:text-[#9aa7b5] focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  />

                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                {/* ================= BUSINESS TYPE ================= */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Business Type
                  </label>

                  <select
                    id="businessType"
                    {...register("businessType")}
                    className="h-[52px] w-full rounded-[9px] border border-[#cbd5e0] bg-white px-4 text-[15px] text-[#243b53] outline-none transition duration-200 focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  >
                    <option value="">Select one</option>

                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  {errors.businessType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.businessType.message}
                    </p>
                  )}
                </div>

                {/* ================= INQUIRY TYPE ================= */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Inquiry Type
                  </label>

                  <select
                    id="inquiryType"
                    {...register("inquiryType")}
                    className="h-[52px] w-full rounded-[9px] border border-[#cbd5e0] bg-white px-4 text-[15px] text-[#243b53] outline-none transition duration-200 focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  >
                    <option value="">Select one</option>

                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  {errors.inquiryType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.inquiryType.message}
                    </p>
                  )}
                </div>

                {/* ================= PHONE ================= */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    {...register("phone")}
                    className="h-[52px] w-full rounded-[9px] border border-[#cbd5e0] bg-white px-4 text-[15px] text-[#243b53] outline-none transition duration-200 placeholder:text-[#9aa7b5] focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  />

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* ================= MESSAGE ================= */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-[9px] block text-[15px] font-bold text-[#102a43]"
                  >
                    Message <span className="text-[#e63946]">*</span>
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    {...register("message")}
                    className="min-h-[130px] w-full resize-y rounded-[9px] border border-[#cbd5e0] bg-white px-4 py-[15px] text-[15px] text-[#243b53] outline-none transition duration-200 placeholder:text-[#9aa7b5] focus:border-[#2f63e9] focus:ring-4 focus:ring-[#2f63e9]/10"
                  />

                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* ================= SUBMIT ================= */}
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="h-[54px] cursor-pointer w-full rounded-lg border-0 bg-[#005582] text-base font-bold text-white transition duration-200 hover:-translate-y-px hover:bg-[#074566] disabled:cursor-not-allowed disabled:bg-gray-400 md:col-span-2"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      ➤ &nbsp; Submit Inquiry
                    </>
                  )}
                </button>

                {/* ================= PRIVACY ================= */}
                <div className="text-center text-sm text-[#718096] md:col-span-2">
                  🛡 We respect your privacy. Your information will not be
                  shared.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOADING OVERLAY ================= */}
      {mutation.isPending && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30">
          <Loader />
        </div>
      )}
    </>
  );
}

export default ContactUsForm;