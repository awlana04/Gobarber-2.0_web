import translate from '@/shared/utils/translate';

import { ErrorsMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('Error on Email');

export const emailError: ErrorsMessageType = {
  Required: {
    type,
    title,
    description: translate('Email is a required field!'),
  },
  Length: {
    type,
    title,
    description: translate('Email must have at least 6 characters.'),
  },
  Valid: {
    type,
    title,
    description: translate('Must be a valid email!'),
  },
};
