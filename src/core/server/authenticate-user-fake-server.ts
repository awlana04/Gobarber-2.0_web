type AuthenticateUserType = {
  email: string;
  password: string;
};

export default async function AuthenticateUserFakeServer({
  email,
  password,
}: AuthenticateUserType) {
  const data = await fetch('http://localhost:4000/users');

  const user = (await data.json()) as Array<AuthenticateUserType>;

  console.log(data);

  const selectedUser = user.find(
    (user) => user.email === email && user.password === password
  );

  console.log(selectedUser);

  if (selectedUser) {
    const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(selectedUser));
  } else {
    alert('User not found');
  }
}
