import EmailErrorHandling from '@/domain/validations/email-error-handling';
import { emailError } from '../errors/email-toast-error-messages';
import { useToast } from '../contexts/use-toast-context';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';

export default function useEmailUsecase() {
  const { addToast } = useToast();
  const { dispatch } = useHandleErroredContext();

  const handleEmailUsecase = async (email: string) => {
    const checkEmail = new EmailErrorHandling();

    const emailLength = await checkEmail.length(email);
    const emailExists = await checkEmail.exists(email);
    const emailIsValid = await checkEmail.isValid(email);

    switch (
      emailLength === false ||
      emailExists === false ||
      emailIsValid === false
    ) {
      case emailLength: {
        dispatch({ type: 'SET_EMAIL_ERROR', value: { emailValue: email } }),
          addToast(emailError.Length as any);
        break;
      }
      case emailExists: {
        dispatch({ type: 'SET_EMAIL_ERROR' }),
          addToast(emailError.Required as any);
        break;
      }
      case emailIsValid: {
        dispatch({ type: 'SET_EMAIL_ERROR' }),
          addToast(emailError.Valid as any);
        break;
      }
      default:
        dispatch({ type: 'SET_EMAIL_SUCCESS' });
    }
  };

  return { handleEmailUsecase };
}
