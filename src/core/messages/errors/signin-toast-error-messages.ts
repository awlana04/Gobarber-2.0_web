import translate from '@/shared/utils/translate';

import { RequiredAndWithoutIDToastMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('User already exists');

type SigninToastErrorMessagesType = {
  UserAlreadyExists: RequiredAndWithoutIDToastMessageType;
};

const SigninToastErrorMessages: SigninToastErrorMessagesType = {
  UserAlreadyExists: {
    type,
    title,
    description: translate('Email already taken by an user!'),
  },
};

export default SigninToastErrorMessages;
