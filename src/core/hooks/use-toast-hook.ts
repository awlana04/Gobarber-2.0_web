import { useState, useCallback } from 'react';

import { ToastMessageType } from '@/core/types/toast-message-type';

const useToastHook = () => {
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

  return { messages, addToast, removeToast };
};

export default useToastHook;
