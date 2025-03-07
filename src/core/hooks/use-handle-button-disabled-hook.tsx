import { useState } from 'react';

export default function useHandleButtonDisabledHook() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return { isButtonDisabled, setIsButtonDisabled };
}
