export type SendMainType = {
  email: string;
  sendTo: string;
  subject: string;
  text: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: any;
    encoding: 'base64';
    cid: string;
  }>;
};
