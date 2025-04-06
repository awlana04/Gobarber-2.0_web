import { NAME_MESSAGES } from '@/constants/name-messages';

import { ErrorsMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = NAME_MESSAGES.NAME_TITLE;

export const nameError: ErrorsMessageType = {
  Required: {
    title,
    type,
    description: NAME_MESSAGES.NAME_REQUIRED,
  },
  Length: {
    title,
    type,
    description: NAME_MESSAGES.NAME_LENGTH,
  },
};
