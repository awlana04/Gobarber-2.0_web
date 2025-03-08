'use server';

import SendMailAdapter from '../adapters/implementations/send-mail-adapter';
import TransformMailAdapter from '../adapters/implementations/transform-mail-adapter';

import WelcomeToApplicationClientMail from '../mails/welcome-to-application-mail';

export default async function SigninPageMailFactory(
  email: string,
  isClient: boolean
) {
  const sendMailAdapter = new SendMailAdapter();
  const transformMailAdapter = new TransformMailAdapter();

  isClient
    ? await sendMailAdapter.sendMail({
        email: 'gobarber-2.0@test.support.com',
        sendTo: email,
        subject: 'Você criou uma conta no GoBarber-2.0!',
        text: await transformMailAdapter.transformMailToText(
          <WelcomeToApplicationClientMail />
        ),
        html: await transformMailAdapter.transformMailToHtml(
          <WelcomeToApplicationClientMail />
        ),
      })
    : await sendMailAdapter.sendMail({
        email: 'gobarber-2.0@test.support.com',
        sendTo: email,
        subject: 'Você criou uma conta no GoBarber-2.0!',
        text: await transformMailAdapter.transformMailToText(
          <WelcomeToApplicationClientMail />
        ),
        html: await transformMailAdapter.transformMailToHtml(
          <WelcomeToApplicationClientMail />
        ),
      });
}
