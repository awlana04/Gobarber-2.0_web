import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';
import { useToastContext } from '@/contexts/use-toast-context';

import PasswordErrorHandling from '@/validations/password-error-handling';

import { passwordError } from '@/messages/errors/password-toast-error-messages';

export default function usePasswordUsecase() {
  const { handleFieldErrored, clearFieldErrored } = useHandleErroredContext();
  const { addToast } = useToastContext();

  const handlePasswordUsecase = (
    password: string,
    confirmPassword?: string
  ) => {
    const checkPassword = new PasswordErrorHandling();

    const passwordLength = checkPassword.length(password);
    const passwordExists = checkPassword.exists(password);

    const setPasswordErrored = () => handleFieldErrored('password');
    const setConfirmPasswordErrored = () =>
      handleFieldErrored('confirmPassword');

    if (confirmPassword && confirmPassword !== password) {
      setConfirmPasswordErrored();
      addToast(passwordError.Confirm!);
    }

    switch (
      confirmPassword
        ? (passwordLength && confirmPassword === password) === false ||
          (passwordExists && confirmPassword === password) === false
        : passwordLength === false || passwordExists === false
    ) {
      case passwordLength: {
        setPasswordErrored();
        addToast(passwordError.Length);
        break;
      }
      case passwordExists: {
        setPasswordErrored();
        addToast(passwordError.Required);
        break;
      }
      default:
        clearFieldErrored('password');
        break;
    }
  };

  return { handlePasswordUsecase };
}
