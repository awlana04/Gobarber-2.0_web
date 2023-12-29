import { useRouter } from 'next/navigation';
import { AuthenticateFormType } from '../validations/AuthenticateForm';

import api from '@/services/api';

export default function AuthenticateFormHandler(data: AuthenticateFormType) {
  // console.log(data);

  const Router = useRouter();

  api
    .post('/users/session', {
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      const { token, user, barber } = response.data;

      localStorage.setItem('@GoBarber:token', token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));

      if (barber !== null) {
        localStorage.setItem('@GoBarber:barber', JSON.stringify(barber));

        Router.push('../dashboard/barber');
      } else {
        Router.push('../dashboard/client');
      }
    });

  return console.log(data);
}
