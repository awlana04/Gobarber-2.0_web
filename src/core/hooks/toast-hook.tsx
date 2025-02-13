'use client';

import {
  useState,
  createContext,
  useCallback,
  ReactNode,
  useContext,
} from 'react';

import ToastContainer from '@/presentation/components/molecules/toast-container';
import { uuid } from 'uuidv4';

type ToastMessage = {
  id: string;
  type?: 'error' | 'success' | 'info';
  title: string;
  description?: string;
};

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

type ToastHookProps = {
  children?: ReactNode;
};
export default function ToastHook({ children }: ToastHookProps) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((state) => [...state, toast]);
    },
    [setMessages, messages]
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

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
