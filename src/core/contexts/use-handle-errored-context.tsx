'use client';

import { createContext, useContext } from 'react';

import { formState } from '../types/handle-errored-context-data-type';

type ErroredContextType = {
  state: formState;
  dispatch: any;
};

export const HandleErroredContext = createContext({} as ErroredContextType);

export function useHandleErroredContext(): ErroredContextType {
  const context = useContext(HandleErroredContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
