import { useEffect } from 'react';

import HandleMapAdapter from '@/adapters/implementations/handle-map-adapter';

export default function TrackUserActualLocation(
  location: number[],
  setLocation: any
) {
  useEffect(() => {
    const handleMapAdapter = new HandleMapAdapter();
    // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
    handleMapAdapter.getActualUserLocation(setLocation, location);
  }, [location, setLocation]);
}
