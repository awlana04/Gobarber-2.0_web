import PasswordErrorHandling from '@/domain/validations/password-error-handling';
import { passwordError } from '../errors/password-toast-error-messages';

import { useToast } from '../contexts/use-toast-context';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';

export default function usePasswordUsecase() {
  const { dispatch } = useHandleErroredContext();

  const { addToast } = useToast();

  const handlePasswordUsecase = async (
    password: string,
    confirmPassword?: string
  ) => {
    const checkPassword = new PasswordErrorHandling();

    const passwordLength = await checkPassword.length(password);
    const passwordExists = await checkPassword.exists(password);

    switch (
      confirmPassword
        ? (passwordLength && confirmPassword === password) === false ||
          (passwordExists && confirmPassword === password) === false
        : passwordLength === false || passwordExists === false
    ) {
      case passwordLength: {
        dispatch({ type: 'SET_PASSWORD_ERROR' }),
          addToast(passwordError.Length as any);
        break;
      }
      case passwordExists: {
        dispatch({ type: 'SET_PASSWORD_ERROR' }),
          addToast(passwordError.Required as any);
        break;
      }
      default:
        dispatch({ type: 'SET_PASSWORD_SUCCESS' });
    }
  };

  return { handlePasswordUsecase };
}
