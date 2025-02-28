import CreateUserService from '@/domain/services/create-user-service';
import PasswordErrorHandling from '@/domain/validations/password-error-handling';
import { useToast } from '../contexts/use-toast-context';
import { passwordError } from '../errors/password-toast-error-messages';
import useHandleErroredHook from '../hooks/use-handle-errored-hook';

export default function usePasswordUsecase() {
  const { state: isPasswordErrored, dispatch } = useHandleErroredHook();
  const { addToast } = useToast();

  const handlePasswordUsecase = async (
    password: string,
    confirmPassword: string
  ) => {
    const createUserService = new CreateUserService();

    const checkPassword = new PasswordErrorHandling();

    const passwordLength =
      (await checkPassword.length(password)) && confirmPassword === password;
    const passwordExists =
      (await checkPassword.exists(password)) && confirmPassword === password;

    switch (passwordLength === false || passwordExists === false) {
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

  return { handlePasswordUsecase, isPasswordErrored };
}
