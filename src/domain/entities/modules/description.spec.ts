import Description from './description';

describe('Description value object', () => {
  it('should not be able to create a new description with invalid description (too few characters)', () => {
    const description = 'a';

    const response = Description.create(description).value as Error;

    expect(response.name).toEqual('InvalidDescriptionError');
    expect(response.message).toEqual(
      'Invalid description: ' + description + '.'
    );
  });

  it('should not be able to create a new description with invalid description (too many characters)', () => {
    const description = 'a'.repeat(513);

    const response = Description.create(description).value as Error;

    expect(response.name).toEqual('InvalidDescriptionError');
    expect(response.message).toEqual(
      'Invalid description: ' + description + '.'
    );
  });

  it('should be able to create a new description', () => {
    const description = 'This is a really good place, please believe me :)';

    const response = Description.create(description).value as Description;

    expect(response.value).toEqual(description);
    expect(response).toBeInstanceOf(Description);
  });
});
