import { EMAIL_MESSAGES } from '@/constants/email-messages';

import { ErrorsMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = EMAIL_MESSAGES.EMAIL_TITLE;

export const emailError: ErrorsMessageType = {
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
