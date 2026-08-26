import { adminSingleProductInquiryTemplate } from "@/emails/single_product/adminSingleProductInquiryTemplate";
import { customerSingleProductInquiryTemplate } from "@/emails/single_product/customerSingleProductInquiryTemplate";
import { NextResponse } from "next/server";
import { transporter } from "../../../lib/mail";

export async function POST(req) {
  try {
    const data = await req.json();
console.log(data, "data Si");

    const { fullName, email } = data;

    await transporter.verify();
    console.log("SMTP OK");

    // Send Admin Email
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Product Inquiry from ${fullName}`,
      html: adminSingleProductInquiryTemplate(data),
    });

    // Send Customer Confirmation Email
    await transporter.sendMail({
      from: `Display Lab <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: process.env.SMTP_USER,
      subject: "We've Received Your Inquiry – We'll Be in Touch Soon",
      html: customerSingleProductInquiryTemplate(data),
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("==== API ERROR ====");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    );
  }
}
