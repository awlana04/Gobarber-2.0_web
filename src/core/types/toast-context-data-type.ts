import ToastMessageType from '@/core/types/toast-message-type';

type ToastContextData = {
  addToast(message: Omit<ToastMessageType, 'id'>): void;
  removeToast(id: string): void;
};

export default ToastContextData;
