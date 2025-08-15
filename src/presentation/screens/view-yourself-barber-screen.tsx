'use client';

import { BarberDataType } from '@/infra/types/data-type';
import DashboardTemplate from '../templates/dashboard-template';
import { HeaderPropsType } from '../types/header-props-type';
import AvatarImage from '../components/atoms/avatar-image';
import { FiCalendar, FiClock } from 'react-icons/fi';

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
          <h3 className='text-2xl font-medium text-white'>
            {props.barber.name}
          </h3>

          <div className='mt-10'>
            <div>
              <FiCalendar />
            </div>

            <div className='mt-2'>
              <FiClock />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
}
