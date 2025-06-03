'use server';

import TransformMailProvider from '@/infra/providers/implementations/transform-mail-provider';

import SendMailAdapter from '@/adapters/implementations/send-mail-adapter';

export default async function SigninBarberMailFactory(email: string) {
  const transformMailProvider = new TransformMailProvider();

  const sendMailAdapter = new SendMailAdapter();

  const htmlTemplate = await transformMailProvider.transformHTMLTemplate(
    'src/infra/mails/welcome-to-application-barber-mail.html'
  );
  const goBarberImageAttachment =
    await transformMailProvider.transformImageAttachment(
      'src/infra/mails/static/gobarber_logo.png'
    );
  const htmlPlainText = transformMailProvider.transformMailToText(htmlTemplate);

  await sendMailAdapter.sendMail({
    email: 'gobarber-2.0@test.support.com',
    sendTo: email,
    subject: 'Você criou uma conta no GoBarber-2.0!',
    text: htmlPlainText,
    html: htmlTemplate,
    attachments: [
      {
        filename: 'gobarber_logo.png',
        content: goBarberImageAttachment,
        encoding: 'base64',
        cid: 'gobarber_logo',
      },
    ],
  });
}
