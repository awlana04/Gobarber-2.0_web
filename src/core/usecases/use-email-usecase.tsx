import { useToast } from '@/contexts/use-toast-context';
import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import EmailErrorHandling from '@/domain/validations/email-error-handling';

import { emailError } from '@/core/errors/email-toast-error-messages';
import useHandleErroredHook from '../hooks/errored-hook';

export default function useEmailUsecase() {
  const { addToast } = useToast();
  const { dispatch } = useHandleErroredContext();

  const handleEmailUsecase = (email: string) => {
    const checkEmail = new EmailErrorHandling();

    const emailLength = checkEmail.length(email);
    const emailExists = checkEmail.exists(email);
    const emailIsValid = checkEmail.isValid(email);

    switch (
      emailLength === false ||
      emailExists === false ||
      emailIsValid === false
    ) {
      case emailLength: {
        dispatch({ type: 'SET_EMAIL_ERROR', value: { emailValue: email } }),
          addToast(emailError.Length);
        break;
      }
      case emailExists: {
        dispatch({ type: 'SET_EMAIL_ERROR' }), addToast(emailError.Required);
        break;
      }
      case emailIsValid: {
        dispatch({ type: 'SET_EMAIL_ERROR' }), addToast(emailError.Valid!);
        break;
      }
      default:
        dispatch({ type: 'SET_EMAIL_SUCCESS' });
    }
  };

  return { handleEmailUsecase };
}
