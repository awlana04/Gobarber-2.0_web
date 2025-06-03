import translate from '@/shared/utils/translate';

import { RequiredAndWithoutIDToastMessageType } from '@/core/types/errors-message-type';

const type = 'error';
const title = translate('Server unhandled error');

type ServerUnhandledErrorMessageType = {
  ServerUnhandledError: RequiredAndWithoutIDToastMessageType;
};

const ServerUnhandledErrorMessage: ServerUnhandledErrorMessageType = {
  ServerUnhandledError: {
    type,
    title,
    description: translate(
      'Error caught in server side is unhandled by the client.'
    ),
  },
};

export default ServerUnhandledErrorMessage;
