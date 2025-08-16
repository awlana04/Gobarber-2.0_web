import FormSubmitHandlerBase from '@/infra/bases/form-submit-handler-base';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { AuthenticateFormDataType } from '@/infra/types/form-data-types';

import AuthenticateToastErrorMessages from '@/messages/errors/authenticate-toast-error-messages';
import ServerUnhandledErrorMessage from '@/messages/errors/server-unhandled-toast-error-message';

import historyRedirect from '@/infra/utils/history-redirect';

export default class AuthenticateFormSubmitHandler extends FormSubmitHandlerBase {
  constructor(private readonly authenticateFormAPI: APIBaseInterface) {
    super(authenticateFormAPI);
  }

  public async submitHandler({
    data,
    addToast,
    handleEmailUsecase,
    handlePasswordUsecase,
  }: AuthenticateFormDataType): Promise<void> {
    // save the toast messages to be used as many times the errors' type requires it
    const authenticateErrorToast = () =>
      addToast(AuthenticateToastErrorMessages.InvalidCredentials);
    const notFoundError = () =>
      addToast(AuthenticateToastErrorMessages.NotFound);
    const serverUnhandledError = () =>
      addToast(ServerUnhandledErrorMessage.ServerUnhandledError);

    // check for incorrectly formatted information
    handleEmailUsecase(data.email);
    handlePasswordUsecase(data.password);

    process.env.NEXT_PUBLIC_ENV === 'dev'
      ? await this.authenticateFormAPI
          .go({ email: data.email, password: data.password })
          .then(async (result) => {
            const status = result.server.status;
            const serverAlright = result.server.ok;

            if (status === 406) {
              authenticateErrorToast();
            }

            if (status === 404) {
              notFoundError();
            }

            if (serverAlright === false) {
              serverUnhandledError();
            }

            console.log(result, result.user, result.user.barber);

            if (status === 200 && serverAlright === true) {
              if (
                result.user.barber !== undefined ||
                result.user.barber !== null
              ) {
                historyRedirect('/barber/dashboard');
              } else {
                historyRedirect('/user/dashboard');
              }
            }

            return result.user;
          })
      : await this.authenticateFormAPI
          .fake(data)
          .then(async (result) => {
            const status = result.server.status;
            const serverAlright = result.server.ok;

            if (status === 200 && serverAlright === true) {
              if (result.barber !== undefined) {
                historyRedirect('/barber/dashboard');
              } else {
                historyRedirect('/user/dashboard');
              }
            }

            return result.user;
          })
          .catch((error: Error) => {
            if (error) {
              authenticateErrorToast();
            }
          });
  }
}
