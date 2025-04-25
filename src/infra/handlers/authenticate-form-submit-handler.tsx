import { useToastContext } from '@/contexts/use-toast-context';

import useEmailUsecase from '@/usecases/use-email-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import AuthenticateFormAPI from '@/api/authenticate-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser-model';

import AuthenticateToastErrorMessages from '@/messages/errors/authenticate-toast-error-messages';

export default function useAuthenticateFormSubmitHandler() {
  const { addToast } = useToastContext();

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const submitHandler = async (email: string, password: string) => {
    handleEmailUsecase(email);
    handlePasswordUsecase(password);

    const authenticateErrorToast = () =>
      addToast(AuthenticateToastErrorMessages.InvalidCredentials);

    const notFoundError = () =>
      addToast(AuthenticateToastErrorMessages.NotFound);

    const authenticateFormAPI = new AuthenticateFormAPI(
      new FetchAPIData(),
      new ManageDataInBrowser()
    );

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await authenticateFormAPI.go({ email, password }).then((result) => {
            const status = result.server.status;
            const serverAlright = result.server.ok;

            switch (!serverAlright || status) {
              case status === 406:
                authenticateErrorToast();
                break;
              case status === 404:
                notFoundError();
                break;
              case !serverAlright:
                authenticateErrorToast();
                break;
              default:
                authenticateErrorToast();
                break;
            }

            return result.user;
          })
        : await authenticateFormAPI
            .fake({ email, password })
            .catch((error: Error) => {
              if (error) {
                authenticateErrorToast();
              }
            });

    // if (response.server.ok) {
    // if (response.user.barber) {
    //   redirect('../dashboard/barber');
    // } else {
    //   redirect('../dashboard/client');
    // }
  };

  return { submitHandler };
}
