export type ToastMessageType = {
  id: string;
  type: 'error' | 'success' | 'info';
  title: string;
  description?: string;
};

export type ToastContextData = {
  addToast(message: Omit<ToastMessageType, 'id'>): void;
  removeToast(id: string): void;
};
