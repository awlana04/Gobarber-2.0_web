import { ToastMessageType } from '@/core/types/toast-message-context-data-type';

import APIBaseInterface from '@/infra/interfaces/api-base-interface';

import ServerUnhandledErrorMessage from '@/messages/errors/server-unhandled-toast-error-message';
import SigninBarberToastErrorMessages from '@/messages/errors/signin-barber-toast-error-messages';

import SigninClientMailFactory from '@/factories/mails/signin-client-mail-factory';

import transformLocationLonLatForm from '@/infra/utils/transform-location-lon-lat-form';

type SigninBarberFormSubmitHandlerType = {
  data: {
    barberName: string;
    description: string;
    file: File[];
    openAtNight: boolean;
    openOnWeekends: boolean;
  };
  addToast: (message: Omit<ToastMessageType, 'id'>) => void;
  handleNameUsecase(name: string): void;
  handleDescriptionUsecase(description: string): void;
  pinLocation: [number, number];
};

export default class SigninBarberFormSubmitHandler {
  constructor(private readonly signinBarberFormAPI: APIBaseInterface) {}

  public async submitHandler({
    data,
    addToast,
    handleNameUsecase,
    handleDescriptionUsecase,
    pinLocation,
  }: SigninBarberFormSubmitHandlerType): Promise<void> {
    const signinBarberErrorToast = () =>
      addToast(SigninBarberToastErrorMessages.BarberShopExists);
    const serverUnhandledError = () =>
      addToast(ServerUnhandledErrorMessage.ServerUnhandledError);

    handleNameUsecase(data.barberName);
    handleDescriptionUsecase(data.description);

    const locationLonLatForm = transformLocationLonLatForm(pinLocation);

    await this.signinBarberFormAPI
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
        }

        if (serverAlright === false) {
          serverUnhandledError();
        }

        if (serverAlright === true && status === 201) {
          await SigninClientMailFactory(result!.barber!.user.email);
        }

        return result.barber;
      });
  }
}
