import email from './modules/email';
import User from './user';

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
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log(response.name, response.email, response);

    // const user = User.prototype.create({})

    // const response = new Entity({
    //   name,
    //   email,
    //   password,
    //   location,
    //   avatar,
    // }).create(
    //   { name, email, password, location },
    //   { name, email, password, location, avatar }
    // );

    // const response = User.create({
    //   name,
    //   email,
    //   password,
    //   location,
    //   avatar,
    // }).value as User;

    expect(response.name).toEqual(userName);
    expect(response.email).toEqual(userEmail);
    // expect(response.props.password.value).toEqual(password);
    // expect(response.props.location.value).toEqual(location);
    // expect(response.props.avatar).toEqual(avatar);

    expect(response).toBeInstanceOf(User);
  });
});
