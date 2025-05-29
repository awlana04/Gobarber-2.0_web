'use client';

import { createContext, useContext } from 'react';

type ErroredContextType = {
  fieldErrored: string[];
  handleFieldErrored(fieldName: string): void;
  clearFieldErrored(fieldName: string): void;
};

export const HandleErroredContext = createContext({} as ErroredContextType);

export function useHandleErroredContext(): ErroredContextType {
  const context = useContext(HandleErroredContext);

  if (!context) {
    throw new Error('useHandleErrored must be used within a ErroredProvider');
  }

  return context;
}
