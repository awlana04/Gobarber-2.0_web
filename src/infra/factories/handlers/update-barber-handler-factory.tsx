import HandleMapAdapter from '@/infra/adapters/implementations/handle-map-adapter';
import { useEffect } from 'react';

type UpdateBarberHandlerFactoryPropsType = {
  mapRef: React.RefObject<HTMLDivElement | null>;
  setPinLocation: any;

  pinLocation: number[];
};

export default function UpdateBarberHandlerFactory({
  mapRef,
  pinLocation,
  setPinLocation,
}: UpdateBarberHandlerFactoryPropsType) {
  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();

    const centeredMap = handleMapAdapter.transformLocation(pinLocation);

    const map = handleMapAdapter.createMap(mapRef, centeredMap);
    handleMapAdapter.addMapPinMarker(map, setPinLocation, pinLocation);

    return () => map.setTarget(null!);
  }, [mapRef, setPinLocation]);
}
