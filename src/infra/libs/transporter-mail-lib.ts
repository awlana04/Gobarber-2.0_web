import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.NEXT_PUBLIC_SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.NEXT_PUBLIC_SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.NEXT_PUBLIC_SMTP_SERVER_PASSWORD;

export const transporter = nodemailer.createTransport({
  // service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});
