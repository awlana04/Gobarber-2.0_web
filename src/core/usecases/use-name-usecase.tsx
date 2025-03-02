import NameErrorHandling from '@/domain/validations/name-error-handling';
import { useToast } from '../contexts/use-toast-context';
import { nameError } from '../errors/name-toast-error-messages';
import { useHandleErroredContext } from '../contexts/use-handle-errored-context';

export default function useNameUsecase() {
  const { dispatch } = useHandleErroredContext();
  const { addToast } = useToast();

  const handleNameUsecase = async (name: string) => {
    const checkName = new NameErrorHandling();

    const nameLength = await checkName.length(name);
    const nameExists = await checkName.exists(name);

    switch (nameExists === false || nameLength === false) {
      case nameExists: {
        console.log(name);
        dispatch({ type: 'SET_NAME_ERROR', value: { nameValue: name } }),
          addToast(nameError.Length as any);
        break;
      }
      case nameLength: {
        dispatch({ type: 'SET_NAME_ERROR', value: { nameValue: name } }),
          addToast(nameError.Required as any);
        break;
      }
      default:
        dispatch({ type: 'SET_NAME_SUCCESS' });
    }
  };

  return { handleNameUsecase };
}
