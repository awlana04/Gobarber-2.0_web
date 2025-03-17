import Email from './email';

describe('Email value object', () => {
  it('should not be able to create a new email with an invalid email (blank email)', () => {
    const invalidEmail = '';

    const response = Email.create(invalidEmail).value as Error;

    expect(response.name).toEqual('InvalidEmailError');
    expect(response.message).toEqual('Invalid email: ' + invalidEmail + '.');
  });

  it('should not be able to create a new email with an invalid email (too many characters)', () => {
    const invalidEmail = 'a'.repeat(321);

    const response = Email.create(invalidEmail).value as Error;

    expect(response.name).toEqual('InvalidEmailError');
    expect(response.message).toEqual('Invalid email: ' + invalidEmail + '.');
  });

  it('should not be able to create a new email with an invalid email (invalid local)', () => {
    const invalidLocal = 'a'.repeat(65);
    const invalidEmail = `${invalidLocal}@doe.com`;

    const response = Email.create(invalidEmail).value as Error;

    expect(response.name).toEqual('InvalidEmailError');
    expect(response.message).toEqual('Invalid email: ' + invalidEmail + '.');
  });

  it('should not be able to create a new email with an invalid email (invalid domain)', () => {
    const invalidDomain = 'a'.repeat(256);
    const invalidEmail = `john@${invalidDomain}.com`;

    const response = Email.create(invalidEmail).value as Error;

    expect(response.name).toEqual('InvalidEmailError');
    expect(response.message).toEqual('Invalid email: ' + invalidEmail + '.');
  });

  it('should not be able to create a new email with an invalid email (invalid domain parts)', () => {
    const invalidDomainParts = 'a'.repeat(64);
    const invalidEmail = `john@doe.${invalidDomainParts}`;

    const response = Email.create(invalidEmail).value as Error;

    expect(response.name).toEqual('InvalidEmailError');
    expect(response.message).toEqual('Invalid email: ' + invalidEmail + '.');
  });

  it('should be able to create a new email', () => {
    const email = 'john@doe.com';

    const response = Email.create(email).value as Email;

    expect(response.value).toEqual(email);
    expect(response).toBeInstanceOf(Email);
  });
});
