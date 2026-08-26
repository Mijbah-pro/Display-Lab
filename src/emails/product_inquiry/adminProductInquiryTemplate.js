export const adminProductInquiryTemplate = ({
  fullName,
  phone,
  email,
  inquiryType,
  products,
  productType,
  businessName,
  businessType,
  locations,
  timeline,
  quantity,
  screenSize,
  message,
}) => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        </head>

        <body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:30px 15px;">
        <tr>
        <td align="center">

        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #dfe5ec;">

        <tr>
        <td align="center" style="background:#1f4e79;padding:35px 30px;">
        <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:bold;">
        Follow-Up Required: Product Inquiry Received
        </h1>

        <p style="margin:10px 0 0;color:#d8e6f5;font-size:15px;">
        A new inquiry has been submitted through your website.
        </p>
        </td>
        </tr>

        <tr>
        <td style="padding:30px;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>

        <td width="48%" valign="top">

        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e3e7ec;border-radius:8px;">

        <tr>
        <td style="background:#f5f8fc;padding:15px;font-size:18px;font-weight:bold;color:#1f4e79;">
        Contact Information
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Full Name</strong><br>
        <span style="color:#666;">${fullName}</span>
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Email</strong><br>
        <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
        ${email}
        </a>
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Phone</strong><br>
        <span style="color:#666;">${phone}</span>
        </td>
        </tr>

        </table>

        </td>

        <td width="4%"></td>

        <td width="48%" valign="top">

        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e3e7ec;border-radius:8px;">

        <tr>
        <td style="background:#f5f8fc;padding:15px;font-size:18px;font-weight:bold;color:#1f4e79;">
        Business Information
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Business Name</strong><br>
        <span style="color:#666;">${businessName}</span>
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Business Type</strong><br>
        <span style="color:#666;">${businessType}</span>
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Locations</strong><br>
        <span style="color:#666;">${locations}</span>
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Timeline</strong><br>
        <span style="color:#666;">${timeline}</span>
        </td>
        </tr>

        <tr>
        <td style="padding:15px;border-top:1px solid #ececec;">
        <strong>Timeline</strong><br>
        <span style="color:#666;">${productType}</span>
        </td>
        </tr>

        </table>

        </td>

        </tr>
        </table>

        </td>
        </tr>

        <tr>
        <td style="padding:0 30px 30px;">

        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e3e7ec;border-radius:8px;">

        <tr>
        <td style="background:#f5f8fc;padding:15px;font-size:18px;font-weight:bold;color:#1f4e79;">
        Inquiry Details
        </td>
        </tr>

        <tr>
        <td style="padding:20px;">

        <table width="100%" cellpadding="8" cellspacing="0">

        <tr>
        <td width="40%"><strong>Screen Size</strong></td>
        <td>${screenSize}</td>
        </tr>

        <tr>
        <td width="40%"><strong>Inquiry Type</strong></td>
        <td>${inquiryType}</td>
        </tr>

        // <tr>
        // <td><strong>Required Quantity</strong></td>
        // <td>${quantity}</td>
        // </tr>

        <tr>
        <td valign="top"><strong>Products</strong></td>
        <td>
        ${
        Array.isArray(products)
            ? products.map(product => `• ${product}`).join(",<br>")
            : products || "N/A"
        }
        </td>
        </tr>

        </table>

        </td>
        </tr>

        </table>

        </td>
        </tr>

        <tr>
        <td style="padding:0 30px 35px;">

        <table width="100%" cellpadding="0" cellspacing="0" style="border-left:5px solid #1f4e79;background:#f9fbfd;border-radius:6px;">

        <tr>
        <td style="padding:18px 20px;font-size:18px;font-weight:bold;color:#1f4e79;">
        Message
        </td>
        </tr>

        <tr>
        <td style="padding:0 20px 20px;color:#555;font-size:15px;line-height:26px;">
        ${message}
        </td>
        </tr>

        </table>

        </td>
        </tr>

        <tr>
        <td align="center" style="padding:0 30px 35px;">

        <a href="mailto:${email}"
        style="background:#1f4e79;color:#ffffff;text-decoration:none;padding:14px 34px;border-radius:6px;font-weight:bold;font-size:15px;display:inline-block;">
        Reply to Customer
        </a>

        </td>
        </tr>

        <tr>
        <td align="center" style="background:#f8fafc;padding:22px;border-top:1px solid #e5e7eb;">

        <p style="margin:0;color:#7b8794;font-size:13px;">
        This email was automatically generated from your website contact form.
        </p>

        </td>
        </tr>

        </table>

        </td>
        </tr>
        </table>

        </body>
        </html>
    `
}