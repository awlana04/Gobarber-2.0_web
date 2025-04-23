import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';
import { useToastContext } from '@/contexts/use-toast-context';

import NameErrorHandling from '@/validations/name-error-handling';

import { nameError } from '@/messages/errors/name-toast-error-messages';

export default function useNameUsecase() {
  const { handleFieldErrored } = useHandleErroredContext();
  const { addToast } = useToastContext();

  const handleNameUsecase = (name: string) => {
    const checkName = new NameErrorHandling();

    const nameLength = checkName.length(name);
    const nameExists = checkName.exists(name);

    const setNameErrored = () => handleFieldErrored('name');

    switch (nameExists === false || nameLength === false) {
      case nameExists: {
        setNameErrored();
        addToast(nameError.Length);
        break;
      }
      case nameLength: {
        setNameErrored();
        addToast(nameError.Required as any);
        break;
      }
      default:
        break;
    }
  };

  return { handleNameUsecase };
}
