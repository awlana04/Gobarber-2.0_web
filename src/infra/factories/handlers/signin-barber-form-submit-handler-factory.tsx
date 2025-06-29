import { useToastContext } from '@/contexts/use-toast-context';

import useDescriptionUsecase from '@/usecases/use-description-usecase';
import useNameUsecase from '@/usecases/use-name-usecase';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';
import SigninBarberFormAPI from '@/api/signin-barber-form-api';

import SigninBarberFormSubmitHandler from '@/handlers/signin-barber-form-submit-handler';
import HandleMapAdapter from '@/infra/adapters/implementations/handle-map-adapter';
import { useState, useEffect } from 'react';

type SigninBarberFormDataType = {
  barberName: string;
  description: string;
  file: File[];
  openAtNight: boolean;
  openOnWeekends: boolean;
};

export default function SigninBarberFormSubmitHandlerFactory(
  mapRef: React.RefObject<HTMLDivElement | null>,
  pinLocation: [number, number],
  setPinLocation: any
) {
  const { addToast } = useToastContext();

  const { handleNameUsecase } = useNameUsecase();
  const { handleDescriptionUsecase } = useDescriptionUsecase();

  const [location, setLocation] = useState<number[]>([]);

  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();
    // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    handleMapAdapter.getActualUserLocation(setLocation, location);
  }, [location]);

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

  const submitHandler = async (props: SigninBarberFormDataType) =>
    await signinBarberHandler.submitHandler({
      data: props,
      addToast,
      handleNameUsecase,
      handleDescriptionUsecase,
      pinLocation,
    });

  return { submitHandler };
}
