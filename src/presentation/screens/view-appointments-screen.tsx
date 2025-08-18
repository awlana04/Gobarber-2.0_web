import { FiCalendar } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import { HeaderPropsType } from '../types/header-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import DashboardTemplate from '../templates/dashboard-template';

import TodayTitle from '@/atoms/today-title';
import TextWithIcon from '@/atoms/text-with-icon';
import { Row } from '@/molecules/row';
import NextActiveAppointmentRow from '@/components/organisms/next-active-appointment-row';

type ViewAppointmentsScreenPropsType = HeaderPropsType & {
  appointments: AppointmentDataType[];
  nextAppointment: AppointmentDataType | undefined;
};

export default function ViewAppointmentsScreen(
  props: ViewAppointmentsScreenPropsType
) {
  return (
    <DashboardTemplate headerType='profile' {...props}>
      <div className='mt-36 flex flex-col'>
        <TodayTitle title='Agendamentos' />

        <NextActiveAppointmentRow
          appointment={props.nextAppointment}
          isBarber={false}
        />

        {props.appointments.map((appointment) => (
          <div
            key={appointment.id}
            className='my-4 flex w-3xl flex-row place-content-between'
          >
            <div className='flex w-3xl flex-row justify-between'>
              <TextWithIcon
                icon={FiCalendar}
                color='orange-grey'
                text={format(parseISO(String(appointment.date)), 'HH:mm')}
              />
              <Row.RowRoot
                data={appointment.user}
                dataType='user'
                size='medium'
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardTemplate>
  );
}
