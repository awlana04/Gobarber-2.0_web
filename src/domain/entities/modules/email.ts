import InvalidEmailError from '@/domain/shared/errors/invalid-email-error';
import { Either, left, right } from '../../shared/either';

import EmailErrorHandling from '../../validations/email-error-handling';

export default class Email {
  public readonly value: string;

  private constructor(email: string) {
    this.value = email;
  }

  get email() {
    return this.value;
  }

  private static async validate(email: string) {
    const checkEmail = new EmailErrorHandling();

    await checkEmail.exists(email);
    await checkEmail.length(email);
    await checkEmail.isValid(email);

    return true;
  }

  public static create(email: string): Either<InvalidEmailError, Email> {
    if (!Email.validate(email)) {
      return left(new InvalidEmailError(email));
    }

    return right(new Email(email));
  }
}
