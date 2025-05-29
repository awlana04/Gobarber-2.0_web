import useEmailUsecase from '@/usecases/use-email-usecase';
import useNameUsecase from '@/usecases/use-name-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import SigninFormAPI from '@/api/signin-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';
export default function useSigninFormSubmitHandler() {
  const { handleNameUsecase } = useNameUsecase();
  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const submitHandler = async (
    name: string,
    email: string,
    password: string,
    avatar: any
  ) => {
    handleNameUsecase(name);
    handleEmailUsecase(email);
    handlePasswordUsecase(password);

    const signinFormAPI = new SigninFormAPI(
      new FetchAPIData(),
      new ManageDataInBrowser()
    );

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await signinFormAPI
            .go({
              name,
              email,
              password,
              location: 'Somewhere Over the Rainbow',
              avatar,
            })
            .then(async (result) => {
              const status = result.server.status;
              const serverAlright = result.server.ok;

              console.log(result);

              return result.user;
            })
        : await signinFormAPI.fake({
            name,
            email,
            password,
            location: 'Somewhere Over the Rainbow',
            avatar,
          });
    // .catch((error: Error) => {
    //   if (error) {
    //   }
    // });
  };

  return { submitHandler };
}
