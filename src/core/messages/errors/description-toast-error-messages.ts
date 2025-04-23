import translate from '@/core/utils/translate';

import { ErrorsMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('Error on Description');

export const descriptionError: ErrorsMessageType = {
  Required: {
    type,
    title,
    description: translate('Description is a required field!'),
  },
  Length: {
    type,
    title,
    description: translate('Description must have at least 32 characters.'),
  },
};
