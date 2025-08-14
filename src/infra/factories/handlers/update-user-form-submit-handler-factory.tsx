import { useToastContext } from '@/core/contexts/use-toast-context';
import FetchAPIData from '@/infra/adapters/implementations/fetch-api-data';
import UpdateUserFormAPI from '@/infra/api/update-user-form-api';
import UpdateUserFormSubmitHandler from '@/infra/handlers/update-user-form-submit-handler';
import { UpdateUserFormDataType } from '@/infra/types/form-data-types';

type UpdateUserFormSubmitDataType = Pick<UpdateUserFormDataType, 'data'>;

export default function UpdateUserFormSubmitHandlerFactory() {
  const { addToast } = useToastContext();

  const updateUserHandler = new UpdateUserFormSubmitHandler(
    new UpdateUserFormAPI(new FetchAPIData())
  );

  const submitHandler = async (props: UpdateUserFormSubmitDataType) => {
    await updateUserHandler.submitHandler({ data: props.data, addToast });
  };

  return { submitHandler };
}
