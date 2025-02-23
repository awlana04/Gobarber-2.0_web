import { useState, useCallback } from 'react';

import HandleUserData from '../libs/handle-user-data';

export default function useErrorHook() {
  const [isErrored, setIsErrored] = useState(false);
  return {
    isErrored,
    setIsErrored,
  };
}
