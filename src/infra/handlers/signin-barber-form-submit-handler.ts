import { ToastMessageType } from '@/core/types/toast-message-context-data-type';
import APIBaseInterface from '../interfaces/api-base-interface';
import ServerUnhandledErrorMessage from '@/core/messages/errors/server-unhandled-toast-error-message';
import SigninBarberToastErrorMessages from '@/core/messages/errors/signin-barber-toast-error-messages';
import SigninClientMailFactory from '../factories/mails/signin-client-mail-factory';

type SigninBarberFormSubmitHandlerType = {
  data: {
    barberName: string;
    description: string;
    file: File[];
    openAtNight: boolean;
    openOnWeekends: boolean;
  };
  addToast: (message: Omit<ToastMessageType, 'id'>) => void;
};

export default class SigninBarberFormSubmitHandler {
  constructor(private readonly signinBarberFormAPI: APIBaseInterface) {}

  public async submitHandler({
    data,
    addToast,
  }: SigninBarberFormSubmitHandlerType): Promise<void> {
    const signinBarberErrorToast = () =>
      addToast(SigninBarberToastErrorMessages.BarberShopExists);
    const serverUnhandledError = () =>
      addToast(ServerUnhandledErrorMessage.ServerUnhandledError);

    await this.signinBarberFormAPI
      .go({
        name: data.barberName,
        description: data.description,
        location: 'GoBarber-2.0. A really nice place to be.',
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

        // await SigninClientMailFactory(result!.barber!.user.email);

        return result.barber;
      });
  }
}
