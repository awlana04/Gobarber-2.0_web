import Password from './password';

describe('Password value object', () => {
  it('should not be able to create a new password with an invalid password (blank password)', () => {
    const invalidPassword = '';

    const response = Password.create(invalidPassword).value as Error;

    expect(response.message).toEqual(
      'Invalid password: ' + invalidPassword + '.'
    );
  });

  it('should not be able to create a new password with an invalid password (too few characters)', () => {
    const invalidPassword = '123';

    const response = Password.create(invalidPassword).value as Error;

    expect(response.message).toEqual(
      'Invalid password: ' + invalidPassword + '.'
    );
  });

  it('should not be able to create a new password with an invalid password (too many characters)', () => {
    const invalidPassword = '123'.repeat(129);

    const response = Password.create(invalidPassword).value as Error;

    expect(response.message).toEqual(
      'Invalid password: ' + invalidPassword + '.'
    );
  });

  it('should be able to create a new password', () => {
    const password = '12345678';

    const response = Password.create(password).value as Password;

    expect(response.value).toEqual(password);
    expect(response).toBeInstanceOf(Password);
  });
});
