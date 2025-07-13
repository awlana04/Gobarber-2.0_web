import { useMemo, useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

import AvatarImage from '@/atoms/avatar-image';

type BarbersType = {
  id: string;
  name: string;
  images: string[];
  description: string;
  location: string;
  openOnWeekends: boolean;
  openAtNight: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: {
    avatar: string;
  };
};

type AsidePropsType = {
  barbers: BarbersType[] | undefined;
  isModalOpen: boolean;
  setIsModalOpen(value: boolean): void;
};

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getDistance(
  latitude1: number,
  userLongitude: number,
  latitude2: number,
  barberLongitude: number
) {
  // Haversine Formula
  const R = 6371; //km

  const distanceLatitude = toRadians(latitude2 - latitude1);
  const distanceLongitude = toRadians(barberLongitude - userLongitude);

  const userLatitude = toRadians(latitude1);
  const barberLatitude = toRadians(latitude2);

  const a =
    Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) +
    Math.sin(distanceLongitude / 2) *
      Math.sin(distanceLongitude / 2) *
      Math.cos(userLatitude) *
      Math.cos(barberLatitude);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

function transformLocation(barber: BarbersType) {
  const barberLat = barber.location.split(/,+/).at(0);
  const barberLon = barber.location.split(/,+/).at(1);

  const latitude = Number.parseFloat(barberLat!);
  const longitude = Number.parseFloat(barberLon!);

  return { latitude, longitude };
}

function sortDistance(barbers: BarbersType[]) {
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
      } else {
        return 1;
      }
    });
}

export default function Aside(props: AsidePropsType) {
  const barbers = useMemo(() => {
    let barbers: BarbersType[] = [];

    if (props.barbers !== undefined) {
      if (props.isModalOpen === true) {
        sortDistance(props.barbers).map((barber) => barbers.push(barber));
      } else {
        sortDistance(props.barbers)
          .slice(0, 4)
          .map((barber) => barbers.push(barber));
      }
    }

    return barbers;
  }, [props.barbers, props.isModalOpen]);

  const lastBarbers = useMemo(() => {
    let barbers: BarbersType[] = [];

    if (props.barbers !== undefined) {
      if (props.isModalOpen === true) {
        props.barbers.map((barber) => barbers.push(barber));
      } else {
        props.barbers.slice(0, 2).map((barber) => barbers.push(barber));
      }
    }

    return barbers;
  }, [props.barbers, props.isModalOpen]);

  return (
    <aside
      onClick={() => props.setIsModalOpen(true)}
      data-modal={props.isModalOpen}
      className='group bg-button-text absolute end-0 top-40 z-100 h-[464] w-80 cursor-pointer rounded-tl-2xl rounded-bl-2xl p-6 text-xl hover:w-[524] data-[modal=true]:opacity-0'
    >
      <h3 className='text-orange my-2'>Barbeiros mais próximos</h3>

      {barbers.map((barber) => (
        <div
          className='flex flex-row place-content-between items-center justify-between space-x-4 py-4'
          key={barber.name}
        >
          <AvatarImage
            src={`http://localhost:3333/files/${barber.user.avatar}`}
            size='small'
          />

          <h5 className='absolute left-28 w-44 truncate'>{barber.name}</h5>

          <div className='hidden flex-col text-base group-hover:flex'>
            <div className='text-input-text my-1.5 flex flex-row items-center'>
              <FiCalendar className='text-orange mx-2.5' />

              {barber.openOnWeekends ? (
                <p className='mr-4'>Segunda à Sábado</p>
              ) : (
                <p className='mr-7'>Segunda à Sexta</p>
              )}
            </div>

            <div className='text-input-text flex flex-row items-center'>
              <FiClock className='text-orange mx-2.5' />
              {barber.openAtNight ? <p>8h às 21hrs</p> : <p> 8h às 18hrs</p>}
            </div>
          </div>
        </div>
      ))}

      <div
        data-modal={props.isModalOpen}
        className='bg-orange absolute end-0 top-[464] h-[264] w-80 rounded-tl-2xl rounded-bl-2xl p-6 text-xl data-[modal=true]:opacity-30'
      >
        <h3 className='my-2 text-white'>Últimos agendamentos</h3>

        {lastBarbers.map((barber) => (
          <div
            className='flex flex-row items-center space-x-4 py-4'
            key={barber.name}
          >
            <AvatarImage
              src={`http://localhost:3333/files/${barber.user.avatar}`}
              size='small'
            />

            <h5 className='text-background'>{barber.name}</h5>
          </div>
        ))}
      </div>
    </aside>
  );
}
