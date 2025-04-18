'use client';

import { useState } from 'react';

const useHandleFilledHook = () => {
  const [fieldFilled, setFieldFilled] = useState(['']);

  const handleFieldFilled = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = fieldFilled
      .filter((field) => field === event.target.name)
      .toLocaleString();

    if (event.target.value && event.target.name !== fieldName) {
      setFieldFilled([
        ...fieldFilled.filter((blank) => blank !== ''),
        event.target.name,
      ]);
    } else {
      setFieldFilled([]);
    }
  };

  return { fieldFilled, handleFieldFilled };
};

export default useHandleFilledHook;
