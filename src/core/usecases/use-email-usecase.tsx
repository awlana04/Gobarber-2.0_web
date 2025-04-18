import { useToast } from '@/contexts/use-toast-context';
import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';

import EmailErrorHandling from '@/domain/validations/email-error-handling';

import { emailError } from '@/core/errors/email-toast-error-messages';

export default function useEmailUsecase() {
  const { addToast } = useToast();
  const { handleFieldErrored } = useHandleErroredContext();

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
        break;
    }
  };

  return { handleEmailUsecase };
}
