'use client';

import { HeaderPropsType } from '@/presentation/types/header-props-type';

import DashboardTemplate from '@/templates/dashboard-template';

import Button from '@/atoms/button';

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
          Atualizar perfil
        </Button>
        <Button type='button' color='black'>
          Ver agendamentos
        </Button>

        <footer className='mt-[65%]'>
          <Button type='button'>Sair</Button>
        </footer>
      </section>
    </DashboardTemplate>
  );
}
