import AppError from '@/domain/utils/app-error';

export default class InvalidPasswordError extends AppError {
  public readonly name = 'InvalidPasswordError';

  constructor(password: string) {
    super('Invalid password: ' + password + '.');

    if (process.env.NEXT_ENV === 'test') {
      throw new AppError('Invalid Password Error');
    }
  }
}
