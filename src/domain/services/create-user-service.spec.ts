import CreateUserService from './create-user-service';

describe('Create user service', () => {
  it('should be able to create a new user', () => {
    const createUserService = new CreateUserService();

    const user = createUserService.handle({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere over the rainbow',
    });

    expect(user).toBeDefined();
  });
});
