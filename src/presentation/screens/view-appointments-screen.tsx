import { FiCalendar } from 'react-icons/fi';
import { format, isPast, parseISO } from 'date-fns';

import { HeaderPropsType } from '../types/header-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import DashboardTemplate from '@/templates/dashboard-template';

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
  const pastAppointments = props.appointments.filter((appointment) => {
    return isPast(appointment.date) === true;
  });

  const groupedByDate = new Map<string, AppointmentDataType[]>();

  for (const appointment of pastAppointments) {
    const dateKey = new Date(appointment.date).toDateString(); // Use toDateString() to ignore time

    if (!groupedByDate.has(dateKey)) {
      groupedByDate.set(dateKey, []);
    }

    groupedByDate.get(dateKey)?.push(appointment);
  }

  const sortedArraysOfEvents: AppointmentDataType[][] = Array.from(
    groupedByDate.values()
  )
    .sort((arrA, arrB) => {
      // Sort outer arrays by the date of their first element
      return (
        new Date(arrA[0].date).getTime() - new Date(arrB[0].date).getTime()
      );
    })
    .map((arr) => {
      // Sort inner arrays by time (if applicable)
      return arr.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    });

  return (
    <DashboardTemplate headerType='profile' {...props}>
      <div className='m-auto mt-36 flex w-4xl flex-col pb-20'>
        <h1 className='mt-4 text-4xl font-bold'>Agendamentos</h1>

        <NextActiveAppointmentRow
          appointment={props.nextAppointment}
          isBarber={false}
        />

        {sortedArraysOfEvents.map((date) => (
          <div>
            {Array(date.find((appointmentDate) => appointmentDate.date)).map(
              (date) =>
                date && (
                  <div className='mt-10'>
                    <p className='text-grey text-xl'>
                      {format(date.date, 'dd/MM/y')}
                    </p>
                    <div className='bg-button-text my-4 h-0.5 w-3xl rounded-full' />
                  </div>
                )
            )}

            {date.map((appointment) => (
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
        ))}
      </div>
    </DashboardTemplate>
  );
}
