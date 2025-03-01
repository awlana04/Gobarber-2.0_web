import CreateUserService from '@/domain/services/create-user-service';
import PasswordErrorHandling from '@/domain/validations/password-error-handling';
import { useToast } from '../contexts/use-toast-context';
import { passwordError } from '../errors/password-toast-error-messages';
import { useContext } from 'react';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';

export default function usePasswordUsecase() {
  const { state, dispatch } = useHandleErroredContext();

  const { addToast } = useToast();

  const handlePasswordUsecase = async (
    password: string,
    confirmPassword?: string
  ) => {
    const checkPassword = new PasswordErrorHandling();

    const passwordLength = await checkPassword.length(password);
    const passwordExists = await checkPassword.exists(password);

    const confirmPasswordLength =
      passwordLength && confirmPassword === password;
    const confirmPasswordExists =
      passwordExists && confirmPassword === password;

    switch (
      passwordLength === false ||
      passwordExists === false ||
      confirmPasswordExists === false ||
      confirmPasswordLength === false
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
