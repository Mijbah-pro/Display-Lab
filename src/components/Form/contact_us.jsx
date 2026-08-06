"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Dummy arrays for selects
const businessTypes = [  "QSR", "Fast Food", "Pizza Shop", "Café", "Food Court", "Other",];
const inquiryTypes = [ "General Question","Request a Quote", "Product Inquiry","Schedule a Demo", "Support", "Partnership",];

// 1. Zod Validation Schema matching all your fields
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  businessName: z.string().min(1, 'Business name is required'),
  businessType: z.string().min(1, 'Please select a business type'),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// API Call Function
const submitInquiryAPI = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit inquiry');
  }

  return response.json();
};

function ContactUsForm() {

  // 2. TanStack Query Mutation
  const mutation = useMutation({
    mutationFn: submitInquiryAPI,
    onSuccess: (data) => {
      console.log('Submitted successfully:', data);
      alert('Inquiry sent!');
      reset();
    },
    onError: (error) => {
      console.error('Submission error:', error);
      alert('Failed to send inquiry.');
    },
  });

  // 3. React Hook Form Setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      businessName: '',
      businessType: '',
      inquiryType: '',
      message: '',
    },
  });

  // 4. Form Submit Handler
  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  
  return ( <>
    <div className="hero-section mt-20">
        <div className="">
          <div className="container">
            <div className="flex flex-col gap-5 items-center py-10">
              <h1 className="title">CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
    <div className="form-section my-10">
            <div className="container">
              <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 bg-gray-200 rounded-4xl overflow-hidden">
                <div className="px-2 md:p-10 bg-[#005582] text-white flex flex-col justify-between ">
                  <div className="">
                    <h4 className="title">Get in touch</h4>
                    <p className="mt-4 w-5/6 font-semibold">
                      We would love to hear from you! Whether you have a question
                      about our services, pricing, or anything else, our team is
                      ready to answer all your questions.
                    </p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="mt-4 ">
                      {" "}
                      <span className="font-semibold"> Arlington Location</span>
                      <br />
                      <span> 901 S Highland St </span>
                      <br />
                      <span> Suite 301, United States</span>
                      <br />
                      <span> VA 22204 </span>
                      <br />
                      <span> +1 571-501-8246 </span>
                      <br />
                    </p>
                    <p className="mt-4">
                      {" "}
                      <span className="font-semibold"> Woodbridge Location </span>
                      <br />
                      <span> 5476 Quaint Dr, Woodbridge </span>
                      <br />
                      <span> United States</span>
                      <br />
                      <span> VA 22193 </span>
                      <br />
                      <span> 571-389-1114 </span>
                      <br />
                    </p>
                  </div>
                </div>
    
                <div className="px-2 md:p-10 mt-8">
                    {/* Form */}
                  <form className="space-y-4 max-w-lg mx-auto p-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Input */}
                    <div>
                        <label
                        
                        htmlFor="name"
                        className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
                      >
                        Name
                      </label>
                      <input
                      id="name"
                        type="text"
                        placeholder="Your Name"
                        {...register("name")}
                        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
    
                    {/* Email Input */}
                    <div>
                        <label
                        htmlFor="email"
                        className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
                      >
                        Email
                      </label>
                      <input
                      id="email"
                        type="email"
                        placeholder="Your Email"
                        {...register("email")}
                        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
    
                    {/* Business Name Input */}
                    <div>
                        <label
                        htmlFor="businessName"
                        className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        placeholder="Business Name"
                        {...register("businessName")}
                        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.businessName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.businessName.message}
                        </p>
                      )}
                    </div>
    
                    {/* Business Type Select */}
                    <div>
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
                      {errors.businessType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.businessType.message}
                        </p>
                      )}
                    </div>
    
                    {/* Inquiry Type Select */}
                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        {...register("inquiryType")}
                        className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-[#fbfdfc] px-3.5 py-3.5"
                      >
                        <option value="">Select one</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.inquiryType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.inquiryType.message}
                        </p>
                      )}
                    </div>
    
                    {/* Message Textarea */}
                    <div>
                        <label
                        htmlFor="message"
                        className="mb-1.5 block text-[13px] font-black text-[var(--dark,#0f172a)]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Message"
                        rows={5}
                        {...register("message")}
                        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                    >
                      {mutation.isPending ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
    
    </> );
}

export default ContactUsForm;