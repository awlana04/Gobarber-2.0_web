import { useState } from 'react';

import { SigninFormDataType } from '@/infra/types/form-data-types';

import { useToastContext } from '@/contexts/use-toast-context';

import useNameUsecase from '@/usecases/use-name-usecase';
import useEmailUsecase from '@/usecases/use-email-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import SigninFormSubmitHandler from '@/handlers/signin-form-submit-handler';

import SigninFormAPI from '@/api/signin-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';

import TrackUserActualLocation from '@/infra/utils/track-user-actual-location';

type SigninFormSubmitDataType = Pick<SigninFormDataType, 'data'>;

export default function SigninFormSubmitHandlerFactory() {
  const { addToast } = useToastContext();

  const { handleNameUsecase } = useNameUsecase();
  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const [location, setLocation] = useState<number[]>([]);

  TrackUserActualLocation(location, setLocation);

  console.log(location);

  const signinHandler = new SigninFormSubmitHandler(
    new SigninFormAPI(new FetchAPIData(), new ManageDataInBrowser())
  );

  const submitHandler = async (props: SigninFormSubmitDataType) => {
    await signinHandler.submitHandler({
      data: props.data,
      addToast,
      handleNameUsecase,
      handleEmailUsecase,
      handlePasswordUsecase,
      location,
    });
  };

  return { submitHandler };
}
