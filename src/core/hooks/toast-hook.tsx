'use client';

import {
  useState,
  createContext,
  useCallback,
  ReactNode,
  useContext,
} from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '@/presentation/components/molecules/toast-container';

import { ToastMessageType } from '@interfaces/toast-message-type';

import { ToastContext } from '@contexts/use-toast-context';

type ToastHookProps = {
  children?: ReactNode;
};
export default function ToastHook({ children }: ToastHookProps) {
  const [messages, setMessages] = useState<ToastMessageType[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessageType, 'id'>) => {
      const id = uuid();

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
