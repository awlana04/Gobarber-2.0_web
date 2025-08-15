import { UpdateUserFormDataType } from '@/infra/types/form-data-types';

import { useToastContext } from '@/contexts/use-toast-context';

import UpdateUserFormSubmitHandler from '@/handlers/update-user-form-submit-handler';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import UpdateUserFormAPI from '@/api/update-user-form-api';

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
