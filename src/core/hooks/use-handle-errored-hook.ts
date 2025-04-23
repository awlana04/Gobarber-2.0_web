import { useState } from 'react';

const useHandleErroredHook = () => {
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

  return { fieldErrored, handleFieldErrored };
};

export default useHandleErroredHook;
