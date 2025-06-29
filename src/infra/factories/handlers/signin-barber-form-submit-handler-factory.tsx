import { useState, useEffect } from 'react';

import { SigninBarberFormDataType } from '@/infra/types/form-data-types';

import { useToastContext } from '@/contexts/use-toast-context';

import useDescriptionUsecase from '@/usecases/use-description-usecase';
import useNameUsecase from '@/usecases/use-name-usecase';

import TrackUserActualLocation from '@/infra/utils/track-user-actual-location';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';
import SigninBarberFormAPI from '@/api/signin-barber-form-api';
import HandleMapAdapter from '@/adapters/implementations/handle-map-adapter';

import SigninBarberFormSubmitHandler from '@/handlers/signin-barber-form-submit-handler';

type SigninBarberFormSubmitHandlerFactoryType = Pick<
  SigninBarberFormDataType,
  'pinLocation'
> & {
  mapRef: React.RefObject<HTMLDivElement | null>;
  setPinLocation: any;
};

type SigninBarberFormSubmitDataType = Pick<SigninBarberFormDataType, 'data'>;

export default function SigninBarberFormSubmitHandlerFactory({
  mapRef,
  pinLocation,
  setPinLocation,
}: SigninBarberFormSubmitHandlerFactoryType) {
  const { addToast } = useToastContext();

  const { handleNameUsecase } = useNameUsecase();
  const { handleDescriptionUsecase } = useDescriptionUsecase();

  const [location, setLocation] = useState<number[]>([]);

  TrackUserActualLocation(location, setLocation);

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();

    const centeredMap = handleMapAdapter.transformLocation(location);

    const map = handleMapAdapter.createMap(mapRef, centeredMap);
    handleMapAdapter.addMapPinMarker(map, setPinLocation);

    return () => map.setTarget(null!);
  }, [location, mapRef, setPinLocation]);

  const signinBarberHandler = new SigninBarberFormSubmitHandler(
    new SigninBarberFormAPI(new FetchAPIData(), new ManageDataInBrowser())
  );

  const submitHandler = async (props: SigninBarberFormSubmitDataType) =>
    await signinBarberHandler.submitHandler({
      data: props.data,
      addToast,
      handleNameUsecase,
      handleDescriptionUsecase,
      pinLocation,
    });

  return { submitHandler };
}
