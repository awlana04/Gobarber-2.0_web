'use client';

import {
  useState,
  createContext,
  useCallback,
  ReactNode,
  useContext,
} from 'react';

import ToastContainer from '@/core/utils/toast-container';

import { ToastMessageType } from '@/core/types/toast-message-type';

import { ToastContext } from '@/contexts/use-toast-context';

type ToastHookProps = {
  children?: ReactNode;
};
export default function ToastHook({ children }: ToastHookProps) {
  const [messages, setMessages] = useState<ToastMessageType[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageType, 'id'>) => {
      const id = `gobarber_toast_id-${Math.random().toExponential(12)}-${Math.random().toPrecision(6)}`;

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}
