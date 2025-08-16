'use client';

import Image from 'next/image';
import { FiCalendar, FiClock } from 'react-icons/fi';

import { HeaderPropsType } from '@/presentation/types/header-props-type';
import { BarberDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

import AvatarImage from '@/components/atoms/avatar-image';
import TextWithIcon from '@/components/atoms/text-with-icon';

type ViewYourselfBarberScreenPropsType = HeaderPropsType & {
  barber: BarberDataType;
};

export default function ViewYourselfBarberScreen(
  props: ViewYourselfBarberScreenPropsType
) {
  return (
    <DashboardTemplate {...props} headerType='dashboard'>
      <div className='mx-48 mt-16 flex flex-row space-x-8'>
        <AvatarImage src={props.user.avatar} size='extra-large' />

        <div className='flex flex-col justify-center'>
          <h3 className='text-4xl font-medium text-white'>
            {props.barber.name}
          </h3>

          <div className='mt-10'>
            <TextWithIcon
              color='orange-grey'
              icon={FiCalendar}
              text='Segunda à Sexta'
            />

            <div className='mt-2'>
              <TextWithIcon
                color='orange-grey'
                icon={FiClock}
                text='08h às 21hrs'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-28 flex flex-row items-center justify-center'>
        {props.barber.images &&
          props.barber.images.map((image) => (
            <Image
              key={image}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URI}/files/${image}`}
              alt='Imagem da barbearia'
              width={144}
              height={144}
            />
          ))}
      </div>
    </DashboardTemplate>
  );
}
