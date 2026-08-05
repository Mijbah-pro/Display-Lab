import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@displaylab.net",
    pass: "Displaylab@2022",
  },
});
