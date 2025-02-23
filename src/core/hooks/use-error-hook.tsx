import { useState, useCallback } from 'react';

export default function useErrorHook() {
  const [isErrored, setIsErrored] = useState(false);
  return {
    isErrored,
    setIsErrored,
  };
}
