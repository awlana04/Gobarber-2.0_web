import Description from './description';

describe('Description value object', () => {
  it('should not be able to create a new description with invalid description (too few characters)', () => {
    const description = 'a';

    const response = new Description(description).create().value as Error;

    expect(response.name).toEqual('InvalidDescriptionError');
    expect(response.message).toEqual(
      'Invalid description: ' + description + '.'
    );
  });

  it('should not be able to create a new description with invalid description (too many characters)', () => {
    const description = 'a'.repeat(513);

    const response = new Description(description).create().value as Error;

    expect(response.name).toEqual('InvalidDescriptionError');
    expect(response.message).toEqual(
      'Invalid description: ' + description + '.'
    );
  });

  it('should be able to create a new description', () => {
    const description = 'This is a really good place, please believe me :)';

    const response = new Description(description).create().value as Description;

    expect(response.value).toEqual(description);
    expect(response).toBeInstanceOf(Description);
  });
});
