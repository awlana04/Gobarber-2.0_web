'use client';

import { useState } from 'react';

export default function useHandleFilledHook() {
  const [isFilled, setIsFilled] = useState(false);

  const handleFilled = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  return { isFilled, handleFilled };
}
