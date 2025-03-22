import AppError from '@/domain/utils/app-error';

export default class InvalidEmailError extends AppError {
  public readonly name = 'InvalidEmailError';

  constructor(email: string) {
    super('Invalid email: ' + email + '.');

    if (process.env.NEXT_ENV === 'test') {
      throw new AppError('Invalid Email Error');
    }
  }
}
