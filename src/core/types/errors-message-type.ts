import ToastMessageType from './toast-message-type';

type RequiredAndWithoutIdToastMessageType = Required<
  Omit<ToastMessageType, 'id'>
>;

export type ErrorsMessageType = {
  Required: RequiredAndWithoutIdToastMessageType;
  Length: RequiredAndWithoutIdToastMessageType;
  Valid?: RequiredAndWithoutIdToastMessageType;
  Confirm?: RequiredAndWithoutIdToastMessageType;
};
