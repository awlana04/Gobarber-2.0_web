import { ToastMessageType } from '@/core/types/toast-message-context-data-type';

export type FormFunctionsSubmitHandlerType<T = {}> = {
  data: T;
  addToast: (message: Omit<ToastMessageType, 'id'>) => void;
  handleNameUsecase?(name: string): void;
  handleDescriptionUsecase?(description: string): void;
  handleEmailUsecase?(email: string): void;
  handlePasswordUsecase?(password: string): void;
};

export type SigninBarberFormDataType = Required<
  Omit<
    FormFunctionsSubmitHandlerType<{
      barberName: string;
      description: string;
      file: File[];
      openAtNight: boolean;
      openOnWeekends: boolean;
    }>,
    'handleEmailUsecase' | 'handlePasswordUsecase'
  >
> & {
  pinLocation: number[];
};

export type AuthenticateFormDataType = Required<
  Omit<
    FormFunctionsSubmitHandlerType<{
      email: string;
      password: string;
    }>,
    'handleNameUsecase' | 'handleDescriptionUsecase'
  >
>;

export type SigninFormDataType = Required<
  Omit<
    FormFunctionsSubmitHandlerType<{
      name: string;
      email: string;
      password: string;
      avatar: any;
    }>,
    'handleDescriptionUsecase'
  >
> & {
  location: number[];
};
