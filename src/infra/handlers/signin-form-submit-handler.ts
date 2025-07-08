import FormSubmitHandlerBase from '@/infra/bases/form-submit-handler-base';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { SigninFormDataType } from '@/infra/types/form-data-types';

import transformLocationLonLatForm from '@/infra/utils/transform-location-lon-lat-form';
import historyRedirect from '@/infra/utils/history-redirect';

import ServerUnhandledErrorMessage from '@/messages/errors/server-unhandled-toast-error-message';
import SigninToastErrorMessages from '@/messages/errors/signin-toast-error-messages';

import SigninClientMailFactory from '@/factories/mails/signin-client-mail-factory';

export default class SigninFormSubmitHandler extends FormSubmitHandlerBase {
  constructor(private readonly signinFormAPI: APIBaseInterface) {
    super(signinFormAPI);
  }

  public async submitHandler({
    data,
    addToast,
    handleNameUsecase,
    handleEmailUsecase,
    handlePasswordUsecase,
    location,
    isBarberSelected,
  }: SigninFormDataType & {
    isBarberSelected: boolean;
  }): Promise<void> {
    const signinErrorToast = () =>
      addToast(SigninToastErrorMessages.UserAlreadyExists);
    const serverUnhandledError = () =>
      addToast(ServerUnhandledErrorMessage.ServerUnhandledError);

    handleNameUsecase(data.name);
    handleEmailUsecase(data.email);
    handlePasswordUsecase(data.password);

    const locationLonLatForm = transformLocationLonLatForm(location);

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await this.signinFormAPI
            .go({
              name: data.name,
              email: data.email,
              password: data.password,
              location: locationLonLatForm,
              avatar: data.avatar,
            })
            .then(async (result) => {
              const status = result.server.status;
              const serverAlright = result.server.ok;

              if (status === 406) {
                signinErrorToast();
              } else if (serverAlright === false) {
                serverUnhandledError();
              }

              if (status === 200 && serverAlright === true) {
                if (isBarberSelected === true) {
                  historyRedirect('/signin/barber');
                } else {
                  historyRedirect('/logon');
                }
              }

              // if (serverAlright === true && status === 201) {
              //   await SigninClientMailFactory(data.email);
              // }

              return result.user;
            })
        : await this.signinFormAPI.fake({
            name: data.name,
            email: data.email,
            password: data.password,
            location: locationLonLatForm,
            avatar: data.avatar,
          });
    // .catch((error: Error) => {
    //   if (error) {
    //   }
    // });
  }
}
