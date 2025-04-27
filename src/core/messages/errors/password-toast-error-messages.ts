import translate from '@/shared/utils/translate';

import { ErrorsMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('Error on Password');

export const passwordError: ErrorsMessageType = {
  Required: {
    type,
    title,
    description: translate('Password is a required field!'),
  },
  Length: {
    type,
    title,
    description: translate('Password must have at least 8 characters.'),
  },
  Confirm: {
    type,
    title: translate('Incompatible passwords'),
    description: translate('Passwords must match!'),
  },
};
