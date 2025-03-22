import ValueObjectModel from '@/domain/bases/value-object-base';

import { Either, left, right } from '@/domain/utils/either';

import InvalidEmailError from '@/domain/errors/invalid-email-error';

import EmailErrorHandling from '@/domain/validations/email-error-handling';

export default class Email
  implements ValueObjectModel<string, InvalidEmailError, Email>
{
  public readonly value: string;

  constructor(email: string) {
    this.value = email;
  }

  public validate(email: string): boolean {
    const checkEmail = new EmailErrorHandling();

    if (checkEmail.exists(email) === false) {
      return false;
    }

    if (checkEmail.length(email) === false) {
      return false;
    }

    if (checkEmail.isValid(email) === false) {
      return false;
    }

    return true;
  }

  public create(): Either<InvalidEmailError, Email> {
    const email = this.value;

    if (!this.validate(email)) {
      return left(new InvalidEmailError(email));
    }

    return right(new Email(email));
  }
}
