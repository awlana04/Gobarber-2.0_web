'use server';

import nodemailer from 'nodemailer';

import SendMailAdapterModel from '../models/send-mail-adapter-model';

import { SendMainType } from '../types/send-mail-type';

export default async function SendMailAdapter({
  email,
  subject,
  sendTo,
  text,
  html,
}: SendMainType) {
  const SMTP_SERVER_HOST = process.env.NEXT_PUBLIC_SMTP_SERVER_HOST;
  const SMTP_SERVER_USERNAME = process.env.NEXT_PUBLIC_SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.NEXT_PUBLIC_SMTP_SERVER_PASSWORD;

  const transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: false,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: email,
    to: sendTo,
    subject: subject,
    text: text,
    html: html,
  });

  return info;
}

// export default class SendMailAdapter implements SendMailAdapterModel {
//   public async sendMail({
//     email,
//     subject,
//     sendTo,
//     text,
//     html,
//   }: SendMainType): Promise<any> {
//     const SMTP_SERVER_HOST = process.env.NEXT_PUBLIC_SMTP_SERVER_HOST;
//     const SMTP_SERVER_USERNAME = process.env.NEXT_PUBLIC_SMTP_SERVER_USERNAME;
//     const SMTP_SERVER_PASSWORD = process.env.NEXT_PUBLIC_SMTP_SERVER_PASSWORD;
//     // const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER;

//     const transporter = nodemailer.createTransport({
//       // service: 'gmail',
//       host: SMTP_SERVER_HOST,
//       port: 587,
//       secure: false,
//       auth: {
//         user: SMTP_SERVER_USERNAME,
//         pass: SMTP_SERVER_PASSWORD,
//       },
//     });

//     try {
//       await transporter.verify();
//     } catch (error) {
//       console.error(
//         'Something Went Wrong',
//         SMTP_SERVER_USERNAME,
//         SMTP_SERVER_PASSWORD,
//         error
//       );
//       return;
//     }
//     const info = await transporter.sendMail({
//       from: email,
//       to: sendTo,
//       subject: subject,
//       text: text,
//       html: html,
//     });

//     return info;
//   }
// }
