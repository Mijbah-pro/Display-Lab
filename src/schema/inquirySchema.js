import { z } from "zod";
// SingleInquirySchema
export const singleInquirySchema = z
  .object({
    inquiryType: z.string().min(1, "Please select an inquiry type"),

    products: z.array(z.string()).default([]),

    fullName: z.string().trim().min(2, "Full name is required"),

    phone: z.string().trim().min(8, "Phone number is required"),

    email: z.string().trim().email("Please enter a valid email address"),

    businessName: z.string().optional(),

    businessType: z.string().optional(),

    locations: z.string().optional(),

    timeline: z.string().optional(),

    quantity: z.string().optional(),

    message: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.inquiryType === "Product Inquiry" &&
      data.products.length === 0
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select at least one product",
        path: ["products"],
      });
    }
  });

// InquirySchema
export const inquirySchema = z.object({
  // --- Required Fields ---
  fullName: z.string().min(1, { message: "Full name is required" }).trim(),

  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[\d\+\-\(\)\s]+$/, {
      message: "Please enter a valid phone number",
    }),

  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Please enter a valid email address" }),

  products: z
    .array(z.string())
    .min(1, { message: "Please select at least one product" }),

  screenSize: z.string().min(1, { message: "Please select a screen size" }),

  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters long" }),

  // --- Optional Fields ---
  businessName: z.string().optional(),
  businessType: z.string().optional(),
  locations: z.string().optional(),
});

// ContactUS_Schema
export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Please enter a valid email address" }),
  businessName: z.string().min(2, { message: "Business Name is required" }).trim(),
  businessType: z.string().min(1, { message: "Please select a Business Type" }),
  inquiryType: z.string().min(1, { message: "Please select a Inquiry Type" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters long" }),
});
