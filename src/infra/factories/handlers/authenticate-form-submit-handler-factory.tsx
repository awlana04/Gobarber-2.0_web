// 'use server';

import { AuthenticateFormDataType } from '@/infra/types/form-data-types';

import { useToastContext } from '@/contexts/use-toast-context';

import useEmailUsecase from '@/usecases/use-email-usecase';
import usePasswordUsecase from '@/usecases/use-password-usecase';

import AuthenticateFormSubmitHandler from '@/handlers/authenticate-form-submit-handler';

import RefreshTokenAPI from '@/api/refresh-token-api';
import AuthenticateFormAPI from '@/api/authenticate-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';

type AuthenticateFormSubmitDataType = Pick<AuthenticateFormDataType, 'data'>;

export default function AuthenticateFormSubmitHandlerFactory() {
  const { addToast } = useToastContext();

  const { handleEmailUsecase } = useEmailUsecase();
  const { handlePasswordUsecase } = usePasswordUsecase();

  const fetchAPIData = new FetchAPIData();
  const manageDataInBrowser = new ManageDataInBrowser();
  const refreshTokenAPI = new RefreshTokenAPI(
    fetchAPIData,
    manageDataInBrowser
  );

  const authenticateHandler = new AuthenticateFormSubmitHandler(
    new AuthenticateFormAPI(fetchAPIData, manageDataInBrowser, refreshTokenAPI)
  );

  const submitHandler = async (props: AuthenticateFormSubmitDataType) => {
    await authenticateHandler.submitHandler({
      data: props.data,
      addToast,
      handleEmailUsecase,
      handlePasswordUsecase,
    });
  };

  return { submitHandler };
}
