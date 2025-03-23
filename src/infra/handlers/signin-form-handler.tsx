type SigninFormType = {
  name: string;
  email: string;
  password: string | any;
  // location: string | any;
  avatar: File | any;
};

type SigninFormData = {
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

export const SigninFormHandler = async (data: SigninFormType) => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.append('location', 'Somewhere Over the Rainbow');
  formData.append('avatar', data.avatar);

  const response = await fetch('http://localhost:3333/users/', {
    method: 'POST',
    body: formData,
  }).then(async (response) => {
    const user = (await response.json()) as SigninFormData;

    localStorage.clear();

    console.log(response.status);

    if (response.ok) {
      localStorage.setItem('@GoBarber:token', user.token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    }

    console.log(response.status);

    return { server: response, user };
  });

  console.log(response.server.status);

  return { response };
  // const response = await api.post(
  //   '/users/',
  //   {
  //     name: data.name,
  //     email: data.email,
  //     password: data.password,
  //     location: 'Somewhere Over the Rainbow',
  //     avatar: data.file,
  //   },
  //   {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'multipart/form-data;boundary=None',
  //     },
  //   }
  // );

  // const { token, user } = response.data.value;

  // localStorage.setItem('@GoBarber:token', token);
  // localStorage.setItem('@GoBarber:user', JSON.stringify(user));

  // return { response };
};
