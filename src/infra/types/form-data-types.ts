import { ToastMessageType } from '@/core/types/toast-message-context-data-type';

import { UpdateStatefulValueType } from './update-stateful-value-mapped-types';

export type FormFunctionsSubmitHandlerType<T = {}> = {
  data?: T;
  updateStatefulValue?: T;
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
    'handleEmailUsecase' | 'handlePasswordUsecase' | 'storageMethod'
  >
> & {
  pinLocation: number[];
};

export type UpdateBarberFormDataType = Omit<
  FormFunctionsSubmitHandlerType<{
    description?: string;
    file?: File[];
    openAtNight?: boolean;
    openOnWeekends?: boolean;
  }>,
  | 'handleEmailUsecase'
  | 'handlePasswordUsecase'
  | 'updateStatefulValue'
  | 'handleDescriptionUsecase'
  | 'handleNameUsecase'
> & {
  pinLocation?: number[];
};

export type UpdateUserFormDataType = Required<
  Omit<
    FormFunctionsSubmitHandlerType<{
      password: string;
    }>,
    | 'handleEmailUsecase'
    | 'handlePasswordUsecase'
    | 'updateStatefulValue'
    | 'handleDescriptionUsecase'
    | 'handleNameUsecase'
  >
>;

export type AuthenticateFormDataType = Required<
  Omit<
    FormFunctionsSubmitHandlerType<{
      email: string;
      password: string;
    }>,
    'handleNameUsecase' | 'handleDescriptionUsecase' | 'updateStatefulValue'
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
    'handleDescriptionUsecase' | 'storageMethod'
  >
> & {
  location: number[];
};

export type GetAllBarbersDataType = Required<
  Pick<
    FormFunctionsSubmitHandlerType<UpdateStatefulValueType>,
    'updateStatefulValue' | 'addToast'
  >
>;
