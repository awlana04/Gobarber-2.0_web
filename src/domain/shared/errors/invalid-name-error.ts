import AppError from '../app-error';

export default class InvalidNameError extends AppError {
  public readonly name = 'InvalidNameError';

  constructor(name: string) {
    super('Invalid name: ' + name + '.');

    // if (process.env.NEXT_ENV === 'test') {
    throw new AppError('Invalid Name Error');
    // }
  }
}
