import AuthenticateFormBackendAPI from '../api/backend/form-backend-api';
import AuthenticateUserFakeServer from '../server/authenticate-user-fake-server';

export default async function AuthenticateFormSubmitHandler(
  dispatch: any,
  handleEmailUsecase: any,
  handlePasswordUsecase: any,
  addToast: any
) {
  const formData = new FormData();

  const email = formData.get('email') as any;
  const password = formData.get('password') as any;

  dispatch({ type: 'CHECK_PAGE_NAME', pageName: 'logon-page' });

  await handleEmailUsecase(email);
  await handlePasswordUsecase(password);

  // setIsButtonDisabled(false);

  console.log(email);

  const response =
    process.env.NEXT_PUBLIC_ENV === 'dev'
      ? await AuthenticateFormBackendAPI({ email, password }).then((result) => {
          if (!result.server.ok) {
            addToast({
              type: 'error',
              title: 'Usuário não encontrado',
              description: 'Email ou senha não encontrados!',
            });
          }

          return result.user;
        })
      : await AuthenticateUserFakeServer({ email, password });

  // if (response.server.ok) {
  // if (response.user.barber) {
  //   redirect('../dashboard/barber');
  // } else {
  //   redirect('../dashboard/client');
  // }
}
