import ValueObjectModel from '@/domain/bases/value-object-base';

import { Either, left, right } from '@/domain/utils/either';

import InvalidPasswordError from '@/domain/errors/invalid-password-error';

import PasswordErrorHandling from '@/domain/validations/password-error-handling';

export default class Password
  implements ValueObjectModel<string, InvalidPasswordError, Password>
{
  public readonly value: string;

  constructor(password: string) {
    this.value = password;
  }

  public validate(password: string): boolean {
    const checkPassword = new PasswordErrorHandling();

    if (checkPassword.exists(password) === false) {
      return false;
    }

    if (checkPassword.length(password) === false) {
      return false;
    }

    return true;
  }

  public create(): Either<InvalidPasswordError, Password> {
    const password = this.value;

    if (!this.validate(password)) {
      return left(new InvalidPasswordError(password));
    }

    return right(new Password(password));
  }
}
