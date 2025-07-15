import { UpdateStatefulValueType } from '@/infra/types/update-stateful-value-mapped-types';

import { useToastContext } from '@/contexts/use-toast-context';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';

import GetAllBarbersAPI from '@/api/get-all-barbers-api';

import GetAllBarbersHandler from '@/handlers/get-all-barbers-handler';

export default function GetAllBarbersHandlerFactory(
  updateStatefulValue: UpdateStatefulValueType
) {
  const { addToast } = useToastContext();

  const fetchAPIData = new FetchAPIData();

  const getAllBarbersHandler = new GetAllBarbersHandler(
    new GetAllBarbersAPI(fetchAPIData)
  );

  const submitHandler = async () => {
    await getAllBarbersHandler.submitHandler({
      updateStatefulValue,
      addToast,
    });
  };

  return { submitHandler };
}
