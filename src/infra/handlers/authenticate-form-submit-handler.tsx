import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';
import { useToast } from '@/contexts/use-toast-context';

import useEmailUsecase from '@/usecases/use-email-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import AuthenticateFormAPI from '@/api/authenticate-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser-model';

export default function useAuthenticateFormSubmitHandler() {
  const { dispatch } = useHandleErroredContext();
  const { addToast } = useToast();

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const submitHandler = async (email: string, password: string) => {
    dispatch({ type: 'CHECK_PAGE_NAME', pageName: 'logon-page' });

    await handleEmailUsecase(email);
    await handlePasswordUsecase(password);

    // setIsButtonDisabled(false);

    const authenticateErrorToast = () =>
      addToast({
        type: 'error',
        title: 'Usuário não encontrado',
        description: 'Email ou senha não encontrados!',
      });

    const notFoundError = () =>
      addToast({
        type: 'error',
        title: 'Usuário não encontrado',
        description: 'Não identificamos nenhum usuário com o email informado!',
      });

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
