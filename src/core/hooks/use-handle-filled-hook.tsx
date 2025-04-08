'use client';

import { useState } from 'react';

export default function useHandleFilledHook() {
  const [fieldFilled, setFieldFilled] = useState(['']);

  const handleFieldFilled = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setFieldFilled([...fieldFilled, event.target.name]);
    } else {
      setFieldFilled([]);
    }
  };

  return { fieldFilled, handleFieldFilled };
}
