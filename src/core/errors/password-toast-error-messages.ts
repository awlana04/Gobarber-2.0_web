import { PASSWORD_MESSAGES } from '../constants/password-messages';

const type = 'error';
const title = PASSWORD_MESSAGES.PASSWORD_TITLE;

export const passwordError = {
  Length: {
    type,
    title,
    description: PASSWORD_MESSAGES.PASSWORD_LENGTH,
  },
  Required: {
    type,
    title,
    description: PASSWORD_MESSAGES.PASSWORD_REQUIRED,
  },
};
