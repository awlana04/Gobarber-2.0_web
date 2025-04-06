export type ToastMessageType = {
  id: string;
  type: 'error' | 'success' | 'info';
  title: string;
  description?: string;
};
