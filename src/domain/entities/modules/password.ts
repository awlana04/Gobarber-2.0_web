import InvalidPasswordError from '@/domain/errors/invalid-password-error';

import { Either, left, right } from '@/utils/either';

import PasswordErrorHandling from '../../validations/password-error-handling';

export default class Password {
  public readonly value: string;

  constructor(password: string) {
    this.value = password;
  }

  // public static async validate(password: string) {
  //   const checkPassword = new PasswordErrorHandling();

  //   await checkPassword.exists(password);
  //   await checkPassword.length(password);

  //   return true;
  // }

  public static validate(password: string): boolean {
    if (!password) {
      return false;
    }

    if (password.trim().length < 8 || password.trim().length > 128) {
      return false;
    }

    return true;
  }

  public static create(
    password: string
  ): Either<InvalidPasswordError, Password> {
    if (!Password.validate(password)) {
      return left(new InvalidPasswordError(password));
    }

    return right(new Password(password));
  }
}
