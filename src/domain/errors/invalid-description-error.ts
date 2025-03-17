import AppError from '@/utils/app-error';

export default class InvalidDescriptionError extends AppError {
  public readonly name = 'InvalidDescriptionError';

  constructor(description: string) {
    super('Invalid description: ' + description + '.');

    if (process.env.NEXT_ENV === 'test') {
      throw new AppError('Invalid Description Error');
    }
  }
}
