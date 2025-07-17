'use client';

import { UserDataType } from '@/infra/types/data-type';
import AvailableLanguagesType from '@/shared/types/available-languages-type';
import DashboardTemplate from '../templates/dashboard-template';
import { Row } from '../components/molecules/row';
import Link from 'next/link';

type BarberDashboardScreenType = {
  user: UserDataType;
  logoutOnclick(): void;
  setLanguage(
    language: AvailableLanguagesType
  ): React.MouseEventHandler<HTMLUListElement> | undefined;
};

export default function BarberDashboardScreen(
  props: BarberDashboardScreenType
) {
  const today = new Date();

  return (
    <DashboardTemplate
      src={props.user.avatar}
      name={props.user.name}
      logoutOnclick={props.logoutOnclick}
      setLanguage={props.setLanguage}
    >
      <div className='my-24 flex w-3xl flex-col content-center justify-center place-self-center'>
        <section>
          <h1 className='text-4xl font-bold'>Horários agendados</h1>
          <p className='text-orange mt-4 mb-2 text-xl'>
            Hoje | Dia {today.getDay()} | {today.getMonth()}
          </p>
          <Link href='./calendar' className='text-orange text-base'>
            Ver calendário
          </Link>
        </section>
        <section>
          <h3 className='text-grey mt-14 mb-5 text-xl'>Atendimento a seguir</h3>

          <Row.RowRoot data={props.user} size='big'>
            <Row.RowHourAndDate data={props.user} dataType='user' hour={20} />
          </Row.RowRoot>
        </section>
      </div>
    </DashboardTemplate>
  );
}
