'use server';

import SendMailAdapter from '../adapters/implementations/send-mail-adapter';
import TransformMailAdapter from '../adapters/implementations/transform-mail-adapter';

import { WelcomeToApplicationMail } from '../mails/welcome-to-application-mail';

export default async function SigninPageFactory(email: string) {
  const sendMailAdapter = new SendMailAdapter();
  const transformMailAdapter = new TransformMailAdapter();

  await sendMailAdapter.sendMail({
    email: 'gobarber-2.0@test.support.com',
    sendTo: email,
    subject: 'Você criou uma conta no GoBarber-2.0!',
    text: await transformMailAdapter.transformMailToText(
      <WelcomeToApplicationMail />
    ),
    html: await transformMailAdapter.transformMailToHtml(
      <WelcomeToApplicationMail />
    ),
  });
}
