import AppError from '../app-error';

export default class InvalidPropError extends Error {
  public readonly name = 'InvalidPropError';

  constructor(prop: string) {
    super('Invalid prop: ' + prop + '.');

    if (process.env.NEXT_ENV === 'test') {
      throw new AppError('Invalid Prop Error');
    }
  }
}
