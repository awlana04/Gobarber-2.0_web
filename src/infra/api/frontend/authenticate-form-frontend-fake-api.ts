import FetchAPIBase from '../fetch-api-base';

type AuthenticateUserType = {
  email: string;
  password: string;
};

const AuthenticateFormFrontendFakeAPI = async (data: AuthenticateUserType) => {
  await FetchAPIBase('/users').then(async (response) => {
    const user = (await response.json()) as Array<AuthenticateUserType>;

    console.log(data);

    const selectedUser = user.find(
      (user) => user.email === data.email && user.password === data.password
    );

    console.log(selectedUser);

    if (selectedUser) {
      const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

      localStorage.setItem('@GoBarber:token', token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(selectedUser));
    } else {
      alert('User not found');
    }
  });
};

export default AuthenticateFormFrontendFakeAPI;
