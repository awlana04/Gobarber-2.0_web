import { useMemo } from 'react';

import { UserDataType, BarberDataType } from '@/infra/types/data-type';

type UseHandleSortedBarbersPropsType = {
  user: UserDataType;
  barbers: BarberDataType[] | undefined;
  isModalOpen: boolean;
};

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getDistance(
  userLatitude: number,
  userLongitude: number,
  barberLatitude: number,
  barberLongitude: number
) {
  // Haversine Formula
  const R = 6371; //km

  const distanceLatitude = toRadians(barberLatitude - userLatitude);
  const distanceLongitude = toRadians(barberLongitude - userLongitude);

  const userLatitudeInRadians = toRadians(userLatitude);
  const barberLatitudeInRadians = toRadians(barberLatitude);

  const a =
    Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) +
    Math.sin(distanceLongitude / 2) *
      Math.sin(distanceLongitude / 2) *
      Math.cos(userLatitudeInRadians) *
      Math.cos(barberLatitudeInRadians);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

function transformLocation(entity: { location: string }) {
  const entityLat = entity.location.split(/,+/).at(0);
  const entityLon = entity.location.split(/,+/).at(1);

  const latitude = Number.parseFloat(entityLat!);
  const longitude = Number.parseFloat(entityLon!);

  return { latitude, longitude };
}

function sortDistance(user: UserDataType, barbers: BarberDataType[]) {
  const userLatitude = transformLocation({ location: user.location }).latitude;
  const userLongitude = transformLocation({
    location: user.location,
  }).longitude;

  const myLocationTest = [18.034405, 0.538358];

  return barbers
    .filter(
      (barber) =>
        Number.isNaN(transformLocation(barber).latitude) === false &&
        Number.isNaN(transformLocation(barber).longitude) === false
    )
    .sort((a, b) => {
      const aLatitude = transformLocation(a).latitude;
      const aLongitude = transformLocation(a).longitude;
      const bLatitude = transformLocation(b).latitude;
      const bLongitude = transformLocation(b).longitude;

      const aDistance = Number.parseFloat(
        getDistance(
          myLocationTest[0],
          myLocationTest[1],
          aLatitude,
          aLongitude
        ).toFixed(1)
      );

      const bDistance = Number.parseFloat(
        getDistance(
          myLocationTest[0],
          myLocationTest[1],
          bLatitude,
          bLongitude
        ).toFixed(1)
      );

      if (aDistance < bDistance) {
        return -1;
      }

      if (aDistance > bDistance) {
        return 1;
      }

      return 0;
    });
}

const useHandleSortedBarbers = (props: UseHandleSortedBarbersPropsType) => {
  const sortedBarbers = useMemo(() => {
    let barbers: BarberDataType[] = [];

    if (props.barbers !== undefined) {
      if (props.isModalOpen === true) {
        sortDistance(props.user, props.barbers).map((barber) =>
          barbers.push(barber)
        );
      } else {
        sortDistance(props.user, props.barbers)
          .slice(0, 4)
          .map((barber) => barbers.push(barber));
      }
    }

    return barbers;
  }, [props.user, props.barbers, props.isModalOpen]);

  const sortedLastBarbers = useMemo(() => {
    let barbers: BarberDataType[] = [];

    if (props.barbers !== undefined) {
      // if (props.isModalOpen === true) {
      //   props.barbers.map((barber) => barbers.push(barber));
      // } else {
      props.barbers.slice(0, 2).map((barber) => barbers.push(barber));
      // }
    }

    return barbers;
  }, [props.barbers, props.isModalOpen]);

  return { sortedBarbers, sortedLastBarbers };
};

export default useHandleSortedBarbers;
