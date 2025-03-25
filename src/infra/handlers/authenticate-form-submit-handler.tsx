import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';
import { useToast } from '@/contexts/use-toast-context';

import useEmailUsecase from '@/usecases/use-email-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import AuthenticateFormBackendAPI from '@/api/backend/authenticate-form-backend-api';
import AuthenticateFormFrontendFakeAPI from '@/api/frontend/authenticate-form-frontend-fake-api';
import FetchAPIBase from '@/api/fetch-api-base';

export default function useAuthenticateFormSubmitHandler() {
  const { dispatch } = useHandleErroredContext();
  const { addToast } = useToast();

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const submitHandler = async (formData: FormData) => {
    const email = formData.get('email') as any;
    const password = formData.get('password') as any;

    dispatch({ type: 'CHECK_PAGE_NAME', pageName: 'logon-page' });

    await handleEmailUsecase(email);
    await handlePasswordUsecase(password);

    // setIsButtonDisabled(false);

    const authenticateErrorToast = addToast({
      type: 'error',
      title: 'Usuário não encontrado',
      description: 'Email ou senha não encontrados!',
    });

    const authenticateFormBackendAPI = new AuthenticateFormBackendAPI(
      new FetchAPIBase()
    );

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await authenticateFormBackendAPI
            .run({ email, password })
            .then((result) => {
              if (!result.server.ok) {
                authenticateErrorToast;
              }

              return result.user;
            })
        : await AuthenticateFormFrontendFakeAPI({ email, password });

    // if (response.server.ok) {
    // if (response.user.barber) {
    //   redirect('../dashboard/barber');
    // } else {
    //   redirect('../dashboard/client');
    // }
  };

  return { submitHandler };
}
