'use client';

import { useEffect, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

import { BarberDataType, UserDataType } from '@/infra/types/data-type';

import translate from '@/shared/utils/translate';

import DashboardTemplate from '@/templates/dashboard-template';

import Calendar from '@/atoms/calendar';

import Aside from '@/molecules/aside';
import BarberRow from '../components/molecules/barber-row';

type UserDashboardScreenType = {
  user: UserDataType;
  userToken: string;
  // barbers: BarbersType;
  logoutOnclick(): void;
};

export default function UserDashboardScreen(props: UserDashboardScreenType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [barbers, setBarbers] = useState<BarberDataType[]>();

  useEffect(() => {
    fetch(`http://localhost:3333/barbers/all/${props.user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.userToken}`,
      },
    }).then(async (result) => {
      const allBarbers = await result.json();

      if (result.ok) {
        setBarbers(allBarbers);
      }
    });
  }, [props.user.id, props.userToken]);

  return (
    <DashboardTemplate
      src={props.user.avatar}
      name={props.user.name}
      logoutOnclick={props.logoutOnclick}
    >
      <section
        data-modal={isModalOpen}
        className='place-self-center py-16 has-[+aside:hover]:opacity-30 data-[modal=true]:opacity-30'
      >
        <div className='bg-button-text flex h-[68] w-[612] flex-row place-content-between items-center rounded-2xl pl-8'>
          <input
            placeholder={translate('Search barber')}
            className='placeholder-grey text-xl outline-none'
          />

          <div className='bg-orange h-full w-20 place-content-center place-items-center rounded-tr-2xl rounded-br-2xl text-black hover:cursor-pointer'>
            <FiSearch className='text-3xl' />
          </div>
        </div>

        <p className='text-orange my-16 text-center text-3xl'>
          {translate('or')}
        </p>

        <Calendar />
      </section>

      {barbers !== undefined && (
        <Aside
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          user={props.user}
          barbers={barbers!}
        />
      )}

      {isModalOpen && (
        <div className='bg-button-text fixed top-52 left-[50%] z-100 h-[748] max-h-screen w-4xl translate-x-[-50%] rounded-2xl'>
          <div className='absolute top-0 left-0 h-full w-full overflow-auto p-8 px-12'>
            <div className='mb-4 flex flex-row place-content-between items-center'>
              <h2 className='text-orange text-3xl'>
                {translate('Closest barbers to you')}
              </h2>

              <FiX
                onClick={() => setIsModalOpen(false)}
                className='text-input-text text-2xl hover:cursor-pointer hover:text-white'
              />
            </div>

            {barbers &&
              barbers.map((barber) => (
                <BarberRow barber={barber} isModal={true} key={barber.id} />
              ))}
          </div>
        </div>
      )}
    </DashboardTemplate>
  );
}
