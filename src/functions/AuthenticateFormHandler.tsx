import { AuthenticateFormType } from '../validations/AuthenticateForm';

import api from '@/services/api';

export const AuthenticateFormHandler = async (data: AuthenticateFormType) => {
  const response = await api
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
      }

      return response.data;
    });

  return { response };
};
