import NameErrorHandling from '@/domain/validations/name-error-handling';
import { useToast } from '../contexts/use-toast-context';
import { nameError } from '../errors/name-toast-error-messages';
import useHandleErroredHook from '../hooks/use-handle-errored-hook';

export default function useNameUsecase() {
  const { state: isNameErrored, dispatch } = useHandleErroredHook();
  const { addToast } = useToast();

  const handleNameUsecase = async (name: string) => {
    const checkName = new NameErrorHandling();

    const nameLength = await checkName.length(name);
    const nameExists = await checkName.exists(name);

    switch (nameExists === false || nameLength === false) {
      case nameExists: {
        console.log(name);
        dispatch({ type: 'SET_NAME_ERROR' }), addToast(nameError.Length as any);
        break;
      }
      case nameLength: {
        dispatch({ type: 'SET_NAME_ERROR' }),
          addToast(nameError.Required as any);
        break;
      }
      default:
        dispatch({ type: 'SET_NAME_SUCCESS' });
    }
  };

  return { handleNameUsecase, isNameErrored };
}
