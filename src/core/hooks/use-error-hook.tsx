'use client';

import { useState } from 'react';
import { HandleErroredContext } from '../contexts/use-handle-errored-context';

type HandleErroredHookProps = {
  children?: React.ReactNode;
};

export default function useHandleErroredHook({
  children,
}: HandleErroredHookProps) {
  const [fieldErrored, setFieldErrored] = useState(['']);

  function handleFieldErrored(fieldName: string) {
    const fieldNameNow = fieldErrored
      .filter((field) => field === fieldName)
      .toLocaleString();

    if (fieldName !== fieldNameNow) {
      setFieldErrored([
        ...fieldErrored.filter((blank) => blank !== ''),
        fieldName,
      ]);
    } else {
      setFieldErrored([]);
    }
  }

  return (
    <HandleErroredContext.Provider value={{ fieldErrored, handleFieldErrored }}>
      {children}
    </HandleErroredContext.Provider>
  );
}
