import { useMemo } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

import { UserDataType, BarberDataType } from '@/infra/types/data-type';

import AvatarImage from '@/atoms/avatar-image';
import BarberRow from './barber-row';

type AsidePropsType = {
  user: UserDataType;
  barbers: BarberDataType[] | undefined;
  isModalOpen: boolean;
  setIsModalOpen(value: boolean): void;
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

export default function Aside(props: AsidePropsType) {
  const barbers = useMemo(() => {
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

  const lastBarbers = useMemo(() => {
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

  return (
    <aside>
      <div
        onClick={() => props.setIsModalOpen(true)}
        data-modal={props.isModalOpen}
        className='bg-button-text group absolute end-0 top-40 z-100 h-[464] w-80 cursor-pointer rounded-tl-2xl rounded-bl-2xl p-6 text-xl hover:w-[524] data-[modal=true]:opacity-0'
      >
        <h3 className='text-orange my-2'>Barbeiros mais próximos</h3>

        {barbers.map((barber) => (
          <BarberRow barber={barber} isModal={false} key={barber.id} />
        ))}
      </div>

      <div
        data-modal={props.isModalOpen}
        className='bg-orange absolute end-0 top-[624] h-[264] w-80 rounded-tl-2xl rounded-bl-2xl p-6 text-xl data-[modal=true]:opacity-30'
      >
        <h3 className='my-2 text-white'>Últimos agendamentos</h3>

        {lastBarbers.map((barber) => (
          <BarberRow
            barber={barber}
            isModal={false}
            textblack={true}
            key={barber.id}
          />
        ))}
      </div>
    </aside>
  );
}
