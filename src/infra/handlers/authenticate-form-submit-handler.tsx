import { useToastContext } from '@/contexts/use-toast-context';

import useEmailUsecase from '@/usecases/use-email-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import AuthenticateToastErrorMessages from '@/messages/errors/authenticate-toast-error-messages';

import AuthenticateFormAPI from '@/api/authenticate-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';
import SigninPageMailFactory from '../factories/mails/signin-page-mail-factory';

export default function useAuthenticateFormSubmitHandler() {
  const { addToast } = useToastContext();

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  // save the toast messages to be used as many times the errors' type requires it
  const authenticateErrorToast = () =>
    addToast(AuthenticateToastErrorMessages.InvalidCredentials);
  const notFoundError = () => addToast(AuthenticateToastErrorMessages.NotFound);

  const submitHandler = async (email: string, password: string) => {
    // check for incorrectly formatted information
    handleEmailUsecase(email);
    handlePasswordUsecase(password);

    const authenticateFormAPI = new AuthenticateFormAPI(
      new FetchAPIData(),
      new ManageDataInBrowser()
    );

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await authenticateFormAPI
            .go({ email, password })
            .then(async (result) => {
              const status = result.server.status;
              const serverAlright = result.server.ok;

              if (status === 406 || serverAlright === false) {
                authenticateErrorToast();
              }

              if (status === 404) {
                notFoundError();
              }

              await SigninPageMailFactory(email, true);

              return result.user;
            })
        : await authenticateFormAPI
            .fake({ email, password })
            .catch((error: Error) => {
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
  };

  return { submitHandler };
}
