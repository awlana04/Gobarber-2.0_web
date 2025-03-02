import { useHandleErroredContext } from '../contexts/use-handle-errored-context';
import { useToast } from '../contexts/use-toast-context';

import DescriptionErrorHandling from '@/domain/validations/description-error-handling';

import { descriptionError } from '../errors/description-toast-error-messages';

export default function useDescriptionUsecase() {
  const { dispatch } = useHandleErroredContext();
  const { addToast } = useToast();

  const handleDescriptionUsecase = async (description: string) => {
    const checkDescription = new DescriptionErrorHandling();

    const descriptionLength = await checkDescription.length(description);
    const descriptionExists = await checkDescription.exists(description);

    switch (descriptionExists === false || descriptionLength === false) {
      case descriptionExists: {
        dispatch({
          type: 'SET_DESCRIPTION_ERROR',
          value: { descriptionValue: description },
        }),
          addToast(descriptionError.Length as any);
        break;
      }
      case descriptionLength: {
        dispatch({
          type: 'SET_DESCRIPTION_ERROR',
          value: { descriptionValue: description },
        }),
          addToast(descriptionError.Required as any);
        break;
      }
      default:
        dispatch({ type: 'SET_DESCRIPTION_SUCCESS' });
    }
  };

  return { handleDescriptionUsecase };
}
