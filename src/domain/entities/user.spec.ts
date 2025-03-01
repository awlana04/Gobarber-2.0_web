import User from './user';

describe('User entity', () => {
  const name = 'John Doe Junior';
  const password = '12345678910';
  const location = 'Somewhere Out of the Box';

  it('should be able to update the user name', () => {
    const response = User.update({ name }).value as User;

    expect(response.name.value).toEqual(name);
  });

  it('should be able to update the user password', () => {
    const response = User.update({ password }).value as User;

    expect(response.password.value).toEqual(password);
  });

  it('should be able to update the user location', () => {
    const response = User.update({ location }).value as User;

    expect(response.location.value).toEqual(location);
  });

  it('should be able to update the user', () => {
    const response = User.update({ name, password, location }).value as User;

    expect(response.name.value).toEqual(name);
    expect(response.password.value).toEqual(password);
    expect(response.location.value).toEqual(location);
  });

  it('should be able to create a new user', () => {
    const name = 'John Doe';
    const email = 'john@doe.com';
    const password = '12345678';
    const location = 'Somewhere Over the Rainbow';
    const avatar = 'avatar.png';

    const response = User.create({
      name,
      email,
      password,
      location,
      avatar,
    }).value as User;

    expect(response.name.value).toEqual(name);
    expect(response.email.value).toEqual(email);
    expect(response.password.value).toEqual(password);
    expect(response.location.value).toEqual(location);
    expect(response.props.avatar).toEqual(avatar);

    expect(response).toBeInstanceOf(User);
  });
});
