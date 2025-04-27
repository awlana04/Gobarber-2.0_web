import translate from '@/shared/utils/translate';

import { RequiredAndWithoutIDToastMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('User not found');

type AuthenticateToastErrorMessagesType = {
  InvalidCredentials: RequiredAndWithoutIDToastMessageType;
  NotFound: RequiredAndWithoutIDToastMessageType;
};

const AuthenticateToastErrorMessages: AuthenticateToastErrorMessagesType = {
  InvalidCredentials: {
    type,
    title,
    description: translate('Email or password not found!'),
  },
  NotFound: {
    type,
    title,
    description: translate(
      "We haven't found any user with the email provided!"
    ),
  },
};

export default AuthenticateToastErrorMessages;
