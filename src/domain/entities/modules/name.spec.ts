import Name from './name';

describe('Name value object', () => {
  it('should not be able to create a new name with an invalid name (blank name)', () => {
    const invalidName = '';

    const response = Name.create(invalidName).value as Error;

    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should not be able to create a new name with an invalid name (too few characters)', () => {
    const invalidName = 'a';

    const response = Name.create(invalidName).value as Error;

    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should not be able to create a new name with an invalid name (too many characters)', () => {
    const invalidName = 'a'.repeat(129);

    const response = Name.create(invalidName).value as Error;

    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should be able to create a new name', () => {
    const name = 'John Doe';

    const response = Name.create(name).value as Name;

    expect(response.value).toEqual(name);
    expect(response).toBeInstanceOf(Name);
  });
});
