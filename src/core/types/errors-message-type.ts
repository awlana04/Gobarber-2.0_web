import { ToastMessageType } from '@/presentation/interfaces/toast-message-type';

type RequiredAndWithoutIdToastMessageType = Required<
  Omit<ToastMessageType, 'id'>
>;

export type ErrorsMessageType = {
  Required: RequiredAndWithoutIdToastMessageType;
  Length: RequiredAndWithoutIdToastMessageType;
  Valid?: RequiredAndWithoutIdToastMessageType;
};
