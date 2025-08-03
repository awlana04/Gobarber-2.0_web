import { useEffect } from 'react';

import { UpdateBarberFormDataType } from '@/infra/types/form-data-types';

import HandleMapAdapter from '@/adapters/implementations/handle-map-adapter';
import { useToastContext } from '@/core/contexts/use-toast-context';
import UpdateBarberFormAPI from '@/infra/api/update-barber-form-api';
import FetchAPIData from '@/infra/adapters/implementations/fetch-api-data';
import UpdateBarberFormSubmitHandler from '@/infra/handlers/update-barber-form-submit-handler';

type UpdateBarberHandlerFactoryPropsType = {
  mapRef: React.RefObject<HTMLDivElement | null>;
  setPinLocation: any;
  pinLocation: number[];
};

type UpdateBarberFormSubmitDataType = Pick<UpdateBarberFormDataType, 'data'>;

export default function UpdateBarberHandlerFormSubmitHandlerFactory({
  mapRef,
  pinLocation,
  setPinLocation,
}: UpdateBarberHandlerFactoryPropsType) {
  const { addToast } = useToastContext();

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();

    const centeredMap = handleMapAdapter.transformLocation(pinLocation);

    const map = handleMapAdapter.createMap(mapRef, centeredMap);
    handleMapAdapter.addMapPinMarker(map, setPinLocation, pinLocation);

    return () => map.setTarget(null!);
  }, [mapRef, setPinLocation]);

  const updateBarberHandler = new UpdateBarberFormSubmitHandler(
    new UpdateBarberFormAPI(new FetchAPIData())
  );

  const submitHandler = async (props: UpdateBarberFormSubmitDataType) => {
    await updateBarberHandler.submitHandler({
      data: props.data,
      addToast,
      pinLocation,
    });
  };

  return { submitHandler };
}
