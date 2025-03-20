import Prop from './prop';

describe('Prop value object', () => {
  it('should not be able to create a new prop with invalid prop (too few characters)', () => {
    const prop = 'a';

    const response = new Prop(prop).create().value as Error;

    expect(response.message).toEqual('Invalid prop: ' + prop + '.');
  }),
    it('should not be able to create a new prop with invalid prop (too many characters)', () => {
      const prop = 'a'.repeat(129);

      const response = new Prop(prop).create().value as Error;

      expect(response.message).toEqual('Invalid prop: ' + prop + '.');
    });

  it('should be able to create a new prop', () => {
    const prop = 'username prop';

    const response = new Prop(prop).create().value as Prop;

    expect(response.value).toEqual(prop);
    expect(response).toBeInstanceOf(Prop);
  });
});
