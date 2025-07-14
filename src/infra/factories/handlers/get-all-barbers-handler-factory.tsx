import { BarberDataType } from '@/infra/types/data-type';

import { useToastContext } from '@/contexts/use-toast-context';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';

import GetAllBarbersAPI from '@/api/get-all-barbers-api';

import GetAllBarbersHandler from '@/handlers/get-all-barbers-handler';

type GetAllBarbersHandlerFactoryType = {
  user: any;
  userToken: string;
  setBarbers(value: BarberDataType[] | undefined): void;
};

export default function GetAllBarbersHandlerFactory(
  storageMethod: GetAllBarbersHandlerFactoryType
) {
  const { addToast } = useToastContext();

  const fetchAPIData = new FetchAPIData();
  const manageDataInBrowser = new ManageDataInBrowser();

  const getAllBarbersHandler = new GetAllBarbersHandler(
    new GetAllBarbersAPI(fetchAPIData, manageDataInBrowser)
  );

  const submitHandler = async () => {
    await getAllBarbersHandler.submitHandler({
      storageMethod,
      addToast,
    });
  };

  return { submitHandler };
}
