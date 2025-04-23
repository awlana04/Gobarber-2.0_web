import { useHandleErroredContext } from '@/contexts/use-handle-errored-context';
import { useToastContext } from '@/contexts/use-toast-context';

import DescriptionErrorHandling from '@/validations/description-error-handling';

import { descriptionError } from '@/messages/errors/description-toast-error-messages';

export default function useDescriptionUsecase() {
  const { handleFieldErrored } = useHandleErroredContext();
  const { addToast } = useToastContext();

  const handleDescriptionUsecase = async (description: string) => {
    const checkDescription = new DescriptionErrorHandling();

    const descriptionLength = await checkDescription.length(description);
    const descriptionExists = await checkDescription.exists(description);

    const setDescriptionErrored = () => handleFieldErrored('description');

    switch (descriptionExists === false || descriptionLength === false) {
      case descriptionExists: {
        setDescriptionErrored();
        addToast(descriptionError.Length);
        break;
      }
      case descriptionLength: {
        setDescriptionErrored();
        addToast(descriptionError.Required);
        break;
      }
      default:
        break;
    }
  };

  return { handleDescriptionUsecase };
}
