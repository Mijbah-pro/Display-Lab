import { z } from "zod";

export const singleInquirySchema = z
  .object({
    inquiryType: z
      .string()
      .min(1, "Please select an inquiry type"),

    products: z.array(z.string()).default([]),

    fullName: z
      .string()
      .trim()
      .min(2, "Full name is required"),

    phone: z
      .string()
      .trim()
      .min(8, "Phone number is required"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    businessName: z.string().optional(),
    businessType: z.string().optional(),
    locations: z.string().optional(),
    timeline: z.string().optional(),
    quantity: z.string().optional(),
    message: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.inquiryType === "Product Inquiry" && data.products.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select at least one product",
        path: ["products"],
      });
    }

    // Only if screen size is required
    const requiresScreenSize = true; // replace with your own condition

    if (
      data.inquiryType === "Product Inquiry" &&
      requiresScreenSize &&
      !data.screenSize
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select a screen size",
        path: ["screenSize"],
      });
    }
  });

  
export const inquirySchema = z.object({
  // --- Required Fields ---
  fullName: z
    .string()
    .min(1, { message: "Full name is required" })
    .trim(),

  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[\d\+\-\(\)\s]+$/, { message: "Please enter a valid phone number" }),

  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Please enter a valid email address" }),

  products: z
    .array(z.string())
    .min(1, { message: "Please select at least one product" }),

  screenSize: z
    .string()
    .min(1, { message: "Please select a screen size" }),

  message: z
    .string()
    .min(1, { message: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters long" }),

  // --- Optional Fields ---
  businessName: z.string().optional(),
  businessType: z.string().optional(),
  locations: z.string().optional(),
});

// ................................................................................





// import { z } from "zod";

// export const inquirySchema = z
//   .object({
//     inquiryType: z
//       .string()
//       .min(1, "Please select an inquiry type"),

//     products: z.array(z.string()).default([]),

//     screenSize: z.string().optional(),

//     fullName: z
//       .string()
//       .trim()
//       .min(2, "Full name is required"),

//     phone: z
//       .string()
//       .trim()
//       .min(8, "Phone number is required"),

//     email: z
//       .string()
//       .trim()
//       .email("Please enter a valid email address"),

//     businessName: z.string().optional(),
//     businessType: z.string().optional(),
//     locations: z.string().optional(),
//     timeline: z.string().optional(),
//     quantity: z.string().optional(),
//     message: z.string().trim().optional(),
//   })
//  .superRefine((data, ctx) => {
//   // Ensure "Product Inquiry" matches the exact option string in your select dropdown!
//   if (data.inquiryType === "Product Inquiry") {

//     // 1. Array check for products
//     if (!data.products || data.products.length === 0) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: "Please select at least one product",
//         path: ["products"], // Must match defaultValues key name
//       });
//     }

//     // 2. Screen size check
//     if (!data.screenSize || data.screenSize.trim() === "") {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: "Please select a screen size",
//         path: ["screenSize"], // Must match defaultValues key name
//       });
//     }
//   }
// })


