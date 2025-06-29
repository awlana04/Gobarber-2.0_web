import { useToastContext } from '@/core/contexts/use-toast-context';
import FetchAPIData from '@/infra/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/infra/adapters/implementations/manage-data-in-browser';
import SigninBarberFormAPI from '@/infra/api/signin-barber-form-api';
import SigninBarberFormSubmitHandler from '@/infra/handlers/signin-barber-form-submit-handler';

type SigninBarberFormDataType = {
  barberName: string;
  description: string;
  file: File[];
  openAtNight: boolean;
  openOnWeekends: boolean;
};

export default function SigninBarberFormSubmitHandlerFactory() {
  const { addToast } = useToastContext();

  const signinBarberHandler = new SigninBarberFormSubmitHandler(
    new SigninBarberFormAPI(new FetchAPIData(), new ManageDataInBrowser())
  );

  const submitHandler = async (props: SigninBarberFormDataType) =>
    await signinBarberHandler.submitHandler({
      data: props,
      addToast,
    });

  return { submitHandler };
}
