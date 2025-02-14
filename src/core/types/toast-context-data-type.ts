import { ToastMessageType } from '@/presentation/interfaces/toast-message-type';

export type ToastContextData = {
  addToast(message: Omit<ToastMessageType, 'id'>): void;
  removeToast(id: string): void;
};
