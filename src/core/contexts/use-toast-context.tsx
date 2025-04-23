import { createContext, useContext } from 'react';

import ToastContextData from '@/core/types/toast-context-data-type';

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

export function useToastContext(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
