import translate from '@/core/utils/translate';

import { ErrorsMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('Error on Name');

export const nameError: ErrorsMessageType = {
  Required: {
    type,

    title,
    description: translate('Name is a required field!'),
  },
  Length: {
    type,
    title,
    description: translate('Name must have at least 3 characters.'),
  },
};
