'use client';

import { useState } from 'react';

export default function useHandleFilledHook() {
  const [isFilled, setIsFilled] = useState(false);

  const handleFilled = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  return { isFilled, handleFilled };
}
