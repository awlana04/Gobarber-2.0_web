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
    await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        location: 'Somewhere Over the Rainbow',
      }),
    });
  }
}
