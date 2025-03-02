type UserDataType = {
  name: string;
  email: string;
  password: string;
};

export default async function CreateUserFakeServer({
  name,
  email,
  password,
}: UserDataType) {
  const previousData = await fetch('http://localhost:4000/users');

  const users = (await previousData.json()) as unknown as Array<UserDataType>;

  if (users.find((user) => user.email === email)) {
    alert('User already exists');
  } else {
    const user = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        location: 'Somewhere Over the Rainbow',
      }),
    });

    const token = `gobarber_fake_server_token-${Math.random().toExponential(12).toString()}`;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
  }
}
