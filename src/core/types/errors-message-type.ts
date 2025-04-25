import { ToastMessageType } from './toast-message-context-data-type';

export type RequiredAndWithoutIDToastMessageType = Required<
  Omit<ToastMessageType, 'id'>
>;

export type ErrorsMessageType = {
  Required: RequiredAndWithoutIDToastMessageType;
  Length: RequiredAndWithoutIDToastMessageType;
  Valid?: RequiredAndWithoutIDToastMessageType;
  Confirm?: RequiredAndWithoutIDToastMessageType;
};
