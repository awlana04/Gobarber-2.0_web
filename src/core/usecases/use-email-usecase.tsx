import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';
import { useToastContext } from '@/contexts/use-toast-context';

import EmailErrorHandling from '@/validations/email-error-handling';

import { emailError } from '@/messages/errors/email-toast-error-messages';

export default function useEmailUsecase() {
  const { handleFieldErrored, clearFieldErrored } = useHandleErroredContext();
  const { addToast } = useToastContext();

  const handleEmailUsecase = (email: string) => {
    const checkEmail = new EmailErrorHandling();

    const emailLength = checkEmail.length(email);
    const emailExists = checkEmail.exists(email);
    const emailIsValid = checkEmail.isValid(email);

    const setEmailErrored = () => handleFieldErrored('email');

    switch (
      emailLength === false ||
      emailExists === false ||
      emailIsValid === false
    ) {
      case emailLength: {
        setEmailErrored();
        addToast(emailError.Length);
        break;
      }
      case emailExists: {
        setEmailErrored();
        addToast(emailError.Required);
        break;
      }
      case emailIsValid: {
        setEmailErrored();
        addToast(emailError.Valid!);
        break;
      }
      default:
        clearFieldErrored('email');
        break;
    }
  };

  return { handleEmailUsecase };
}
