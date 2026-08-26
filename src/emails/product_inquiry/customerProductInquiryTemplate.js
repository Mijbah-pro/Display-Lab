export const customerProductInquiryTemplate = ({
  fullName,
  businessName,
  inquiryType,
  quantity,
  products,
  businessType,
  timeline,
}) => {
  return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html" ; charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400&family=Corben&family=Gaegu:wght@700&family=Montserrat&display=swap"
        rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400&family=Corben&display=swap"
        rel="stylesheet">

    <link
        href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400&family=Corben&family=Gaegu:wght@700&display=swap"
        rel="stylesheet">
    <title>email</title>

</head>

<body style="margin: 0;
background-color: #f3f3f3;
;">
    <center class="wrapper" style="width: 100%;  table-layout: fixed; background-color: #f3f3f3; padding-bottom: 15px;">
        <!-- LOGO SECTION -->
        <tr>
            <td style="padding: 14px 0 4px;  padding: 0;">
                <table width="100%" style=" border-spacing: 0;">
                    <tr>
                        <td class="two-columns"
                            style="padding: 0; text-align: center; font-size: 0;vertical-align: top; text-align: center; max-width: 300px;  ">
                            <table class="column"
                                style=" margin: 0 auto; width: 95%; max-width: 600px; border-spacing: 0; font-family: sans-serif; text-align: left; "">

                                <tr>
                                    <td style=" padding: 0; padding: 20px 0 10px; ">
                                        <a target=" _blank" href="https://displaylab.createabitwebservice.com/"><img
                                    src="https://i.ibb.co/4f0rDcf/logo.png" alt="Display Lab" width="180"
                                    title="Display Lab" style="max-width:100%; border: 0;
                                            width: 133px;"></a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </table>
        </td>
        </tr>
        <table class="main" width="100%"
            style="background-color: #ffffff;  margin: 0 auto; width: 95%; max-width: 600px; border-spacing: 0; font-family: sans-serif; color: #171a1b; box-shadow: 0px 7px 10px -5px grey; text-align: center; border-radius: 5px;  border-spacing: 0;">
            <!-- LOGO IMAGE -->
            <tr>
                <td style=" padding: 0;">
                    <img style="width: 100%;  border: 0;" src="https://i.ibb.co/B6WPbGc/Activated.png" width="600"
                        alt="" style="max-width: 100%; border: 0;
                        width: 100%;">
                </td>
            </tr>
            <!-- THREE COLUMN SECTION -->
            <tr>
                <td style=" padding: 0;">
                    <table width="100%" style=" border-spacing: 0;">
                        <tr>
                            <td class="text"
                                style="padding: 0; padding: 3px 32px;  font-family: 'Montserrat',sans-serif;  ">

                                <h3
                                    style="font-family: 'Alegreya Sans', sans-serif; font-size: 20px;text-align: center;">
                                    We've Received Your Inquiry</h3>

                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
            <!-- TWO COLUMN SECTION -->
            <!-- <tr>
                <td style=" padding: 0;">
                    <table width="100%" style=" border-spacing: 0;">
                        <tr>
                            <td class="text"
                                style="padding: 0; padding: 10px 32px;  font-family: 'Montserrat',sans-serif;  ">

                                <p class="support-text" style="font-size: 15px;
                                 text-align:left;">Thank you for joinin and being a customer with us!
                                </p>
                                <p class="support-text" style="font-weight: bold; padding-bottom: 10px; font-size: 15px;
                                display: flex; text-align: left;">
                                    Support Team
                                    <br>
                                    Display Lab
                                </p>
                            </td>
                        </tr>

                    </table>

                </td>
            </tr> -->
         <!-- Greeting -->
    <tr>
        <td style="padding:35px 35px 20px; text-align: left;">
            <p style="margin:0;font-size:16px;color:#333;">
                Hi <strong>${fullName}</strong>,
            </p>

            <p style="margin:20px 0 0;font-size:15px;line-height:26px;color:#555;">
                Thank you for contacting <strong>CreateAbit</strong>. We have successfully
                received your inquiry and appreciate your interest in our digital display
                solutions.
            </p>

            <p style="margin:20px 0 0;font-size:15px;line-height:26px;color:#555;">
                Our sales team will review your request and get back to you as soon as
                possible—typically within <strong>1 business day</strong>.
            </p>
        </td>
    </tr>
     <!-- Inquiry Summary -->
    <tr>
        <td style="padding:0 35px 30px; text-align: left;">

            <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;border:1px solid #e6e6e6;">

                <tr style="background:#f7f9fc;">
                    <td width="40%" style="font-weight:bold;">Business Name</td>
                    <td>${businessName}</td>
                </tr>

                <tr>
                    <td style="font-weight:bold;">Business Type</td>
                    <td>${businessType}</td>
                </tr>

                <tr style="background:#f7f9fc;">
                    <td style="font-weight:bold;">Inquiry Type</td>
                    <td>${inquiryType}</td>
                </tr>

                <tr>
                    <td style="font-weight:bold;">Products</td>
                    <td> ${
                      Array.isArray(products)
                        ? products
                            .map((product) => `• ${product}`)
                            .join(",<br>")
                        : products || "N/A"
                    }</td>
                </tr>

                <tr style="background:#f7f9fc;">
                    <td style="font-weight:bold;">Required Quantity</td>
                    <td>${quantity}</td>
                </tr>

                <tr>
                    <td style="font-weight:bold;">Timeline</td>
                    <td>${timeline}</td>
                </tr>

            </table>

        </td>
    </tr>
      <!-- What's Next -->
    <tr>
        <td style="padding:0 35px 30px; text-align: left;">

            <h2 style="margin:0 0 15px;color:#333;font-size:22px;">
                What Happens Next?
            </h2>

            <table cellpadding="0" cellspacing="0" style="width:100%">
                <tr>
                    <td style="padding-bottom:12px;">✔ Review your inquiry</td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;">✔ Contact you to discuss your requirements</td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;">✔ Recommend the best solution</td>
                </tr>
                <tr>
                    <td>✔ Provide a quotation or schedule a demo</td>
                </tr>
            </table>

        </td>
    </tr>
        <!-- CTA -->
    <tr>
        <td align="center" style="padding:0 35px 40px;">
            <a href="https://createabit.com"
               style="background:#0F4C81;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:5px;display:inline-block;font-size:16px;font-weight:bold;">
               Visit Our Website
            </a>
        </td>
    </tr>
     <!-- Footer -->
    <tr>
        <td style="background:#f7f7f7;padding:25px;text-align:center;border-top:1px solid #e6e6e6;">

            <strong style="font-size:18px;color:#333;">
                CreateAbit
            </strong>

            <p style="margin:10px 0 5px;color:#666;font-size:14px;">
                Digital Signage • Self-Ordering Kiosks • Interactive Displays
            </p>

            <p style="margin:5px 0;color:#666;font-size:14px;">
                🌐 https://createabit.com
            </p>

            <p style="margin:5px 0;color:#666;font-size:14px;">
                ✉ info@createabit.com
            </p>

            <p style="margin-top:20px;font-size:12px;color:#999;">
                This is an automated confirmation email. Please do not reply directly to this message.
            </p>

        </td>
    </tr>
        </table>
        <!-- OUT SITE -->
        <table class="test" width="100%"
            style=" margin: 0 auto; width: 95%; max-width: 600px; border-spacing: 0; font-family: sans-serif; color: #171a1b; text-align: center; border-radius: 5px;  border-spacing: 0;"
            ;">
            <!-- TITLE, TEXT & BUTTON -->
            <tr>
                <td class="stay" style="  padding: 0; text-align: center; ">
                    <h2 style="font-family: 'Gaegu', cursive;
                    color: #585858;
                    font-weight: normal;
                    font-size: 25px;">Stay in touch</h2>
                </td>
            </tr>
            <!-- SOCAL ICON -->
            <tr>

                <td class="socal" style="padding: 0; 
                 margin-bottom: 10px; text-align: center; ">
                    <a href="https://twitter.com/DisplayLabUs" target="_blank"><img
                            src="https://i.ibb.co/v34JX57/Twitter.png" alt="twitter-48" style="border: 0;
                        width: 45px;"></a>
                    <a href="https://www.facebook.com/displaylabs" target="_blank"><img
                            src="https://i.ibb.co/jwQHd5P/Facebook.png" alt="facebook-48" style="border: 0;
                        width: 45px; padding-left: 5px;"></a>
                    <a href="https://www.youtube.com/channel/UCiZFerYbox-_f2_NryGQvUA" target="_blank"><img
                            src="https://i.ibb.co/HxkMnYP/Youtube.png" alt="youtube-48" style="border: 0;
                        width: 45px; padding-left: 5px;"></a>

                </td>

            </tr>
            <!-- FOOTER SECTION -->

            <tr class="footer-emailText" style="margin-top: 15px;
                        font-size: 11px;
                        text-align: center;">

                <td style=" padding: 0;">
                    <p class="footer-text" style="margin: 5px;
                                font-family: 'Montserrat', sans-serif; text-align: center;">Email sent by Display Lab
                    </p>
                </td>

            </tr>
            <tr class="footer-emailText" style="margin-top: 15px;
                        font-size: 11px;
                        text-align: center;">

                <td style=" padding: 0;">
                    <p class="footer-text" style="margin: 5px;
                                font-family: 'Montserrat', sans-serif; text-align: center;">
                        Copyright © 2022
                        <a target="_blank" href="https://displaylab.createabitwebservice.com/" style="color: black;
                                    text-decoration: none;
                                    font-weight: bold; font-size: 11px;">Display Lab,</a>
                        All rights reserved.
                    </p>
                </td>

            </tr>




        </table>
    </center>
</body>

</html>
    `;
};
