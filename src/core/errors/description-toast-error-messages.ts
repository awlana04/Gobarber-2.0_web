import { DESCRIPTION_MESSAGES } from '../constants/description-messages';

const title = DESCRIPTION_MESSAGES.DESCRIPTION_TITLE;

export const descriptionError = {
  Length: {
    type: 'error',
    title,
    description: DESCRIPTION_MESSAGES.DESCRIPTION_LENGTH,
  },
  Required: {
    type: 'error',
    title,
    description: DESCRIPTION_MESSAGES.DESCRIPTION_REQUIRED,
  },
};
