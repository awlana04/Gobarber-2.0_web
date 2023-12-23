'use client';

import { useRouter } from 'next/navigation';

import api from '../../../services/api';

export default function Barber() {
  const Router = useRouter();

  const token = localStorage.getItem('@GoBarber:token');
  const user = JSON.parse(localStorage.getItem('@GoBarber:user')!);

  if (token && user) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  } else {
    window.alert('Você precisa estar logado');
    Router.push('../../logon');
  }

  return <h1>Bem-vindo Barbeiro!</h1>;
}
