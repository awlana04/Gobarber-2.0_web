type AuthenticateFormType = {
  email: any;
  password: any;
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

export const AuthenticateFormHandler = async (data: AuthenticateFormType) => {
  const response = await fetch('http://localhost:3333/users/session/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    const user = (await response.json()) as AuthenticateData;

    if (!response.ok) {
      return { server: response, user };
    } else {
      localStorage.setItem('@GoBarber:token', user.token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));

      if (user.barber !== null) {
        localStorage.setItem('@GoBarber:barber', JSON.stringify(user.barber));
      }
    }
    return { server: response, user };
  });

  return { response };
};
