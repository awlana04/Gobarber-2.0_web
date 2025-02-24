import { useState } from 'react';

// import useHandleErroredHook from '../hooks/use-error-hook';

// import { useToast } from '../contexts/use-toast-context';

export default function EmailErrorHandling(email: string) {
  if (email.length < 4) {
    return false;
  }

  return true;
}
