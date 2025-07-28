import { format, isSameDay, isToday, parseISO } from 'date-fns';
import { FiCalendar } from 'react-icons/fi';

import { ModalPropsType } from '@/presentation/types/modal-props-type';
import { AppointmentDataType } from '@/infra/types/data-type';

import TextWithIcon from '@/atoms/text-with-icon';

import { Row } from '@/molecules/row';
import { UTCDate } from '@date-fns/utc';

type ModalCorePropsType = Pick<Partial<ModalPropsType>, 'setIsModalOpen'>;

type AppointmentsByPeriodOfDayRowPropsType = ModalCorePropsType & {
  appointments: AppointmentDataType[];
  period?: 'morning' | 'afternoon' | 'evening';
  dateText?: string;
  rowDirection?: 'left' | 'right';
  setAppointmentIDToDelete?(id: string): void;
  deleteAppointment?(): void;
};

export default function AppointmentsByPeriodOfDayRow(
  props: AppointmentsByPeriodOfDayRowPropsType
) {
  return (
    <div>
      {props.appointments.length >= 1 && (
        <section className='my-4 mt-12'>
          <h6 className='text-grey text-xl'>
            {(props.period === 'morning' && 'Manhã') ||
              (props.period === 'afternoon' && 'Tarde') ||
              (props.period === 'evening' && 'Noite') ||
              props.dateText}
          </h6>
          <div
            data-color={props.rowDirection === 'left'}
            className='data-[color===true]:bg-button-text bg-grey my-4 h-0.5 w-3xl rounded-full'
          />

          {props.appointments.map((appointment) => (
            <div
              key={appointment.id}
              className='my-4 flex w-3xl flex-row place-content-between'
              onClick={() => {
                {
                  props.setAppointmentIDToDelete &&
                    props.deleteAppointment &&
                    props.setAppointmentIDToDelete!(appointment.id) &&
                    props.setIsModalOpen!(true);
                }
              }}
            >
              {!props.rowDirection || props.rowDirection === 'left' ? (
                <div>
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
              ) : (
                <Row.RowRoot
                  data={appointment.user}
                  dataType='user'
                  size='medium'
                  Render={Row.RowHourAndDate}
                  hour={appointment.date}
                />
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
