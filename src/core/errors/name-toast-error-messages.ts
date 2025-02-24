import { NAME_MESSAGES } from '../constants/name-messages';

const type = 'error';
const title = NAME_MESSAGES.NAME_TITLE;

export const nameError = {
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
