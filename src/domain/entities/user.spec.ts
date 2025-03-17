import User from './user';

import { UserType } from '../types/user-type';

describe('User entity', () => {
  // const name = 'John Doe Junior';
  // const password = '12345678910';
  // const location = 'Somewhere Out of the Box';

  // it('should be able to update the user name', () => {
  //   const response = User.update({ name }).value as User;

  //   expect(response.name.value).toEqual(name);
  // });

  // it('should be able to update the user password', () => {
  //   const response = User.update({ password }).value as User;

  //   expect(response.password.value).toEqual(password);
  // });

  // it('should be able to update the user location', () => {
  //   const response = User.update({ location }).value as User;

  //   expect(response.location.value).toEqual(location);
  // });

  // it('should be able to update the user', () => {
  //   const response = User.update({ name, password, location }).value as User;

  //   expect(response.name.value).toEqual(name);
  //   expect(response.password.value).toEqual(password);
  //   expect(response.location.value).toEqual(location);
  // });

  it('should be able to create a new user', async () => {
    const userName = 'John Doe';
    const userEmail = 'john@doe.com';
    const password = '12345678';
    const location = 'Somewhere Over the Rainbow';
    const avatar = 'avatar.png';

    const user = new User();

    const response = user.create({
      id: '12345678',
      name: userName,
      email: userEmail,
      password,
      location,
      avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).value as UserType;

    console.log(response);

    expect(response.name).toEqual(userName);
    expect(response.email).toEqual(userEmail);
    expect(response.password).toEqual(password);
    expect(response.location).toEqual(location);
    expect(response.avatar).toEqual(avatar);

    expect(user).toBeInstanceOf(User);
  });
});
