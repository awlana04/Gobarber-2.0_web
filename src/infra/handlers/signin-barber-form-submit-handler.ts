import FormSubmitHandlerBase from '@/infra/bases/form-submit-handler-base';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import { SigninBarberFormDataType } from '@/infra/types/form-data-types';

import ServerUnhandledErrorMessage from '@/messages/errors/server-unhandled-toast-error-message';
import SigninBarberToastErrorMessages from '@/messages/errors/signin-barber-toast-error-messages';

import SigninClientMailFactory from '@/factories/mails/signin-client-mail-factory';

import transformLocationLonLatForm from '@/infra/utils/transform-location-lon-lat-form';

export default class SigninBarberFormSubmitHandler extends FormSubmitHandlerBase {
  constructor(private readonly signinBarberFormAPI: APIBaseInterface) {
    super(signinBarberFormAPI);
  }

  public async submitHandler({
    data,
    addToast,
    handleNameUsecase,
    handleDescriptionUsecase,
    pinLocation,
  }: SigninBarberFormDataType): Promise<void> {
    const signinBarberErrorToast = () =>
      addToast(SigninBarberToastErrorMessages.BarberShopExists);
    const serverUnhandledError = () =>
      addToast(ServerUnhandledErrorMessage.ServerUnhandledError);

    handleNameUsecase(data.barberName);
    handleDescriptionUsecase(data.description);

    const locationLonLatForm = transformLocationLonLatForm(pinLocation);

    process.env.NEXT_PUBLIC_ENV === 'dev'
      ? await this.signinBarberFormAPI
          .go({
            name: data.barberName,
            description: data.description,
            location: locationLonLatForm,
            file: data.file,
            openAtNight: data.openAtNight,
            openOnWeekends: data.openOnWeekends,
          })
          .then(async (result) => {
            const status = result.server.status;
            const serverAlright = result.server.ok;

            if (status === 406) {
              signinBarberErrorToast();
            } else if (serverAlright === false) {
              serverUnhandledError();
            }

            if (serverAlright === true && status === 201) {
              await SigninClientMailFactory(result!.barber!.user.email);
            }

            return result.barber;
          })
      : await this.signinBarberFormAPI.fake({
          name: data.barberName,
          description: data.description,
          location: locationLonLatForm,
          file: data.file,
          openAtNight: data.openAtNight,
          openOnWeekends: data.openOnWeekends,
        });
  }
}
