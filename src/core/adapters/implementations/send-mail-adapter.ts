import SendMailAdapterModel from '../models/send-mail-adapter-model';

import { SendMainType } from '../types/send-mail-type';

import { transporter } from '../../libs/transporter-mail-lib';

export default class SendMailAdapter implements SendMailAdapterModel {
  public async sendMail({
    email,
    subject,
    sendTo,
    text,
    html,
  }: SendMainType): Promise<any> {
    try {
      await transporter.verify();
    } catch (error) {
      return;
    }

    const info = await transporter.sendMail({
      from: email,
      to: sendTo,
      subject: subject,
      text: text,
      html: html,
    });

    return info;
  }
}
