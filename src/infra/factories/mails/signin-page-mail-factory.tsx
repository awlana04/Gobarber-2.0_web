'use server';

import { promisify } from 'util';
import fs from 'fs';

import SendMailAdapter from '@/adapters/implementations/send-mail-adapter';

export default async function SigninPageMailFactory(
  email: string,
  isClient: boolean
) {
  const sendMailAdapter = new SendMailAdapter();

  const readFileAsync = promisify(fs.readFile);

  const htmlTemplate = await readFileAsync(
    'src/infra/mails/welcome-to-application-client-mail.html',
    'utf-8'
  );
  const imageAttachment = await readFileAsync(
    'src/infra/mails/static/gobarber_logo.png'
  );

  await sendMailAdapter.sendMail({
    email: 'gobarber-2.0@test.support.com',
    sendTo: email,
    subject: 'Você criou uma conta no GoBarber-2.0!',
    html: htmlTemplate,
    attachments: [
      {
        filename: 'gobarber_logo.png',
        content: imageAttachment,
        encoding: 'base64',
        cid: 'gobarber_logo',
      },
    ],
  });
}
