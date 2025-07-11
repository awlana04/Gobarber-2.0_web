import { useMemo } from 'react';
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
  title: string;
  barbers: BarbersType[] | undefined;
  isModalOpen: boolean;
  setIsModalOpen(value: boolean): void;
};

export default function Aside(props: AsidePropsType) {
  const barbers = useMemo(() => {
    let barbers: BarbersType[] = [];

    if (props.barbers !== undefined) {
      if (props.isModalOpen === true) {
        props.barbers.map((barber) => barbers.push(barber));
      } else {
        props.barbers.slice(0, 4).map((barber) => barbers.push(barber));
      }
    }

    return barbers;
  }, [props.barbers, props.isModalOpen]);

  return (
    <div
      onClick={() => props.setIsModalOpen(true)}
      data-modal={props.isModalOpen}
      className='group bg-button-text absolute end-0 top-40 h-[464] w-80 cursor-pointer rounded-tl-2xl rounded-bl-2xl p-6 text-xl hover:w-[524] data-[modal=true]:opacity-0'
    >
      <h3 className='text-orange my-2'>{props.title}</h3>

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
    </div>
  );
}
