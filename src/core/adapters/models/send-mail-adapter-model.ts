import { SendMainType } from '../types/send-mail-type';

export default interface SendMainAdapterModel {
  sendMail({ email, subject, sendTo, text, html }: SendMainType): any;
}
