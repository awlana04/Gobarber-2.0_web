import { SigninFormType } from '@validations/signin-form';

import api from '@services/api';

type SigninFormHandlerType = SigninFormType & { file: File | undefined };

export const SigninFormHandler = async (data: SigninFormHandlerType) => {
  const response = await api.post(
    '/users/',
    {
      name: data.name,
      email: data.email,
      password: data.password,
      location: 'Somewhere Over the Rainbow',
      avatar: data.file,
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data;boundary=None',
      },
    }
  );

  const { token, user } = response.data.value;

  localStorage.setItem('@GoBarber:token', token);
  localStorage.setItem('@GoBarber:user', JSON.stringify(user));

  return { response };
};
