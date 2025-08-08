'use client';

import { HeaderPropsType } from '@/presentation/types/header-props-type';

import DashboardTemplate from '@/templates/dashboard-template';

import Button from '@/atoms/button';
import Link from 'next/link';

type BarberProfileScreenPropsType = HeaderPropsType;

export default function BarberProfileScreen(
  props: BarberProfileScreenPropsType
) {
  return (
    <DashboardTemplate {...props} headerType='profile'>
      <section className='mt-44 flex w-96 flex-col place-content-center items-center justify-center place-self-center'>
        <h3 className='mb-6 place-self-start text-3xl font-medium'>
          Meu perfil
        </h3>

        <Button type='button' color='black'>
          <Link href={`./profile/update-user/${props.user.id}`}>
            Atualizar perfil
          </Link>
        </Button>
        <Link href={`./profile/update-barber/${props.user.id}`}>
          <Button type='button' color='black'>
            Atualizar perfil de barbeiro
          </Button>
        </Link>
        <Button type='button' color='black'>
          Ver agendamentos
        </Button>
        <Button type='button' color='black'>
          Ver perfil
        </Button>

        <footer className='mt-[65%]'>
          <Button type='button'>Sair</Button>
        </footer>
      </section>
    </DashboardTemplate>
  );
}
