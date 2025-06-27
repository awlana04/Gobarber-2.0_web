import { useToastContext } from '@/contexts/use-toast-context';

import useDescriptionUsecase from '@/usecases/use-description-usecase';
import useNameUsecase from '@/usecases/use-name-usecase';

import ServerUnhandledErrorMessage from '@/messages/errors/server-unhandled-toast-error-message';
import SigninBarberToastErrorMessages from '@/messages/errors/signin-barber-toast-error-messages';

import SigninBarberFormAPI from '@/api/signin-barber-form-api';

import FetchAPIData from '@/adapters/implementations/fetch-api-data';
import ManageDataInBrowser from '@/adapters/implementations/manage-data-in-browser';

import SigninClientMailFactory from '@/factories/mails/signin-client-mail-factory';
import { useState, useEffect } from 'react';
import HandleMapAdapter from '../adapters/implementations/handle-map-adapter';
import transformLocationLonLatForm from '../utils/transform-location-lon-lat-form';

export default function SigninBarberFormHandler(
  mapRef: React.RefObject<HTMLDivElement | null>,
  pinLocation: number[],
  setPinLocation: any
) {
  const { addToast } = useToastContext();

  const { handleNameUsecase } = useNameUsecase();
  const { handleDescriptionUsecase } = useDescriptionUsecase();

  const signinBarberErrorToast = () =>
    addToast(SigninBarberToastErrorMessages.BarberShopExists);
  const serverUnhandledError = () =>
    addToast(ServerUnhandledErrorMessage.ServerUnhandledError);

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

  const locationLonLatForm = transformLocationLonLatForm(pinLocation);

  const submitHandler = async (
    barberName: string,
    description: string,
    file: File[],
    openAtNight: boolean,
    openOnWeekends: boolean
  ) => {
    handleNameUsecase(barberName);
    handleDescriptionUsecase(description);

    const signinBarberFormAPI = new SigninBarberFormAPI(
      new FetchAPIData(),
      new ManageDataInBrowser()
    );

    const response =
      process.env.NEXT_PUBLIC_ENV === 'dev'
        ? await signinBarberFormAPI
            .go({
              name: barberName,
              description,
              location: locationLonLatForm,
              file,
              openAtNight,
              openOnWeekends,
            })
            .then(async (result) => {
              const status = result.server.status;
              const serverAlright = result.server.ok;

              if (status === 406) {
                signinBarberErrorToast();
              }

              if (serverAlright === false) {
                serverUnhandledError();
              }

              await SigninClientMailFactory(result!.barber!.user.email);

              return result.barber;
            })
        : await signinBarberFormAPI.fake({
            name: barberName,
            description,
            location: locationLonLatForm,
            file,
            openAtNight,
            openOnWeekends,
          });
  };

  return { submitHandler };
}
