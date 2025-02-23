import InvalidPasswordError from '@/domain/shared/errors/invalid-password-error';
import { Either, left, right } from '../../shared/either';

export default class Password {
  public readonly value: string;

  constructor(password: string) {
    this.value = password;
  }

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
