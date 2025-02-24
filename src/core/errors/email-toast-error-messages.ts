import { EMAIL_MESSAGES } from '../constants/email-messages';

const type = 'error';
const title = EMAIL_MESSAGES.EMAIL_TITLE;

export const emailError = {
  Length: {
    type,
    title,
    description: EMAIL_MESSAGES.EMAIL_LENGTH,
  },
  Required: {
    type,
    title,
    description: EMAIL_MESSAGES.EMAIL_REQUIRED,
  },
  Valid: {
    type,
    title,
    description: EMAIL_MESSAGES.EMAIL_VALID,
  },
};
