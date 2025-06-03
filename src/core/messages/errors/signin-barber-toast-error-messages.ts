import translate from '@/shared/utils/translate';

import { RequiredAndWithoutIDToastMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('Invalid barber shop name');

type SigninBarberToastErrorMessagesType = {
  BarberShopExists: RequiredAndWithoutIDToastMessageType;
};

const SigninBarberToastErrorMessages: SigninBarberToastErrorMessagesType = {
  BarberShopExists: {
    type,
    title,
    description: translate('Barber shop name already taken by an user!'),
  },
};

export default SigninBarberToastErrorMessages;
