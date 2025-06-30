import FormSubmitHandlerBase from '@/infra/bases/form-submit-handler-base';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { AuthenticateFormDataType } from '@/infra/types/form-data-types';

import AuthenticateToastErrorMessages from '@/messages/errors/authenticate-toast-error-messages';
import ServerUnhandledErrorMessage from '@/messages/errors/server-unhandled-toast-error-message';

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

    console.log(data.password);

    // check for incorrectly formatted information
    handleEmailUsecase(data.email);
    handlePasswordUsecase(data.password);

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await this.authenticateFormAPI
            .go({ email: data.email, password: data.password })
            .then(async (result) => {
              console.log(data.password);
              console.log(result.user);
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

              return result.user;
            })
        : await this.authenticateFormAPI.fake(data).catch((error: Error) => {
            if (error) {
              authenticateErrorToast();
            }
          });

    // Redirect the user to the dashboard according to its account type

    // if (response.server.ok) {
    // if (response.user.barber) {
    //   redirect('../dashboard/barber');
    // } else {
    //   redirect('../dashboard/client');
    // }
  }
}
