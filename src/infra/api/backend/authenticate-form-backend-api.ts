import FetchAPIBase from '../fetch-api-base';

type AuthenticateFormType = {
  email: string;
  password: string;
};

type AuthenticateData = {
  user: {
    id: string;
    name: string;
    email: string;
    location: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    barber: object;
  };
  token: string;
  refreshToken: {
    id: string;
    expiresIn: number;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
  barber: object;
};

const AuthenticateFormBackendAPI = async (data: AuthenticateFormType) =>
  await FetchAPIBase('/users/session/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  }).then(async (response) => {
    const user = (await response.json()) as AuthenticateData;

    localStorage.clear();

    if (response.ok) {
      localStorage.setItem('@GoBarber:token', user.token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));

      if (user.barber !== null) {
        localStorage.setItem('@GoBarber:barber', JSON.stringify(user.barber));
      }
    }
    return { server: response, user };
  });

export default AuthenticateFormBackendAPI;
