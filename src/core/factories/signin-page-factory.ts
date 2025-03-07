'use server';

import SendMailAdapter from '../adapters/implementations/send-mail-adapter';

export default async function SigninPageFactory(email: string) {
  const sendMailAdapter = new SendMailAdapter();

  sendMailAdapter.sendMail({
    email: 'gobarber-2.0@test.support.com',
    sendTo: email,
    subject: 'Você criou uma conta no GoBarber-2.0!',
    text: 'Bem-vindo ao GoBarber-2.0!',
    html: "<p style='color:#ff0000'>Comece a utilizar a aplicação!</p>",
  });
}
